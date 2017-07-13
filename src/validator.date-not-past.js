/* eslint-disable func-names */

import { getDate } from "./date";

/* Validator date not past */
jQuery.validator.addMethod(
  "date_not_past",
  function(value, element) {
    let d;
    try {
      d = getDate(value);
    } catch (e) {
      return this.optional(element) || false;
    }
    const today = Date.today();
    return this.optional(element) || d.compareTo(today) !== -1;
  },
  "Data nie może być z przeszłości."
);

/* Date validator not past */
jQuery.validator.addClassRules("js-validation-date-not-past", {
  date: true,
  date_not_past: true,
});
