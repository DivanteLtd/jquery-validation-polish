export default function msgBetweenChars(min, maxVal) {
  const max = parseInt(maxVal, 10);
  if (max === 1) {
    return `Wprowadź od ${min} do ${max} znaku.`;
  }
  return `Wprowadź od ${min} do ${max} znaków.`;
}

jQuery.validator.messages.rangelength = msgBetweenChars;
