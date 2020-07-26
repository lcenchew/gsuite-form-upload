// Update and run this to create the form programatically.
// Unfortunately the file upload item can be created in this way yet.
// https://developers.google.com/apps-script/reference/forms

function setupForm() {
    var form = FormApp.getActiveForm();

    form.setTitle('File Upload Form')
        .setDescription('Use this form to upload file.');

    form.addTextItem()
        .setTitle('What is the file name?')
        .setRequired(true);

    form.addParagraphTextItem()
        .setTitle('What is the file content?')
        .setRequired(false);

    form.addPageBreakItem()
        .setTitle('Getting to know you');

    form.addDateItem()
        .setTitle('When were you born?');

    form.addGridItem()
        .setTitle('Rate your interests')
        .setRows(['Cars', 'Computers', 'Celebrities'])
        .setColumns(['Boring', 'So-so', 'Interesting']);

    form.addMultipleChoiceItem()
        .setTitle('Do you prefer cats or dogs?')
        .setChoiceValues(['Cats','Dogs'])
        .showOtherOption(true);

    var item = form.addCheckboxItem();
    item.setTitle('What condiments would you like on your hot dog?');
    item.setChoices([
            item.createChoice('Ketchup'),
            item.createChoice('Mustard'),
            item.createChoice('Relish')
        ]);

    Logger.log('Published URL: ' + form.getPublishedUrl());
    Logger.log('Editor URL: ' + form.getEditUrl());
}
