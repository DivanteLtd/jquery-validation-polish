/* eslint-disable func-names */

/* Validator alpha */
jQuery.validator.addMethod(
  "alpha",
  function(value, element) {
    const re = /^[a-zA-Z]+$/;
    return this.optional(element) || re.test(value);
  },
  "Dozwolone są tylko litery od a do z bez polskich znaków."
);

/* Alpha validator */
jQuery.validator.addClassRules("js-validation-alpha", {
  alpha: true,
});
