/* eslint-disable func-names */

/* Validator house number */
jQuery.validator.addMethod(
  "house_number",
  function(value, element) {
    const reg = /^[0-9]{1}[a-zA-Z0-9ąĄęĘóśŚÓłŁżŻźŹćĆńŃ\-\s/\\]*$/;
    return this.optional(element) || reg.test(value);
  },
  "Wprowadź poprawnie numer mieszkania."
);

/* House number validator */
jQuery.validator.addClassRules("js-validation-house-number", {
  house_number: true,
});
