function main() {

  var form = FormApp.getActiveForm();
  Logger.log("This form ID: " + form.getId());

  var formResponses = form.getResponses();
  var formResponse = formResponses[formResponses.length - 1];
  var itemResponses = formResponse.getItemResponses();
  Logger.log(itemResponses);

  for (var i = 0; i < itemResponses.length; i++) {
    var itemResponse = itemResponses[i];
    var itemType = itemResponse.getItem().getType();
    Logger.log(itemType);

    if (itemType == "FILE_UPLOAD") {
      fileIds = itemResponse.getResponse();
      Logger.log(fileIds);
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
