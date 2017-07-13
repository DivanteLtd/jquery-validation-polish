/* eslint-disable func-names */

/* Validator lastname */
jQuery.validator.addMethod(
  "lastname",
  function(value, element) {
    /* eslint-disable max-len */
    const reg = /^[a-zA-ZąĄęĘóśŚÓłŁżŻźŹćĆńŃÄäÖöÜüß]{2,}\s?(-?\s?[a-zA-ZąĄęĘóśŚÓłŁżŻźŹćĆńŃÄäÖöÜüß]{2,})?$/;
    /* eslint-enable max-len */
    return this.optional(element) || reg.test(value);
  },
  "Wprowadź poprawnie nazwisko"
);

/* Lastname validator */
jQuery.validator.addClassRules("js-validation-lastname", {
  maxlength: 40,
  lastname: true,
});
