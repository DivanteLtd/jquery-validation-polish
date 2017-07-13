/* Validator for url */
jQuery.validator.messages.url = "Wprowadź poprawny link.";

/* URL validator */
jQuery.validator.addClassRules("js-validation-url", {
  url: true,
});
