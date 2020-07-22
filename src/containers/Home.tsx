import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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

    const history = useHistory();

    const handleAddCard = () => {
        if (selectedSuit && selectedValue) {
            const newCard: Card = {
                suit: selectedSuit,
                value: selectedValue,
            };

            setCards([...cards, newCard]);
        }
    };

    const handleAddRotationCard = () => {
        setRotationCard({
            suit: selectedRotationSuit,
            value: selectedRotationValue,
        });
    };

    const handleRemoveCard = (index: number) => {
        const newCards = cards.slice(index, 1);

        setCards([...newCards]);
    };

    const handleSubmit = () => {
        cards.shift();

        console.log(cards);

        dispatch(addDeckRequest({ deck: cards, rotationCard }));

        history.push('/result');
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
