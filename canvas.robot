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
${JSON_DIRECTORY}           ${CURDIR}${/}output
${CANVAS_TOKEN}             insert_token_here
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
    Open Chrome Browser    https://canvas.laurea.fi/api/v1/users/self/todo?access_token=${CANVAS_TOKEN}

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
    ${assignment_id}=    Get values from JSON
    ...    ${json}
    ...    $[?(@.assignment.points_possible > 2)].assignment.[*]
    ${result}=    Delete from JSON    ${assignment_id}    $..lock_at
    ${result}=    Delete from JSON    ${assignment_id}    $..unlock_at
    ${result}=    Delete from JSON    ${assignment_id}    $..grading_type
    ${result}=    Delete from JSON    ${assignment_id}    $..assignment_group_id
    ${result}=    Delete from JSON    ${assignment_id}    $..grading_standard_id
    ${result}=    Delete from JSON    ${assignment_id}    $..created_at
    ${result}=    Delete from JSON    ${assignment_id}    $..updated_at
    ${result}=    Delete from JSON    ${assignment_id}    $..peer_reviews
    ${result}=    Delete from JSON    ${assignment_id}    $..automatic_peer_reviews
    ${result}=    Delete from JSON    ${assignment_id}    $..position
    ${result}=    Delete from JSON    ${assignment_id}    $..grade_group_students_individually
    ${result}=    Delete from JSON    ${assignment_id}    $..anonymous_peer_reviews
    ${result}=    Delete from JSON    ${assignment_id}    $..group_category_id
    ${result}=    Delete from JSON    ${assignment_id}    $..post_to_sis
    ${result}=    Delete from JSON    ${assignment_id}    $..moderated_grading
    ${result}=    Delete from JSON    ${assignment_id}    $..omit_from_final_grade
    ${result}=    Delete from JSON    ${assignment_id}    $..intra_group_peer_reviews
    ${result}=    Delete from JSON    ${assignment_id}    $..anonymous_instructor_annotations
    ${result}=    Delete from JSON    ${assignment_id}    $..anonymous_grading
    ${result}=    Delete from JSON    ${assignment_id}    $..graders_anonymous_to_graders
    ${result}=    Delete from JSON    ${assignment_id}    $..grader_count
    ${result}=    Delete from JSON    ${assignment_id}    $..grader_comments_visible_to_graders
    ${result}=    Delete from JSON    ${assignment_id}    $..final_grader_id
    ${result}=    Delete from JSON    ${assignment_id}    $..grader_names_visible_to_final_grader
    ${result}=    Delete from JSON    ${assignment_id}    $..annotatable_attachment_id
    ${result}=    Delete from JSON    ${assignment_id}    $..secure_params
    ${result}=    Delete from JSON    ${assignment_id}    $..lti_context_id
    ${result}=    Delete from JSON    ${assignment_id}    $..submission_types
    ${result}=    Delete from JSON    ${assignment_id}    $..due_date_required
    ${result}=    Delete from JSON    ${assignment_id}    $..max_name_length
    ${result}=    Delete from JSON    ${assignment_id}    $..in_closed_grading_period
    ${result}=    Delete from JSON    ${assignment_id}    $..graded_submissions_exist
    ${result}=    Delete from JSON    ${assignment_id}    $..is_quiz_assignment
    ${result}=    Delete from JSON    ${assignment_id}    $..can_duplicate
    ${result}=    Delete from JSON    ${assignment_id}    $..original_course_id
    ${result}=    Delete from JSON    ${assignment_id}    $..original_assignment_id
    ${result}=    Delete from JSON    ${assignment_id}    $..original_lti_resource_link_id
    ${result}=    Delete from JSON    ${assignment_id}    $..original_assignment_name
    ${result}=    Delete from JSON    ${assignment_id}    $..original_quiz_id
    ${result}=    Delete from JSON    ${assignment_id}    $..workflow_state
    ${result}=    Delete from JSON    ${assignment_id}    $..important_dates
    ${result}=    Delete from JSON    ${assignment_id}    $..muted
    ${result}=    Delete from JSON    ${assignment_id}    $..allowed_extensions
    ${result}=    Delete from JSON    ${assignment_id}    $..only_visible_to_overrides
    ${result}=    Delete from JSON    ${assignment_id}    $..submissions_download_url
    ${result}=    Delete from JSON    ${assignment_id}    $..post_manually
    ${result}=    Delete from JSON    ${assignment_id}    $..anonymize_students
    ${result}=    Delete from JSON    ${assignment_id}    $..require_lockdown_browser
    ${result}=    Delete from JSON    ${assignment_id}    $..all_dates
    ${result}=    Delete from JSON    ${assignment_id}    $..peer_review_count
    ${result}=    Delete from JSON    ${assignment_id}    $..peer_reviews_assign_at

    Log    ${result}    console=${True}
    RETURN    ${result}

Store the json
    Create Directory    ${JSON_DIRECTORY}    parents=True
    ${json}=    Filter json
    ${formatted_json}=    Convert JSON to String    ${json}
    FOR    ${tweet}    IN    ${formatted_json}
        ${text_file}=    Set Variable    ${JSON_DIRECTORY}/todo.json
        Create File    ${text_file}    ${formatted_json}    overwrite=True    encoding=UTF-8
    END
