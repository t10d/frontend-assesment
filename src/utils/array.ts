const suit = ["H", "D", "C", "S"];
const value = ["2", "A", "K", "Q", "J", "1", "9", "8", "7", "6", "5", "4", "3"];

export const sortArray = (
  rotation: string,
  OldDeck: Array<String>,
  testing?: Boolean
): Array<String> => {
  const newDeck = OldDeck.slice();

  const suitEnd = suit.slice(0, suit.indexOf(rotation[1]));
  const suitStart = suit.slice(suit.indexOf(rotation[1]), suit.length);
  const newSuit = [...suitStart, ...suitEnd];

  const valueEnd = value.slice(0, value.indexOf(rotation[0]));
  const valueStart = value.slice(value.indexOf(rotation[0]), value.length);
  const newValue = [...valueStart, ...valueEnd];

  const sortValue = newDeck.sort((a, b) => {
    return newValue.indexOf(a[0]) < newValue.indexOf(b[0]) ? 1 : -1;
  });

  if (testing) {
    return sortValue.sort((a, b) => {
      return newSuit.indexOf(a[1]) > newSuit.indexOf(b[1]) ? 1 : -1;
    });
  }

  return sortValue.reverse().sort((a, b) => {
    return newSuit.indexOf(a[1]) > newSuit.indexOf(b[1]) ? 1 : -1;
  });
};
