/* eslint-disable func-names */

import { getDate } from "./date";

/* Validation date not future */
jQuery.validator.addMethod(
  "date_not_future",
  function(value, element) {
    let d;
    try {
      d = getDate(value);
    } catch (e) {
      return this.optional(element) || false;
    }
    const today = Date.today();
    return this.optional(element) || d.compareTo(today) !== 1;
  },
  "Data nie może być z przyszłości."
);

/* Date validator not future */
jQuery.validator.addClassRules("js-validation-date-not-future", {
  date: true,
  date_not_future: true,
});
