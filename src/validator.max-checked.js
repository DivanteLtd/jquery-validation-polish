/* eslint-disable func-names */

/* Max checked validator */
/* Proper response for max <= 21 */
let maxChecked;
function maxCheckedMsg() {
  maxChecked = parseInt(maxChecked, 10);
  if (maxChecked === 1) {
    return `Proszę zaznaczyć maksymalnie ${maxChecked} pole.`;
  } else if (maxChecked > 1 && maxChecked < 5) {
    return `Proszę zaznaczyć maksymalnie ${maxChecked} pola.`;
  }
  return `Proszę zaznaczyć maksymalnie ${maxChecked} pól.`;
}

jQuery.validator.addMethod(
  "max_checked",
  function(value, element) {
    let max = 0;
    const el = jQuery(element);
    const form = jQuery(element).closest("form");
    let name;
    let count = 0;

    const attr = el.attr("data-js-validation-max-checked");
    if (typeof attr !== typeof undefined && attr !== false) {
      max = attr;
      maxChecked = max;
      name = el.attr("name");

      count = jQuery(form).find(`input[name="${name}"]:checkbox:checked`)
        .length;
      if (count <= max) {
        return this.optional(element) || true;
      }
      return this.optional(element) || false;
    }
    return this.optional(element) || true;
  },
  maxCheckedMsg
);

/* Max checked validation */
/* Need attr data-js-validation-max-checked */
jQuery.validator.addClassRules("js-validation-max-checked", {
  max_checked: true,
});
