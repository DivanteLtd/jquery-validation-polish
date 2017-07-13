/* eslint-disable func-names */

/* Validator street */
jQuery.validator.addMethod(
  "street",
  function(value, element) {
    const reg = /^[a-zA-Z0-9ąĄęĘóśŚÓłŁżŻźŹćĆńŃÄäÖöÜüß.\-\s'"]{3,}$/;
    return this.optional(element) || reg.test(value);
  },
  "Wprowadź poprawnie nazwę ulicy."
);

/* Street validator */
jQuery.validator.addClassRules("js-validation-street", {
  street: true,
});
