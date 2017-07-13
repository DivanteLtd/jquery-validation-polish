/* eslint-disable func-names */

/* Validator firstnames */
jQuery.validator.addMethod(
  "firstnames",
  function(value, element) {
    /* eslint-disable max-len */
    const reg = /^[a-zA-ZąĄęĘóśŚÓłŁżŻźŹćĆńŃÄäÖöÜüß]{2,}\s?((\/|,)?\s?[a-zA-ZąĄęĘóśŚÓłŁżŻźŹćĆńŃÄäÖöÜüß]{2,})?$/;
    /* eslint-enable max-len */
    return this.optional(element) || reg.test(value);
  },
  "Wprowadź poprawnie imię/imiona"
);

/* Firstnames validator */
jQuery.validator.addClassRules("js-validation-firstnames", {
  firstnames: true,
});
