/* eslint-disable func-names */

/* Validator alpha with pl and de letters */
jQuery.validator.addMethod(
  "alpha_pl_de",
  function(value, element) {
    const re = /^[a-zA-ZąĄęĘóśŚÓłŁżŻźŹćĆńŃÄäÖöÜüß]+$/;
    return this.optional(element) || re.test(value);
  },
  "Dozwolone są tylko litery."
);

/* Alpha with polish and german letters validator */
jQuery.validator.addClassRules("js-validation-alpha-pl-de", {
  alpha_pl_de: true,
});
