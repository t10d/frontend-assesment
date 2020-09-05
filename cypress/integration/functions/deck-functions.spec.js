import { shortArray } from "../../../src/utils/array";

describe("Organization functions should work ( without influenced by the rotation card )", () => {
  it("Cards of the same suit and different values", () => {
    const test = shortArray("2H", ["5H", "AH", "4H", "3H", "6H"]);
    assert.equal(test.toString(), "AH,6H,5H,4H,3H");
  });
  it("Cards of the same value and different suits", () => {
    const test = shortArray("2H", ["3H", "3C", "3D", "3S"]);
    assert.equal(test.toString(), "3H,3D,3C,3S");
  });
  it("Cards of different value and suit", () => {
    const test = shortArray("2H", [
      "4H",
      "AH",
      "JC",
      "3S",
      "5C",
      "2S",
      "QS",
      "3H",
      "7C",
    ]);
    assert.equal(test.toString(), "AH,4H,3H,JC,7C,5C,2S,QS,3S");
  });
});

describe("Organization functions should work ( influenced by the rotation card )", () => {
  it("Cards of the same suit and different values", () => {
    const test = shortArray("QC", ["5H", "AH", "4H", "3H", "6H"]);
    assert.equal(test.toString(), "6H,5H,4H,3H,AH");
  });
  it("Cards of the same value and different suits", () => {
    const test = shortArray("8S", ["3H", "3C", "3D", "3S"]);
    assert.equal(test.toString(), "3S,3H,3D,3C");
  });
  it("Cards of different value and suit", () => {
    const test = shortArray("8C", [
      "4H",
      "AH",
      "JC",
      "3S",
      "5C",
      "2D",
      "2S",
      "QS",
      "3H",
      "7C",
    ]);
    assert.equal(test.toString(), "7C,5C,JC,3S,2S,QS,4H,3H,AH,2D");
  });
});
