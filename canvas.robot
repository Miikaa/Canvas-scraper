*** Settings ***
Documentation       Opens the Canvas web page and stores some content.

Library             Collections
Library             RPA.Browser.Selenium
Library             RPA.FileSystem
Library             RPA.RobotLogListener
Library             SeleniumLibrary
Library             RPA.JSON


*** Variables ***
${JSON_DIRECTORY}           ${CURDIR}${/}output${/}json/
${CANVAS_TOKEN}             13402~lPA95yvSojhrLIVjDvXrPN53M4q9jkyDFO4hpDSAvb8JEfQQrehcO0ZZHFeIiBvk
${CANVAS_ASSIGNMENTS}       https://canvas.laurea.fi/api/v1/courses/5375/assignments?access_token=${CANVAS_TOKEN}
${CANVAS_COURSE_TODO}       https://canvas.laurea.fi/api/v1/courses/5375/todo?access_token=${CANVAS_TOKEN}
${CANVAS_TODO}
...                         https://canvas.laurea.fi/api/v1/users/self/todo?access_token=${CANVAS_TOKEN}‍‍


*** Tasks ***
Store the latest tweets by given user name
    Open Canvas homepage
    Get assignments
    Store the json
    Sleep    500ms
    [Teardown]    RPA.Browser.Selenium.Close Browser


*** Keywords ***
Open Canvas homepage
    Open Available Browser
    ...    https://canvas.laurea.fi/api/v1/users/self/todo?access_token=${CANVAS_TOKEN}

Get assignments
    ${json}=    RPA.Browser.Selenium.Get Text    //body
    RETURN    ${json}

Store the json
    Create Directory    ${JSON_DIRECTORY}    parents=True
    ${index}=    Set Variable    1
    ${json}=    Get assignments
    FOR    ${tweet}    IN    ${json}
        ${text_file}=    Set Variable    ${JSON_DIRECTORY}/json-${index}.json
        Create File    ${text_file}    ${json}    overwrite=True
        ${index}=    Evaluate    ${index} + 1
    END
