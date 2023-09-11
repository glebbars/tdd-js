import { getLetterCount } from "./letter-count.js";
import { expect } from "chai";

describe("getLetterCount - basic functionality", () => {
  it("returns an empty object when passed an empty string", () => {
    const expected = {};
    const actual = getLetterCount("");

    expect(actual).to.deep.equal(expected);
  });

  it("returns the correct letter count with word with all unique letters", () => {
    const expected = { d: 1, o: 1, g: 1 };
    const actual = getLetterCount("dog");

    expect(actual).to.deep.equal(expected);
  });

  it("returns the correct letter count with word with unique and simillar letters", () => {
    const expected = { g: 3, o: 1, l: 1, e: 1 };
    const actual = getLetterCount("goggle");

    expect(actual).to.deep.equal(expected);
  });
});
