/* eslint-disable func-names */

/* Validator number integer */
jQuery.validator.addMethod(
  "number_integer",
  function(value, element) {
    let val = value;
    val = val.replace(",", ".");
    const isNumber =
      !isNaN(parseFloat(val)) && isFinite(val) && parseFloat(val) % 1 === 0;
    return this.optional(element) || isNumber;
  },
  "Proszę wpisać liczbę całkowitą."
);

jQuery.validator.addClassRules("js-validation-number-integer", {
  number_integer: true,
});
