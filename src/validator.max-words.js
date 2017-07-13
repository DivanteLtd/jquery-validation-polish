/* eslint-disable func-names */

import stripHtml from "./stripHtml";

export default function msgMaxWords(val) {
  const max = parseInt(val, 10);
  if (max === 1) {
    return `Wprowadź maksymalnie ${max} wyraz.`;
  } else if (
    (max % 10 === 2 && max % 100 !== 12) ||
    (max % 10 === 3 && max % 100 !== 13) ||
    (max % 10 === 4 && max % 100 !== 14)
  ) {
    return `Wprowadź maksymalnie ${max} wyrazy.`;
  }
  return `Wprowadź maksymalnie ${max} wyrazów.`;
}

jQuery.validator.addMethod(
  "max_words",
  function(value, element, params) {
    return (
      this.optional(element) ||
      stripHtml(value).match(/\b\w+\b/g).length <= params
    );
  },
  msgMaxWords
);
