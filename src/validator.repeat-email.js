/* eslint-disable func-names */

/* Repeat email validator */
jQuery.validator.addMethod(
  "repeat_email",
  function(value, element, param) {
    return (
      this.optional(element) ||
      `${value}`.toLocaleLowerCase() === `${param.val()}`.toLocaleLowerCase()
    );
  },
  "Adresy email się nie zgadzają."
);
