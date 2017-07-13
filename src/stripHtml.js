export default function stripHtml(value) {
  // remove html tags and space chars
  return (
    value
      .replace(/<.[^<>]*?>/g, " ")
      .replace(/&nbsp;|&#160;/gi, " ")
      // remove punctuation
      .replace(/[.(),;:!?%#$'"_+=/\-“”’]*/g, "")
  );
}
