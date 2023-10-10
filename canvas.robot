*** Settings ***
Documentation       Opens the Canvas web page and stores some content.

Library             Collections
Library             RPA.Browser.Selenium
Library             RPA.FileSystem
Library             RPA.RobotLogListener
Library             SeleniumLibrary
Library             RPA.JSON
Library             RPA.Tables


*** Variables ***
${JSON_DIRECTORY}           ${CURDIR}${/}output
${CANVAS_TOKEN}             INSERT_CANVAS_TOKEN_HERE
${CANVAS_ASSIGNMENTS}       https://canvas.laurea.fi/api/v1/courses/5375/assignments?access_token=${CANVAS_TOKEN}
${CANVAS_COURSE_TODO}       https://canvas.laurea.fi/api/v1/courses/5375/todo?access_token=${CANVAS_TOKEN}
${CANVAS_TODO}
...                         https://canvas.laurea.fi/api/v1/users/self/todo?access_token=${CANVAS_TOKEN}‍‍


*** Tasks ***
Store the latest todo:s
    Open Canvas homepage
    Get assignments
    Store the json
    Filter json
    Sleep    500ms
    [Teardown]    RPA.Browser.Selenium.Close Browser


*** Keywords ***
Open Canvas homepage
    RPA.Browser.Selenium.Open Chrome Browser
    ...    https://canvas.laurea.fi/api/v1/users/self/todo?access_token=${CANVAS_TOKEN}

Get assignments
    ${body}=    RPA.Browser.Selenium.Get Text    //body
    ${json}=    Convert String to JSON    ${body}
    RETURN    ${json}

Filter json
    ${json}=    Get assignments
    ${course_id}=    Get values from JSON
    ...    ${json}
    ...    $.[*].course_id
    ${assignment_id}=    Get values from JSON
    ...    ${json}
    ...    $[?(@.assignment.points_possible > 2)].[*]

    Log    ${json}    console=${True}
    RETURN    ${json}

Store the json
    Create Directory    ${JSON_DIRECTORY}    parents=True
    ${json}=    Filter json
    ${formatted_json}=    Convert JSON to String    ${json}
    FOR    ${tweet}    IN    ${formatted_json}
        ${text_file}=    Set Variable    ${JSON_DIRECTORY}/todo.json
        Create File    ${text_file}    ${formatted_json}    overwrite=True    encoding=UTF-8
    END
