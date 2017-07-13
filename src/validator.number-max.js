/* eslint-disable func-names */

/* Validator number max */
jQuery.validator.addMethod(
  "number_max",
  function(value, element, param) {
    let val = value;
    val = val.replace(",", ".");
    const isNumber =
      !isNaN(parseFloat(val)) &&
      isFinite(val) &&
      parseFloat(val) <= parseFloat(param);
    return this.optional(element) || isNumber;
  },
  "Proszę wpisać wartość mniejszą lub równą {0}."
);
