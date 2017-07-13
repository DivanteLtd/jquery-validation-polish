/* eslint-disable func-names */

import { getDate } from "./date";

/* Validator min date */
function msgMinDate(min) {
  return `Proszę wprowadzić datę po ${min}`;
}

/* Min date must be in format rrrr-mm-dd */
jQuery.validator.addMethod(
  "date_min",
  function(value, element, params) {
    let d;
    let min;
    try {
      d = getDate(value);
      min = getDate(params);
    } catch (e) {
      return this.optional(element) || false;
    }
    return this.optional(element) || d.compareTo(min) === 1;
  },
  msgMinDate
);
