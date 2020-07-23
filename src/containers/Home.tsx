import React, { useState } from "react";
import HomeComponent from "../components/Home";
import Card from "../models/Card";

import { addDeckRequest } from "../store/modules/deck/actions";

import { SUITS, VALUES } from "../constants";
import { useDispatch } from "react-redux";

const Home: React.FC = () => {
    const [selectedSuit, setSelectedSuit] = useState<string>("");
    const [selectedValue, setSelectedValue] = useState<string>("");

    const [selectedRotationSuit, setSelectedRotationSuit] = useState<string>(
        ""
    );
    const [selectedRotationValue, setSelectedRotationValue] = useState<string>(
        ""
    );

    const [cards, setCards] = useState<Card[]>([
        {
            suit: "",
            value: "",
        },
    ]);
    const [rotationCard, setRotationCard] = useState<Card>({
        suit: "",
        value: "",
    });

    const dispatch = useDispatch();

    const handleAddCard = () => {
        if (selectedSuit && selectedValue) {
            const newCard: Card = {
                suit: selectedSuit,
                value: selectedValue,
            };

            const findEqual = cards.find(card => card.suit === selectedSuit && card.value === selectedValue);

            if (findEqual) {
                console.error("Card already exists");
            } else {
                setCards([...cards, newCard]);
            }
        }
    };

    const handleAddRotationCard = () => {
        setRotationCard({
            suit: selectedRotationSuit,
            value: selectedRotationValue,
        });
    };

    const handleRemoveCard = (index: number) => {
        cards.splice(index, 1);

        setCards([...cards]);
    };

    const handleSubmit = () => {
        cards.shift();
        dispatch(addDeckRequest({ deck: cards, rotationCard }));
    };

    return (
        <HomeComponent
            suits={SUITS}
            values={VALUES}
            {...{
                cards,
                rotationCard,
                setSelectedSuit,
                setSelectedValue,
                setSelectedRotationSuit,
                setSelectedRotationValue,
                handleAddCard,
                handleAddRotationCard,
                handleRemoveCard,
                handleSubmit,
            }}
        />
    );
};

export default Home;
