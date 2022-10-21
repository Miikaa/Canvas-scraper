# A Canvas to do-list scraper

A canvas to do-list scraper robot. Stores to do-assignments as text.

When run, the robot will:

- open a real web browser
- login with your canvas access token
- load the contents as json
- create a file system directory for the json file
- store the content into a json file


# How to run

- All you need to do is input your access token into the ${CANVAS_TOKEN} variable
- Then just run the file and you'll get your to do-assignments as .json