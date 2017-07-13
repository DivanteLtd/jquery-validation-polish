/* eslint-disable func-names */

/* Validator KRS */
jQuery.validator.addMethod(
  "krs",
  function(value, element) {
    const reg = /^[0-9]{10}$/;
    return this.optional(element) || reg.test(value);
  },
  "Podaj poprawny numer KRS."
);

/* KRS validator */
jQuery.validator.addClassRules("js-validation-krs", {
  krs: true,
});
