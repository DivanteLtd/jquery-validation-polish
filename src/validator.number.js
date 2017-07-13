/* eslint-disable func-names */

/* Validator numbers */
jQuery.validator.methods.number = function(value, element) {
  let val = value;
  val = val.replace(",", ".");
  const isNumber = !isNaN(parseFloat(val)) && isFinite(val);
  return this.optional(element) || isNumber;
};
jQuery.validator.messages.number = "Proszę wpisać poprawną liczbę.";

/* Number validation */
jQuery.validator.addClassRules("js-validation-number", {
  number: true,
});
