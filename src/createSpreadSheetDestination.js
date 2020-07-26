// Update and run this to create the spreadsheet to store the form responses.
//
// https://developers.google.com/apps-script/reference/forms/destination-type

function createSpreadsheetDestination() {
    var form = FormApp.getActiveForm();
    var ss = SpreadsheetApp.create('File Upload Response');

    var formFile = DriveApp.getFileById(form.getId());
    var ssFile = DriveApp.getFileById(ss.getId());

    // move the spreadsheet to the same folder as the form
    var formFolder = formFile.getParents().next();
    formFolder.addFile(ssFile);
    ssFile.getParents().next().removeFile(ssFile);

    // Update the form's response destination.
    form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
}
