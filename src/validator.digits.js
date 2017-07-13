/* eslint-disable func-names */

/* Validator digits */
jQuery.validator.methods.digits = function(value, element) {
  const re = /^[0-9]+$/;
  return this.optional(element) || re.test(value);
};
jQuery.validator.messages.digits = "Dozwolone są tylko cyfry.";

/* Digits validator */
jQuery.validator.addClassRules("js-validation-digits", {
  digits: true,
});
