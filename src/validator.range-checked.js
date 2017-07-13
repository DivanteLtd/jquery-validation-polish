/* eslint-disable func-names */

/* Range checked validation */
/* Need attr data-js-validation-min-checked
   and data-js-validation-max-checked */
jQuery.validator.addClassRules("js-validation-range-checked", {
  range_checked: true,
});

/* Range checked validator */
let rangeChecked;
function rangeCheckedMsg() {
  if (parseInt(rangeChecked[1], 10) === 1) {
    return `Proszę zaznaczyć od ${rangeChecked[0]} do ${rangeChecked[1]} pola.`;
  }
  return `Proszę zaznaczyć od ${rangeChecked[0]} do ${rangeChecked[1]} pól.`;
}

jQuery.validator.addMethod(
  "range_checked",
  function(value, element) {
    let min = 0;
    let max = 0;
    const el = jQuery(element);
    const form = jQuery(element).closest("form");
    let name;
    let count = 0;

    const attr = el.attr("data-js-validation-min-checked");
    const attr2 = el.attr("data-js-validation-max-checked");
    if (
      typeof attr !== typeof undefined &&
      attr !== false &&
      typeof attr2 !== typeof undefined &&
      attr2 !== false
    ) {
      min = attr;
      max = attr2;
      rangeChecked = [];
      rangeChecked[0] = min;
      rangeChecked[1] = max;
      name = el.attr("name");

      count = jQuery(form).find(`input[name="${name}"]:checkbox:checked`)
        .length;
      if (count >= min && count <= max) {
        return this.optional(element) || true;
      }
      return this.optional(element) || false;
    }
    return this.optional(element) || true;
  },
  rangeCheckedMsg
);
