import React, { useState, useEffect, useCallback } from "react";
import ResultComponent from "../components/Result";
import Card from "../models/Card";

const suits = ["H", "D", "C", "S"];
const values = [
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

const mockedDeck: Card[] = [
    { suit: "D", value: "7" },
    { suit: "S", value: "A" },
    { suit: "H", value: "Q" },
    { suit: "S", value: "9" },
    { suit: "S", value: "9" },
    { suit: "D", value: "6" },
    { suit: "D", value: "6" },
    { suit: "D", value: "6" },
];

const mockedRotationCard: Card = { suit: "H", value: "2" };

const Result: React.FC = () => {
    const [sortedDeck, setSortedDeck] = useState<Card[]>([]);

    const handleSortSuits = () => {
        const indexSuit = suits.indexOf(mockedRotationCard.suit);

        const sortedSuits = suits.slice(indexSuit, suits.length);
        suits
            .slice(0, suits.length - sortedSuits.length)
            .map((suit) => sortedSuits.push(suit));

        return sortedSuits;
    };

    const handleSortValues = () => {
        const indexValue = values.indexOf(mockedRotationCard.value);

        const sortedValues = values.slice(indexValue, values.length);
        values
            .slice(0, values.length - sortedValues.length)
            .map((value) => sortedValues.push(value));

        return sortedValues;
    };

    const bubbleSort = useCallback(() => {
        const sortedSuits = handleSortSuits();
        const sortedValues = handleSortValues();
        let len = mockedDeck.length;
        let swapped;

        do {
            swapped = false;
            for (let i = 0; i < len; i++) {
                if (mockedDeck[i].suit !== mockedDeck[i + 1]?.suit) {
                    const indexCard = sortedSuits.indexOf(mockedDeck[i].suit);
                    const indexSortedCard = sortedSuits.indexOf(
                        mockedDeck[i + 1]?.suit
                    );

                    if (indexCard < indexSortedCard) {
                        let tmp = mockedDeck[i];
                        mockedDeck[i] = mockedDeck[i + 1];
                        mockedDeck[i + 1] = tmp;
                        swapped = true;
                    }
                } else {
                    const indexCard = sortedValues.indexOf(mockedDeck[i].value);
                    const indexSortedCard = sortedValues.indexOf(
                        mockedDeck[i + 1]?.value
                    );

                    if (indexCard < indexSortedCard) {
                        let tmp = mockedDeck[i];
                        mockedDeck[i] = mockedDeck[i + 1];
                        mockedDeck[i + 1] = tmp;
                        swapped = true;
                    }
                }
            }
        } while (swapped);

        return mockedDeck.reverse();
    }, []);

    useEffect(() => {
        function handleSortDeck() {
            const bubbleSortedDeck: Card[] = bubbleSort();

            console.log(bubbleSortedDeck);
            setSortedDeck([...bubbleSortedDeck]);
        }

        handleSortDeck();
    }, [bubbleSort]);

    return <ResultComponent {...{ sortedDeck }} />;
};

export default Result;
