/* eslint-disable func-names */

import stripHtml from "./stripHtml";

/* Validator for number of words between min and max */
export default function msgBetweenWords(value) {
  if (parseInt(value[1], 10) === 1) {
    return `Wprowadź od ${value[0]} do ${value[1]} wyrazu.`;
  }
  return `Wprowadź od ${value[0]} do ${value[1]} wyrazów.`;
}

jQuery.validator.addMethod(
  "range_words",
  function(value, element, params) {
    const valueStripped = stripHtml(value);
    const regex = /\b\w+\b/g;
    return (
      this.optional(element) ||
      (valueStripped.match(regex).length >= params[0] &&
        valueStripped.match(regex).length <= params[1])
    );
  },
  msgBetweenWords
);
