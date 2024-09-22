export function findEmptyFields(
  obj: any,
  excludedFields = ["features", "amenities"],
) {
  let emptyFields: any[] = [];

  function checkFields(innerObj: any, parentKey = "") {
    Object.keys(innerObj).forEach((key) => {
      const fullKey = parentKey ? `${parentKey}.${key}` : key;
      const value = innerObj[key];

      if (excludedFields.includes(key)) return; // Exclude fields

      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        // Recursively check nested objects
        checkFields(value, fullKey);
      } else if (Array.isArray(value)) {
        if (value.length === 0) {
          emptyFields.push(fullKey);
        } else {
          value.forEach((item, index) => {
            if (typeof item === "object" && item !== null) {
              checkFields(item, `${fullKey}[${index}]`);
            } else if (!item && item !== false && item !== 0) {
              emptyFields.push(`${fullKey}[${index}]`);
            }
          });
        }
      } else if (!value && value !== false && value !== 0) {
        // If value is empty, undefined, null, or empty string, but not false or 0
        emptyFields.push(fullKey);
      }
    });
  }

  checkFields(obj);
  return emptyFields.length ? emptyFields : null;
}
