import React, { useState, useEffect, useCallback } from "react";
import ResultComponent from "../components/Result";
import Card from "../models/Card";

import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../models/Redux";
import { SUITS, VALUES } from "../constants";
import { loadDeckRequest } from "../store/modules/deck/actions";

const Result: React.FC = () => {
    const [sortedDeck, setSortedDeck] = useState<Card[]>([]);
    const [sortedSuits, setSortedSuits] = useState<typeof SUITS>([]);
    const [sortedValues, setSortedValues] = useState<typeof VALUES>([]);

    const deckId = useSelector<{ deck: IRootState }, string>(
        (state) => state.deck.deckId
    );
    const deck = useSelector<{ deck: IRootState }, Card[]>(
        (state) => state.deck.deck
    );
    const rotationCard = useSelector<{ deck: IRootState }, Card>(
        (state) => state.deck.rotationCard
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadDeckRequest(deckId));
    }, [deckId, dispatch]);

    useEffect(() => {
        if (rotationCard) {
            const indexSuit = SUITS.indexOf(rotationCard.suit);

            const sortedSuits = SUITS.slice(indexSuit, SUITS.length);
            SUITS.slice(0, SUITS.length - sortedSuits.length).map((suit) =>
                sortedSuits.push(suit)
            );

            setSortedSuits(sortedSuits);
        }
    }, [rotationCard]);

    useEffect(() => {
        if (rotationCard) {
            const indexValue = VALUES.indexOf(rotationCard.value);

            const sortedValues = VALUES.slice(indexValue, VALUES.length);
            VALUES.slice(0, VALUES.length - sortedValues.length).map((value) =>
                sortedValues.push(value)
            );

            setSortedValues(sortedValues);
        }
    }, [rotationCard]);

    const bubbleSort = useCallback(() => {
        let len = deck.length;
        let swapped;

        do {
            swapped = false;
            for (let i = 0; i < len; i++) {
                if (deck[i].suit !== deck[i + 1]?.suit) {
                    const indexCard = sortedSuits.indexOf(deck[i].suit);
                    const indexSortedCard = sortedSuits.indexOf(
                        deck[i + 1]?.suit
                    );

                    if (indexCard < indexSortedCard) {
                        let tmp = deck[i];
                        deck[i] = deck[i + 1];
                        deck[i + 1] = tmp;
                        swapped = true;
                    }
                } else {
                    const indexCard = sortedValues.indexOf(deck[i].value);
                    const indexSortedCard = sortedValues.indexOf(
                        deck[i + 1]?.value
                    );

                    if (indexCard < indexSortedCard) {
                        let tmp = deck[i];
                        deck[i] = deck[i + 1];
                        deck[i + 1] = tmp;
                        swapped = true;
                    }
                }
            }
        } while (swapped);

        return deck.reverse();
    }, [deck, sortedSuits, sortedValues]);

    useEffect(() => {
        function handleSortDeck() {
            const bubbleSortedDeck: Card[] = bubbleSort();

            // console.log(bubbleSortedDeck);
            setSortedDeck([...bubbleSortedDeck]);
        }

        if (rotationCard) {
            handleSortDeck();
        }
    }, [bubbleSort, rotationCard]);

    return <ResultComponent {...{ sortedDeck }} />;
};

export default Result;
