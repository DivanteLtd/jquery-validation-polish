/* eslint-disable func-names */

/* Repeat field validator */

jQuery.validator.addMethod(
  "repeat_field",
  function(value, element, param) {
    return this.optional(element) || value === param.val();
  },
  "Pola się nie zgadzają."
);
