/* Max length message */
export default function msgMaxChars(maxVal) {
  const max = parseInt(maxVal, 10);
  if (max === 1) {
    return `Wprowadź maksymalnie ${max} znak.`;
  } else if (
    (max % 10 === 2 && max % 100 !== 12) ||
    (max % 10 === 3 && max % 100 !== 13) ||
    (max % 10 === 4 && max % 100 !== 14)
  ) {
    return `Wprowadź maksymalnie ${max} znaki.`;
  }
  return `Wprowadź maksymalnie ${max} znaków.`;
}

jQuery.validator.messages.maxlength = msgMaxChars;
