// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("should encode the input with the given substitution alphabet", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.equal(expected);
  });
  it("should decode the input with the given substitution alphabet", () => {
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters in the input", () => {
    const actual = substitution("Thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces throughout when encoding or decoding", () => {
    const actualEncode = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expectedEncode = "elp xhm xf mbymwwmfj dne";
    expect(actualEncode).to.equal(expectedEncode);
    const actualDecode = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
    const expectedDecode = "you are an excellent spy";
    expect(actualDecode).to.equal(expectedDecode);
  });
  it("should properly encode or decode the input even if the substitution alphabet includes special characters", () => {
    const actualEncode = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expectedEncode = "y&ii$r&";
    expect(actualEncode).to.equal(expectedEncode);
    const actualDecode = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expectedDecode = "message";
    expect(actualDecode).to.equal(expectedDecode);
  });
  it("should return false if the alphabet parameter is not a string of exactly 26 characters", () => {
    const actual = substitution("thinkful", "short");
    expect(actual).to.be.false;
  });
  it("should return false if all of the characters in the alphabet parameter are not unique", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.be.false;
  });
  it("should return false if the substitution alphabet is missing", () => {
    const actual = substitution("thinkful");
    expect(actual).to.be.false;
  });
});
