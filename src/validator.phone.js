/* eslint-disable func-names */

/* Validator phone */
jQuery.validator.addMethod(
  "phone",
  function(value, element) {
    const reg = /^[0-9]{9,11}$/;
    return this.optional(element) || reg.test(value);
  },
  "Podaj poprawny numer telefonu."
);

/* Phone validator */
jQuery.validator.addClassRules("js-validation-phone", {
  phone: true,
});
