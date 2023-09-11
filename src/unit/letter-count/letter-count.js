export const getLetterCount = (word) => {
  const lettersArr = word.split("");

  return lettersArr.reduce((prev, cur) => {
    if (!!prev?.[cur]) {
      prev[cur]++;
    } else {
      prev[cur] = 1;
    }

    return prev;
  }, {});
};
