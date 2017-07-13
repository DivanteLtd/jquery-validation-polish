/* eslint-disable func-names */
/* Validator pesel */
jQuery.validator.addMethod(
  "pesel",
  function(value, element) {
    const reg = /^[0-9]{11}$/;
    let sum;

    if (reg.test(value) === false) {
      return this.optional(element) || false;
    }
    const dig = `${value}`.split("");
    sum =
      (1 * parseInt(dig[0], 10) +
        3 * parseInt(dig[1], 10) +
        7 * parseInt(dig[2], 10) +
        9 * parseInt(dig[3], 10) +
        1 * parseInt(dig[4], 10) +
        3 * parseInt(dig[5], 10) +
        7 * parseInt(dig[6], 10) +
        9 * parseInt(dig[7], 10) +
        1 * parseInt(dig[8], 10) +
        3 * parseInt(dig[9], 10)) %
      10;

    if (sum === 0) {
      sum = 10;
    }

    const day = parseInt(`${dig[4]}${dig[5]}`, 10);
    if (day < 1 || day > 31) {
      return this.optional(element) || false;
    }

    sum = 10 - sum;

    return this.optional(element) || parseInt(dig[10], 10) === sum;
  },
  "Proszę wpisać poprawny numer PESEL"
);

/* Pesel validator */
jQuery.validator.addClassRules("js-validation-pesel", {
  pesel: true,
});
