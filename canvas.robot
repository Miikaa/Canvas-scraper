*** Settings ***
Documentation       Opens the Canvas web page and stores some content.

Library             Collections
Library             RPA.Browser.Selenium
Library             RPA.FileSystem
Library             RPA.RobotLogListener
Library             SeleniumLibrary
Library             RPA.JSON
Library             RPA.Tables
Library             RPA.Dialogs


*** Variables ***
${JSON_DIRECTORY}           ${CURDIR}${/}output${/}json/
${CANVAS_TOKEN}             13402~eaC3BJlKEpkt5hAWpnHQlC0PCsdAeJmCP3AdhMPpyCPbMBHa2mqLtOMQYT2b5lRH
${CANVAS_ASSIGNMENTS}       https://canvas.laurea.fi/api/v1/courses/5375/assignments?access_token=${CANVAS_TOKEN}
${CANVAS_COURSE_TODO}       https://canvas.laurea.fi/api/v1/courses/5375/todo?access_token=${CANVAS_TOKEN}
${CANVAS_TODO}
...                         https://canvas.laurea.fi/api/v1/users/self/todo?access_token=${CANVAS_TOKEN}‍‍


*** Tasks ***
Store the latest tweets by given user name
    Open Canvas homepage
    Get assignments
    Store the json
    Filter json
    Sleep    500ms
    [Teardown]    RPA.Browser.Selenium.Close Browser


*** Keywords ***
Open Canvas homepage
    Open Available Browser
    ...    https://canvas.laurea.fi/api/v1/users/self/todo?access_token=${CANVAS_TOKEN}

Get assignments
    ${body}=    RPA.Browser.Selenium.Get Text    //body
    ${json}=    Convert String to JSON    ${body}
    RETURN    ${json}

Filter json
    ${json}=    Get assignments
    ${courses}=    Get values from JSON
    ...    ${json}
    ...    $.[*].context_name
    ${course_id}=    Get values from JSON
    ...    ${json}
    ...    $.[*].course_id
    ${result}=    Catenate
    ...    "Courses " + ${courses} " + course ids " +
    ...    ${course_id}
    Log    ${result}    console=${True}
    ${table}=    Create Table    [{"course_name":"${courses}", "course_id":"${course_id}"}]
    Write table to CSV    ${table}    ${JSON_DIRECTORY}/table.csv
    RETURN    ${result}

Store the json
    Create Directory    ${JSON_DIRECTORY}    parents=True
    ${json}=    Filter json
    ${formatted_json}=    Convert JSON to String    ${json}
    FOR    ${tweet}    IN    ${formatted_json}
        ${text_file}=    Set Variable    ${JSON_DIRECTORY}/json1.json
        Create File    ${text_file}    ${formatted_json}    overwrite=True    encoding=UTF-8
    END
