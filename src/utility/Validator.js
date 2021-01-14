export const isFunction = (functionToCheck) =>
  functionToCheck && {}.toString.call(functionToCheck) === "[object Function]";

export const notEmptyArray = (arrayToCheck) =>
  Array.isArray(arrayToCheck) && arrayToCheck.length;
