/**
 * Run this to create and return a prefilled URL
 * 
 * @see {@link https://developers.google.com/apps-script/reference/forms/item|Form Item} 
 * @see {@link https://developers.google.com/apps-script/reference/forms/form#createresponse|Create Response}
 * @see {@link https://developers.google.com/apps-script/reference/forms/multiple-choice-item#createresponseresponse|Create  Multiple-Choice Response}
 * @see {@link https://developers.google.com/apps-script/reference/forms/form-response#toprefilledurl|toPrefilledUrl}
 *
 * @return {string} prefilledUrl
 */
function getPrefilledUrl() {
  var form = FormApp.getActiveForm();
  var items = form.getItems();
  console.log(items);
  
  var itemResponse = items[6].asMultipleChoiceItem().createResponse("Cats");

  var response = form.createResponse();
  response.withItemResponse(itemResponse);

  console.log(response.toPrefilledUrl());
  console.log(form.shortenFormUrl(response.toPrefilledUrl()));
  return response.toPrefilledUrl();
}
