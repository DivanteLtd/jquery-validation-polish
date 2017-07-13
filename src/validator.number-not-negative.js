/* eslint-disable func-names */

/* Validator number >= 0 */
jQuery.validator.addMethod(
  "number_not_negative",
  function(value, element) {
    let val = value;
    val = val.replace(",", ".");
    const isNumber =
      !isNaN(parseFloat(val)) && isFinite(val) && parseFloat(value) >= 0;
    return this.optional(element) || isNumber;
  },
  "Proszę wpisać poprawną liczbę."
);

/* Number not negative validation */
jQuery.validator.addClassRules("js-validation-number-not-negative", {
  number_not_negative: true,
});
