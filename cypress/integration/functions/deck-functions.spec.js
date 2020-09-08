import {
  sortArray,
  getValuesFullHouse,
  getAllCombinations,
  getFullHouse,
} from "../../../src/utils/array";

describe("Organization functions should work ( without influenced by the rotation card )", () => {
  it("Cards of the same suit and different values", () => {
    const test = sortArray("2H", ["5H", "10H", "AH", "4H", "3H", "6H"], true);
    assert.equal(test.toString(), "AH,10H,6H,5H,4H,3H");
  });
  it("Cards of the same value and different suits", () => {
    const test = sortArray("2H", ["3H", "3C", "3D", "3S"], true);
    assert.equal(test.toString(), "3H,3D,3C,3S");
  });
  it("Cards of different value and suit", () => {
    const test = sortArray(
      "2H",
      ["4H", "AH", "JC", "3S", "5C", "2S", "QS", "3H", "7C"],
      true
    );
    assert.equal(test.toString(), "AH,4H,3H,JC,7C,5C,2S,QS,3S");
  });
});

describe("Organization functions should work ( influenced by the rotation card )", () => {
  it("Cards of the same suit and different values", () => {
    const test = sortArray("QC", ["5H", "AH", "4H", "3H", "6H"], true);
    assert.equal(test.toString(), "6H,5H,4H,3H,AH");
  });
  it("Cards of the same value and different suits", () => {
    const test = sortArray("8S", ["3H", "3C", "3D", "3S"], true);
    assert.equal(test.toString(), "3S,3H,3D,3C");
  });
  it("Cards of different value and suit", () => {
    const test = sortArray(
      "8C",
      ["4H", "AH", "JC", "3S", "5C", "2D", "2S", "QS", "3H", "7C"],
      true
    );
    assert.equal(test.toString(), "7C,5C,JC,3S,2S,QS,4H,3H,AH,2D");
  });
});

describe("Full House functions should work", () => {
  it("Get the values used in the Full House combinations of the added cards", () => {
    const testValues = getValuesFullHouse(["5D", "5S", "2S", "2D", "QH", "2H"]);
    assert.equal(testValues.toString(), "2S,2D,2H,5D,5S");
  });
  it("Get all possible combinations of a group of values ", () => {
    const testValues = getAllCombinations(["2D", "2H", "2S", "2D"]);
    assert.equal(testValues.length, 24);
  });
  it("Get all valid Full House options", () => {
    const testValues = getFullHouse([
      [
        ["3H", "3D", "3S"],
        ["3S", "3H", "3D"],
        ["3D", "3S", "3H"],
      ],
      [
        ["5S", "5D", "5C"],
        ["5C", "5S", "5D"],
        ["5D", "5C", "5S"],
      ],
      [
        ["2D", "2H"],
        ["2H", "2D"],
      ],
    ]);
    assert.equal(testValues.length, 42);
  });
});
