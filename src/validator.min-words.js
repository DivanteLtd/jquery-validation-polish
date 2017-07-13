/* eslint-disable func-names */

import stripHtml from "./stripHtml";

/* Validator for min words */
export default function msgMinWords(minVal) {
  const min = parseInt(minVal, 10);
  if (min === 1) {
    return `Wprowadź przynajmniej ${min} wyraz.`;
  } else if (
    (min % 10 === 2 && min % 100 !== 12) ||
    (min % 10 === 3 && min % 100 !== 13) ||
    (min % 10 === 4 && min % 100 !== 14)
  ) {
    return `Wprowadź przynajmniej ${min} wyrazy.`;
  }
  return `Wprowadź przynajmniej ${min} wyrazów.`;
}

jQuery.validator.addMethod(
  "min_words",
  function(value, element, params) {
    return (
      this.optional(element) ||
      stripHtml(value).match(/\b\w+\b/g).length >= params
    );
  },
  msgMinWords
);
