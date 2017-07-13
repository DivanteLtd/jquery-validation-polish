/* eslint-disable func-names */

/* Validator number between */
jQuery.validator.addMethod(
  "number_between",
  function(value, element, param) {
    let val = value;
    val = val.replace(",", ".");
    const isNumber =
      !isNaN(parseFloat(val)) &&
      isFinite(val) &&
      parseFloat(val) >= parseFloat(param[0]) &&
      parseFloat(val) <= parseFloat(param[1]);
    return this.optional(element) || isNumber;
  },
  "Proszę wpisać wartość pomiędzy {0} i {1}."
);
