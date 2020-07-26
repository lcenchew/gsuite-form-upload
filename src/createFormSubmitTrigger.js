// Run this to create a onFormSumbit trigger attached to the form
//
// https://developers.google.com/apps-script/guides/triggers/events#form-submit_1
// https://developers.google.com/apps-script/reference/script/script-app#newtriggerfunctionname
function createFormSubmitTrigger() {
    var form = FormApp.getActiveForm();
    ScriptApp.newTrigger('main')
        .forForm(form)
        .onFormSubmit()
        .create();
}
