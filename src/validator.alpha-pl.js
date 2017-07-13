/* eslint-disable func-names */

/* Validator alpha with pl letters */
jQuery.validator.addMethod(
  "alpha_pl",
  function(value, element) {
    const re = /^[a-zA-ZąĄęĘóśŚÓłŁżŻźŹćĆńŃ]+$/;
    return this.optional(element) || re.test(value);
  },
  "Dozwolone są tylko litery od a do z."
);

/* Alpha with polish letters validator */
jQuery.validator.addClassRules("js-validation-alpha-pl", {
  alpha_pl: true,
});
