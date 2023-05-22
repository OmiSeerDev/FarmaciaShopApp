const { pick, pickBy } = require("lodash");

module.exports = (originalObj, desiredFields, filterNull) => {
  const filteredObject = pick(originalObj, desiredFields);

  if (filterNull) {
    return pickBy(filteredObject, Boolean);
  }
  return filteredObject;
};
