export const isFunction = (functionToCheck) =>
  functionToCheck && {}.toString.call(functionToCheck) === "[object Function]";

export const notEmptyArray = (arrayToCheck) =>
  Array.isArray(arrayToCheck) && arrayToCheck.length;

export const isEmptyObject = (objectToCheck) =>
  Object.keys(objectToCheck).length === 0 &&
  objectToCheck.constructor === Object;
