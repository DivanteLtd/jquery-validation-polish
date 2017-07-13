/* eslint-disable func-names */

/* Validator building number */
jQuery.validator.addMethod(
  "building_number",
  function(value, element) {
    const reg = /^[0-9]{1}[a-zA-Z0-9ąĄęĘóśŚÓłŁżŻźŹćĆńŃ\-\s/\\]*$/;
    return this.optional(element) || reg.test(value);
  },
  "Wprowadź poprawnie numer budynku."
);

/* Building number validator */
jQuery.validator.addClassRules("js-validation-building-number", {
  building_number: true,
});
