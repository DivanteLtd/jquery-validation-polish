/* eslint-disable func-names */

/* Validator NIP */
jQuery.validator.addMethod(
  "nip",
  function(value, element) {
    let sum;
    let val = value;

    val = val.replace(/-/g, "");
    if (val.length !== 10) {
      return this.optional(element) || false;
    }
    for (let i = 0; i < 10; i += 1) {
      if (isNaN(val[i])) {
        return this.optional(element) || false;
      }
    }

    sum =
      6 * val[0] +
      5 * val[1] +
      7 * val[2] +
      2 * val[3] +
      3 * val[4] +
      4 * val[5] +
      5 * val[6] +
      6 * val[7] +
      7 * val[8];

    sum %= 11;
    return this.optional(element) || parseInt(val[9], 10) === sum;
  },
  "Proszę wpisać poprawny numer NIP"
);

/* NIP validator */
jQuery.validator.addClassRules("js-validation-nip", {
  nip: true,
});
