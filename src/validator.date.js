/* eslint-disable func-names */

import { getDate } from "./date";

jQuery.validator.methods.date = function(value, element) {
  let d;
  try {
    d = getDate(value);
  } catch (e) {
    return this.optional(element) || false;
  }
  return this.optional(element) || d !== null;
};
jQuery.validator.messages.date = "Wprowadź poprawną datę";

/* Date validator rrrr-mm-dd */
jQuery.validator.addClassRules("js-validation-date", {
  date: true,
});
