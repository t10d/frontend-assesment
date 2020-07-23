import Card from "../models/Card";

export const cardCode = (card: Card) => {
    return `${card.value}${card.suit}`;
};

const compareCards = (cardA: Card, cardB: Card) => {
    return (cardA.suit === cardB.suit && cardA.value === cardB.value)
}

export const includesCards = (cardsGroup: Card[][], cards: Card[], couple: boolean) => {
    let isIncluded = false;

    if (couple) {
        cardsGroup.forEach((group) => {
            if (compareCards(group[0], cards[0]) && compareCards(group[1], cards[1])) {
                isIncluded = true;
            }
        });

        return isIncluded;
    } else {
        cardsGroup.forEach((group) => {
            if (compareCards(group[0], cards[0]) && compareCards(group[1], cards[1]) && compareCards(group[2], cards[2]) ) {
                isIncluded = true;
            }
        });

        return isIncluded;
    }
};
