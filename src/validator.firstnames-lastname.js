/* eslint-disable func-names */

/* Validator firstnames + lastname */
jQuery.validator.addMethod(
  "firstnames_lastname",
  function(value, element) {
    /* eslint-disable max-len */
    const reg = /^[a-zA-ZąĄęĘóśŚÓłŁżŻźŹćĆńŃÄäÖöÜüß]{2,}\s?((\/|,)?\s?[a-zA-ZąĄęĘóśŚÓłŁżŻźŹćĆńŃÄäÖöÜüß]{2,})?\s[a-zA-ZąĄęĘóśŚÓłŁżŻźŹćĆńŃÄäÖöÜüß]{2,}\s?(-?\s?[a-zA-ZąĄęĘóśŚÓłŁżŻźŹćĆńŃÄäÖöÜüß]{2,})?$/;
    /* eslint-enable max-len */
    return this.optional(element) || reg.test(value);
  },
  "Wprowadź poprawnie imię/imiona i nazwisko."
);

/* First names + lastname validator */
jQuery.validator.addClassRules("js-validation-firstnames-lastname", {
  firstnames_lastname: true,
});
