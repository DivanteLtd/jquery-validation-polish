/* eslint-disable func-names */

/* Min checked validator */
/* Proper response for max <= 21 */
let minChecked;
function minCheckedMsg() {
  minChecked = parseInt(minChecked, 10);
  if (minChecked === 1) {
    return `Proszę zaznaczyć przynajmniej ${minChecked} pole.`;
  } else if (minChecked > 1 && minChecked < 5) {
    return `Proszę zaznaczyć przynajmniej ${minChecked} pola.`;
  }
  return `Proszę zaznaczyć przynajmniej ${minChecked} pól.`;
}

jQuery.validator.addMethod(
  "min_checked",
  function(value, element) {
    let min = 0;
    const el = jQuery(element);
    const form = jQuery(element).closest("form");
    let name;
    let count = 0;

    const attr = el.attr("data-js-validation-min-checked");
    if (typeof attr !== typeof undefined && attr !== false) {
      min = attr;
      minChecked = min;
      name = el.attr("name");

      count = jQuery(form).find(`input[name="${name}"]:checkbox:checked`)
        .length;
      if (count >= min) {
        return this.optional(element) || true;
      }
      return this.optional(element) || false;
    }
    return this.optional(element) || true;
  },
  minCheckedMsg
);

/* Min checked validation */
/* Need attr data-js-validation-min-checked */
jQuery.validator.addClassRules("js-validation-min-checked", {
  min_checked: true,
});
