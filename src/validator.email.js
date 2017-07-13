/* eslint-disable func-names */

/* Validator for email */
jQuery.validator.methods.email = function(value, element) {
  /* eslint-disable max-len */
  const re = /^[-a-zA-Z0-9_+]+(\.[-a-zA-Z0-9_+]+)*@([a-zA-Z0-9_][-a-z0-9_]*(\.[-a-zA-Z0-9_]+)*\.([a-z]{2,63})|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
  /* eslint-enable max-len */
  return this.optional(element) || re.test(value);
};
jQuery.validator.messages.email = "Wprowadź poprawny adres email.";

/* Email validator */
jQuery.validator.addClassRules("js-validation-email", {
  email: true,
  maxlength: 320,
});
