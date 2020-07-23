import React, { useState, useEffect, useCallback } from "react";
import ResultComponent from "../components/Result";
import Card from "../models/Card";

import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../models/Redux";
import { SUITS, VALUES } from "../constants";
import { loadDeckRequest } from "../store/modules/deck/actions";
import { cardCode, includesCards } from "../utils";

const Result: React.FC = () => {
    const [sortedDeck, setSortedDeck] = useState<Card[]>([]);
    const [sortedSuits, setSortedSuits] = useState<typeof SUITS>([]);
    const [sortedValues, setSortedValues] = useState<typeof VALUES>([]);

    const [couples, setCouples] = useState<Card[][]>([]);
    const [threesomes, setThreesomes] = useState<Card[][]>([]);

    const [fullhouses, setFullhouses] = useState<Card[][]>([]);

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

    const fullHouses = useCallback(() => {
        const fullhouse: Card[][] = [];

        if (threesomes.length > 0) {
            threesomes.forEach((triple) =>
                couples.forEach((double) => {
                    if (triple[0].value !== double[0].value) {
                        fullhouse.push(triple.concat(double));
                    }
                })
            );
        }

        return fullhouse;
    }, [couples, threesomes]);

    useEffect(() => {
        const threeSomes: Card[][] = [];

        if (sortedDeck.length < 5) {
            setThreesomes([]);
        }

        sortedDeck.forEach((card) => {
            sortedDeck.forEach((secondCard) => {
                sortedDeck.forEach((thirdCard) => {
                    if (
                        card.value === secondCard.value &&
                        card.value === thirdCard.value
                    ) {
                        if (
                            cardCode(card) !== cardCode(secondCard) &&
                            cardCode(card) !== cardCode(thirdCard) &&
                            cardCode(secondCard) !== cardCode(thirdCard)
                        ) {
                            if (
                                !includesCards(
                                    threeSomes,
                                    [card, secondCard, thirdCard],
                                    false
                                ) &&
                                !includesCards(
                                    threeSomes,
                                    [card, thirdCard, secondCard],
                                    false
                                ) &&
                                !includesCards(
                                    threeSomes,
                                    [secondCard, card, thirdCard],
                                    false
                                ) &&
                                !includesCards(
                                    threeSomes,
                                    [secondCard, thirdCard, card],
                                    false
                                ) &&
                                !includesCards(
                                    threeSomes,
                                    [thirdCard, card, secondCard],
                                    false
                                ) &&
                                !includesCards(
                                    threeSomes,
                                    [thirdCard, secondCard, card],
                                    false
                                )
                            ) {
                                threeSomes.push([card, secondCard, thirdCard]);
                            }
                        }
                    }
                });
            });
        });

        setThreesomes([...threeSomes]);
    }, [sortedDeck]);

    useEffect(() => {
        const couples: Card[][] = [];

        sortedDeck.forEach((card) => {
            sortedDeck.forEach((secondCard) => {
                if (card.value === secondCard.value) {
                    if (card !== secondCard) {
                        if (
                            !includesCards(couples, [card, secondCard], true) &&
                            !includesCards(couples, [secondCard, card], true)
                        ) {
                            couples.push([card, secondCard]);
                        }
                    }
                }
            });
        });

        setCouples([...couples]);
    }, [sortedDeck]);

    useEffect(() => {
        function handleSortDeck() {
            const bubbleSortedDeck: Card[] = bubbleSort();

            console.log(bubbleSortedDeck);
            setSortedDeck([...bubbleSortedDeck]);
        }

        if (rotationCard) {
            handleSortDeck();
        }
    }, [bubbleSort, rotationCard]);

    useEffect(() => {
        function generateFullhouses() {
            const fullHouse = fullHouses();

            console.log(fullHouse);
            setFullhouses([...fullHouse]);
        }

        
        generateFullhouses();
    }, [fullHouses]);

    return <ResultComponent {...{ sortedDeck, fullhouses }} />;
};

export default Result;
