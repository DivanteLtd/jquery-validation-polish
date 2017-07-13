/* eslint-disable func-names */

/* Validator city */
jQuery.validator.addMethod(
  "city",
  function(value, element) {
    /* eslint-disable max-len */
    const reg = /^[a-zA-ZąĄęĘóśŚÓłŁżŻźŹćĆńŃÄäÖöÜüß]{2,}((\s?-\s?|\s)[a-zA-ZąĄęĘóśŚÓłŁżŻźŹćĆńŃÄäÖöÜüß]{2,}\.?)*$/;
    /* eslint-enable max-len */
    return this.optional(element) || reg.test(value);
  },
  "Wprowadź poprawnie nazwę miasta."
);

/* City validator */
jQuery.validator.addClassRules("js-validation-city", {
  city: true,
});
