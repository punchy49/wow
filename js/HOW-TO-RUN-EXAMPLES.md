###Javascript
**first run "npm install" to install all the dependiences**

to run an example just type "node --filename.js--" (for instance "node button-details.js"),
then navigate to http://localhost:3000/ in your web browser.

##Files explanation

### button-client.html and button-admin.html
These files render a static client and admin view of the button that you have downloaded code from.

No API requests used here, just HTML+Javascript on the browser side.

### form-attachment
Example of attaching some files to the form. On server side you'll get a key with reference to uploaded files.
Javascript installation code is copied from the "Custom form (attachment mode)" tab from the install settings of the button.

API method: `/api/confirmAttachment`

### button-details
Get button details by ID. 

API method: `/api/getButtons`

### generate-new-button
Generate a new button that settings are copied from button you have downloaded code from. 

You can specify directory that files are kept in for some context. It may be your e-commerce order ID, user, page etc. 

API method: `/api/provideButton`

### upload-file-from-api
Uploads a file to specified button via API

API method: `/api/uploadFile`

### simple-api-lib
Helper methods for accessing API

v1.6.0