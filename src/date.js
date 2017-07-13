/* Validator date rrrr-mm-dd */
/* All date format below depend on this data format.
   Delimiter in date is not important */
/* TODO: Adjust date function to any date format */
export function getDate(dateToParse) {
  let a = false;
  const re = /^[0-9]{4}(\\|-|_|\.|\/)[0-9]{2}(\\|-|_|\.|\/)[0-9]{2}$/;
  if (!re.test(dateToParse)) {
    throw new Error();
  }
  try {
    if (
      isNaN(parseInt(dateToParse.substring(8, 10), 10)) ||
      isNaN(parseInt(dateToParse.substring(5, 7), 10)) ||
      isNaN(parseInt(dateToParse.substring(0, 4), 10))
    ) {
      throw new Error();
    }
    a = Date.today().set({
      day: parseInt(dateToParse.substring(8, 10), 10),
      month: parseInt(dateToParse.substring(5, 7), 10) - 1,
      year: parseInt(dateToParse.substring(0, 4), 10),
    });
  } catch (e) {
    throw e;
  }
  return a;
}

export function getYear(yearToParse) {
  return parseInt(yearToParse.substring(0, 4), 10);
}
