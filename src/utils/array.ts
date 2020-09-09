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
      return newSuit.indexOf(a[a.length - 1]) > newSuit.indexOf(b[b.length - 1])
        ? 1
        : -1;
    });
  }

  return sortValue.reverse().sort((a, b) => {
    return newSuit.indexOf(a[a.length - 1]) > newSuit.indexOf(b[b.length - 1])
      ? 1
      : -1;
  });
};

export const getValuesFullHouse = (
  deck: Array<String>
): Array<Array<String>> => {
  const cardGroups = value
    .map((e: String) => {
      return deck.filter((elem: String) => elem[0] === e);
    })
    .filter((elem) => elem.length > 1);

  return cardGroups;
};

export const getAllCombinations = (
  combinations: Array<String>
): Array<Array<String>> => {
  let result: Array<Array<String>> = [];

  const permute = (arr: any, values = []) => {
    if (arr.length === 0) {
      result.push(values.splice(0, 3));
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), values.concat(next));
      }
    }
  };

  permute(combinations);

  return result;
};

export const getFullHouse = (
  combinations: Array<Array<Array<String>>>
): Array<String> => {
  let fullHouse: Array<String> = [];

  combinations.map((comb: Array<Array<String>>) => {
    comb.map((firstGroup: Array<String>) => {
      const valuesFiltred = combinations.filter(
        (filter: any) => filter !== comb
      );

      valuesFiltred.map((values: Array<Array<String>>) => {
        values.map((secondGroup: Array<String>) => {
          if (firstGroup.length <= 2) {
            return (
              secondGroup.length === 3 &&
              fullHouse.push([...firstGroup, ...secondGroup].toString())
            );
          }
          fullHouse.push(
            [...firstGroup, ...secondGroup.slice(0, 2)].toString()
          );
          return secondGroup
        });
        return values
      });
      return firstGroup
    });
    return comb
  });

  return fullHouse.filter((e: any, i: number) => fullHouse.indexOf(e) === i);
};
