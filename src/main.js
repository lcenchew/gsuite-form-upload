function main(event) {

  // https://developers.google.com/apps-script/guides/triggers/events#form-submit_1
  Logger.log("Event response: ", event.response);
  Logger.log("Event source: ", event.source);
  Logger.log("ID of trigger: ", event.triggerUid);

  var form = FormApp.getActiveForm();
  Logger.log("This form ID: ", form.getId());

  var formResponses = form.getResponses();
  var formResponse = formResponses[formResponses.length - 1];
  var itemResponses = formResponse.getItemResponses();
  Logger.log("itemResponses: ", itemResponses);

  for (var i = 0; i < itemResponses.length; i++) {
    var itemResponse = itemResponses[i];
    var itemType = itemResponse.getItem().getType();

    // Notice difference in log
    Logger.log("itemType: ", itemType);
    console.log("itemType: ", itemType);

    if (itemType == "FILE_UPLOAD") {
      fileIds = itemResponse.getResponse();
      Logger.log("fileIds: ", fileIds);
      for (var j = 0; j < fileIds.length; j++) {
        var file = DriveApp.getFileById(fileIds[j]);

        // Rename the file
        // file.setName(fileIds[j]);

        // Set sharing access and permission
        // file.setSharing(DriveApp.Access.DOMAIN, DriveApp.Permission.VIEW);

        // Add viewer to the file
        // file.addViewer('');
      }
    }
  }
}
