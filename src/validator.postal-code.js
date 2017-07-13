/* eslint-disable func-names */

/* Validator postal-code */
jQuery.validator.addMethod(
  "postal_code",
  function(value, element) {
    const reg = /^[0-9]{2}-[0-9]{3}$/;
    return this.optional(element) || reg.test(value);
  },
  "Wprowadź poprawnie kod pocztowy."
);

/* Postal code validator */
jQuery.validator.addClassRules("js-validation-postal-code", {
  postal_code: true,
});
