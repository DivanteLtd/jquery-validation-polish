/* eslint-disable func-names */

/* Validator number min */
jQuery.validator.addMethod(
  "number_min",
  function(value, element, param) {
    let val = value;
    val = val.replace(",", ".");
    const isNumber =
      !isNaN(parseFloat(val)) &&
      isFinite(val) &&
      parseFloat(val) >= parseFloat(param);
    return this.optional(element) || isNumber;
  },
  "Proszę wpisać wartość większą lub równą {0}."
);
