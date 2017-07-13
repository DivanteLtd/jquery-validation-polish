/* eslint-disable func-names */

import { getDate } from "./date";

/* Validator date past */
jQuery.validator.addMethod(
  "date_past",
  function(value, element) {
    let d;
    try {
      d = getDate(value);
    } catch (e) {
      return this.optional(element) || false;
    }
    const today = Date.today();
    return this.optional(element) || d.compareTo(today) === -1;
  },
  "Data musi być z przeszłości."
);

/* Past date validator */
jQuery.validator.addClassRules("js-validation-date-past", {
  date: true,
  date_past: true,
});
