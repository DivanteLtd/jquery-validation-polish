/* eslint-disable func-names */

import { getDate } from "./date";

/* Validator max date */
function msgMaxDate(max) {
  return `Proszę wprowadzić datę przed ${max}`;
}

/* Max date must be in format rrrr-mm-dd */
jQuery.validator.addMethod(
  "date_max",
  function(value, element, params) {
    let max;
    let d;
    try {
      d = getDate(value);
      max = getDate(params);
    } catch (e) {
      return this.optional(element) || false;
    }
    return this.optional(element) || d.compareTo(max) === -1;
  },
  msgMaxDate
);
