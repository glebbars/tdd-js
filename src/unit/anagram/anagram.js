import { getLetterCount } from "../letter-count/letter-count.js";

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  )
    return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!obj2.hasOwnProperty(key) || !deepEqual(obj1[key], obj2[key]))
      return false;
  }

  return true;
}

function cleanStr(str) {
  // remove special characters
  const noSpecialCharsStr = str.replace(/[^a-zA-Z0-9 ]/g, "");

  // clean all spaces
  const oneWordStr = noSpecialCharsStr.split(" ").join("");

  // to lower case
  return oneWordStr.toLowerCase();
}

export const isAnagram = (firstStr, secondStr) => {
  const firstStrLetterCount = getLetterCount(cleanStr(firstStr));
  const secondStrLetterCount = getLetterCount(cleanStr(secondStr));

  // can be substituted with loadash func
  return deepEqual(firstStrLetterCount, secondStrLetterCount);
};
