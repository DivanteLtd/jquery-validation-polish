/* eslint-disable func-names */

/* Validator required from group */
function requireFromGroupMsg(value) {
  const min = parseInt(value[0], 10);
  if (min === 1) {
    return `Proszę wypełnić przynajmniej ${min} pole z grupy.`;
  } else if (min > 1 && min < 5) {
    return `Proszę wypełnić przynajmniej ${min} pola z grupy.`;
  }
  return `Proszę wypełnić przynajmniej ${min} pól z grupy.`;
}

jQuery.validator.addMethod(
  "require_from_group",
  function(value, element, options) {
    const $fields = jQuery(options[1], element.form);
    const $fieldsFirst = $fields.eq(0);
    const validator = $fieldsFirst.data("valid_req_grp")
      ? $fieldsFirst.data("valid_req_grp")
      : jQuery.extend({}, this);
    const isValid =
      $fields.filter(function() {
        return validator.elementValue(this);
      }).length >= options[0];

    $fieldsFirst.data("valid_req_grp", validator);

    if (!jQuery(element).data("being_validated")) {
      $fields.data("being_validated", true);
      $fields.each(function() {
        validator.element(this);
      });
      $fields.data("being_validated", false);
    }
    return isValid;
  },
  requireFromGroupMsg
);
