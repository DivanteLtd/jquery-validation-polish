/* eslint-disable func-names */

/* Validator REGON */
jQuery.validator.addMethod(
  "regon",
  function(value, element) {
    let weights = [];
    let sum = 0;

    if (isNaN(value) === true) {
      return this.optional(element) || false;
    }
    const len = value.length;
    if (len === 9) {
      weights = [8, 9, 2, 3, 4, 5, 6, 7];
    } else if (len === 14) {
      weights = [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8];
    } else {
      return this.optional(element) || false;
    }
    sum = 0;
    for (let i = 0; i < weights.length; i += 1) {
      sum += weights[i] * parseInt(value[i], 10);
    }
    const inte = sum % 11;
    const checksum = inte === 10 ? 0 : inte;
    if (checksum === parseInt(value[weights.length], 10)) {
      return this.optional(element) || true;
    }
    return this.optional(element) || false;
  },
  "Podaj poprawny REGON."
);

/* Regon validator */
jQuery.validator.addClassRules("js-validation-regon", {
  regon: true,
});
