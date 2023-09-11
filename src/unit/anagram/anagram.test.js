import { expect } from "chai";
import { isAnagram } from "./anagram.js";

describe("isAnagram - basic functionality", () => {
  it("returns true for two words with similar all unique chars", () => {
    expect(isAnagram("below", "elbow")).to.equal(true);
  });

  it("returns false for two words with different chars", () => {
    expect(isAnagram("knee", "kneel")).to.equal(false);
  });

  it("returns true for two words with similar chars but spaces in them", () => {
    expect(isAnagram("my dog", "dog m y")).to.equal(true);
  });

  it("returns true for two words with similar chars but different case", () => {
    expect(isAnagram("AMAZON", "maonaz")).to.equal(true);
  });

  it("returns false for two words with similar chars but different length", () => {
    expect(isAnagram("I love cats", "I love cat")).to.equal(false);
  });

  it("returns false for two words one of which is absent", () => {
    expect(isAnagram("street", "")).to.equal(false);
  });

  it("returns true for two words two of which are absent", () => {
    expect(isAnagram("", "")).to.equal(true);
  });
});
