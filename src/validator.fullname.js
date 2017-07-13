/* eslint-disable func-names */

/* Validator name */
jQuery.validator.addMethod(
  "fullname",
  function(value, element) {
    /* eslint-disable max-len */
    const reg = /^[a-zA-ZąĄęĘóśŚÓłŁżŻźŹćĆńŃÄäÖöÜüß]{2,}\s[a-zA-ZąĄęĘóśŚÓłŁżŻźŹćĆńŃÄäÖöÜüß]{2,}\s?(-?\s?[a-zA-ZąĄęĘóśŚÓłŁżŻźŹćĆńŃÄäÖöÜüß]{2,})?$/;
    /* eslint-enable max-len */
    return this.optional(element) || reg.test(value);
  },
  "Wprowadź poprawnie imię i nazwisko"
);

/* Name validator */
jQuery.validator.addClassRules("js-validation-fullname", {
  fullname: true,
});
