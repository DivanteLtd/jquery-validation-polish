/* Min length message */
export default function msgMinChars(minVal) {
  const min = parseInt(minVal, 10);
  if (min === 1) {
    return `Wprowadź przynajmniej ${min} znak.`;
  } else if (
    (min % 10 === 2 && min % 100 !== 12) ||
    (min % 10 === 3 && min % 100 !== 13) ||
    (min % 10 === 4 && min % 100 !== 14)
  ) {
    return `Wprowadź przynajmniej ${min} znaki.`;
  }
  return `Wprowadź przynajmniej ${min} znaków.`;
}

jQuery.validator.messages.minlength = msgMinChars;
