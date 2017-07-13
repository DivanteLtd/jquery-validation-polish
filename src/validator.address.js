/* eslint-disable func-names */

/* Validator address */
jQuery.validator.addMethod(
  "address",
  function(value, element) {
    const reg = /^[a-zA-Z0-9ąĄęĘóśŚÓłŁżŻźŹćĆńŃÄäÖöÜüß,\\/.\-\s"]{5,}$/;
    return this.optional(element) || reg.test(value);
  },
  "Wprowadź poprawnie adres."
);

/* Address validator */
jQuery.validator.addClassRules("js-validation-address", {
  address: true,
});
