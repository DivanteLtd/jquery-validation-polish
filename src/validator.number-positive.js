/* eslint-disable func-names */

/* Validator number > 0 */
jQuery.validator.addMethod(
  "number_positive",
  function(value, element) {
    let val = value;
    val = val.replace(",", ".");
    const isNumber =
      !isNaN(parseFloat(val)) && isFinite(val) && parseFloat(val) > 0;
    return this.optional(element) || isNumber;
  },
  "Proszę wpisać poprawną liczbę."
);

/* Number positive validation */
jQuery.validator.addClassRules("js-validation-number-positive", {
  number_positive: true,
});
