/* eslint-disable func-names */

import { getDate } from "./date";

/* Validator date future */
jQuery.validator.addMethod(
  "date_future",
  function(value, element) {
    let d;
    try {
      d = getDate(value);
    } catch (e) {
      return this.optional(element) || false;
    }
    const today = Date.today();
    return this.optional(element) || d.compareTo(today) === 1;
  },
  "Data musi być z przyszłości."
);

/* Future date validator */
jQuery.validator.addClassRules("js-validation-date-future", {
  date: true,
  date_future: true,
});
