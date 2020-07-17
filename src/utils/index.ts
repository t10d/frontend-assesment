const numbers = [
  "2",
  "A",
  "K",
  "Q",
  "J",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",

];
const naipes = ["H", "D", "C", "S"];

/**
 * Reorder the list of naipes, it's values, given a naipe as reference.
 * @param {string} naipe A naipe to reset the naipes values 
 * @returns {string[]} A reordered list of naipes
 */
export const getNewNaipesFromNaipe = (naipe: string): string[] => {
  const position = naipes.indexOf(naipe.toUpperCase());

  return [...naipes.slice(position), ...naipes.slice(0, position)];
}


/**
 * Reorder the list of card values, it's values, given a value as reference.
 * @param {string} value A value to reset the naipes values 
 * @returns {string[]} A reordered list of values
 */
export const getNewValueFromValues = (value: string): string[] => {
  const position = numbers.indexOf(value.toUpperCase());

  return [...numbers.slice(position), ...numbers.slice(0, position)];
}


/**
 * Extract card informations. The value and naipe
 * @param {string} card A value to reset the naipes values 
 * @returns {string[]} Value and Naipe of given card
 */
export const getValuesFromCard = (card: string): string[] => {
  return [card.slice(card.length - 1), card.slice(0, card.length - 1)]
}


/**
 * Given an array of cards and a rotation card, return a sorted array
 * @param {string[]} cards 
 * @param {string} rotationCard 
 * @returns {string[]} Sorted array of cards
 */
export const sortCards = (cards: string[], rotationCard: string): string[] => {
  const [rotationNaipe, rotationNumber] = getValuesFromCard(rotationCard);
  
  const newNaipes = getNewNaipesFromNaipe(rotationNaipe);
  const newNumbers = getNewValueFromValues(rotationNumber);

  return cards.sort((a: string, b: string) => {
    const [naipeA, numberA] = getValuesFromCard(a);
    const [naipeB, numberB] = getValuesFromCard(b);

    const naipeAPosition = newNaipes.indexOf(naipeA);
    const naipeBPosition = newNaipes.indexOf(naipeB);

    const numberAPosition = newNumbers.indexOf(numberA);
    const numberBPosition = newNumbers.indexOf(numberB);

    /** Check first if the naipes are reordered.
     * Only reorder the values if not possible to reorder the naipes,
     * in case of similar naipes */
    if (naipeAPosition === naipeBPosition) {
      if (numberAPosition < numberBPosition) {
        return -1
      }

      if (numberAPosition > numberBPosition) {
        return 1
      }

      return 0
    }

    if (naipeAPosition > naipeBPosition) {
      return 1
    }

    if (naipeAPosition < naipeBPosition) {
      return -1
    }

    return 0;
  })
}


/**
 * Sort the given cards, only by values, and not naipes.
 * @param {string[]} cards Cards to be reorder/sorted
 * @returns {string[]} Sorted array of cards
 */
const sortFullHouseCards = (cards: string[]): string[] => {
  return cards.sort((a: string, b: string) => {
    const [, card1Number] = getValuesFromCard(a);
    const [, card2Number] = getValuesFromCard(b);

    if (card1Number < card2Number) {
      return -1;
    }

    if (card1Number > card2Number) {
      return 1;
    }

    return 0
  })
}


/**
 * Check if group of cards are full house combinations
 * @param {string[]} cards List of cards
 * @returns {boolean} Possibility of fullhouse of given array of cards
 */
export const isFullHouseCombinationsPossible = (cards: string[]): boolean => {
  /** 
   * Using maps for it's simplicity of this task.
   * Would take much time and efforts with arrays, also, maps are kinda more performant.
   */
  const cardsMap = numberOfOccurrencesInMap(cards);
 
  if (cardsMap.size === 2) {
    const cardsMapValues = cardsMap.values();
    const card1Value = cardsMapValues.next().value;
    const card2Value = cardsMapValues.next().value;

    return (card1Value % 2 === 0 && card2Value % 3 === 0) || (card1Value %3 === 0 && card2Value %2===0);
  }

  return false;
}


/**
 * Calculate number of occurrences of values from a given card, not affected by it's naipes
 * @param {string[]} cards List of cards to transform
 * @returns {Map<string, number>} Number of occurrences of cards values
 */
const numberOfOccurrencesInMap = (cards: string[]): Map<string, number> => {
  const valuesMap = new Map<string, number>();

 cards.forEach((card) => {
   const [, cardNumber] = getValuesFromCard(card);
   let cardOccurrences = valuesMap.get(cardNumber);

   if (cardOccurrences !== undefined) {
     valuesMap.set(cardNumber, ++cardOccurrences);
   } else {
     valuesMap.set(cardNumber, 1);
   }
 });

 return valuesMap;
}


/**
 * Calculate fullhouse combinations
 * @param {string[]} cards 
 * @returns {string[][]} A list of possible fullhouse combinations
 */
export const findFullHouseCombinations = (cards: string[]) => {
  const fullHouseCombinations: any = [];

  const cardsTotal = cards.length;
  const cardsGroup = 5; // The default fullhouse number of cards
  const iterator = 1;
  const start = 1;
  const array = new Array (cardsTotal);

  const calculateFullHouse = (array: number[], start: number, total: number, iterator: number, cardsGroup: number) => {
      if (iterator > cardsGroup) {
        const combinationCards: string[] = [];
    
        for (let it = 1; it <= cardsGroup; it++) {
          combinationCards.push(cards[array[it] - 1]);
        }
    
        // Check if fullHouseCombination is possible, to format only the relevant possibilities
        if (isFullHouseCombinationsPossible(combinationCards)) {
          fullHouseCombinations.push(sortFullHouseCards(combinationCards));
        }
  
        return;
      }
    
      for (let it = start; it <= total; it++) {
        array[iterator] = it;
        calculateFullHouse(array, it + 1, total, iterator + 1, cardsGroup);
      }
  };

  // Only search for fullhouse possibilities if the're more than 4 cards
  if (cardsTotal >= 5) {
    calculateFullHouse(array, start,cardsTotal, iterator,cardsGroup);
  }

  return fullHouseCombinations;
}


 /**
  * List of validation rules, to be used in cards form.
  */
export const validation = {
  min: 2,
  max: 3,
  validate: (value: string) => {
    if (value) {
      const [naipe, number] = getValuesFromCard(value);

      return (
        numbers.includes(number.toUpperCase()) &&
        naipes.includes(naipe.toUpperCase())
      );
    }
    return;
  },
};
