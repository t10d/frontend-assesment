import React, { useState } from "react";
import { toast } from "react-toastify";

import HomeComponent from "../components/Home";
import Card from "../models/Card";

import { addDeckRequest } from "../store/modules/deck/actions";

import { SUITS, VALUES } from "../constants";
import { useDispatch } from "react-redux";
import { validateCard } from "../utils";

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

            if (validateCard(newCard)) {
                const findEqual = cards.find(
                    (card) =>
                        card.suit === selectedSuit &&
                        card.value === selectedValue
                );

                if (findEqual) {
                    toast.error("Card already exists");
                } else {
                    setCards([...cards, newCard]);
                }
            } else {
                toast.error("Invalid card");
            }
        }
    };

    const handleAddRotationCard = () => {
        if (
            validateCard({
                suit: selectedRotationSuit,
                value: selectedRotationValue,
            })
        ) {
            setRotationCard({
                suit: selectedRotationSuit,
                value: selectedRotationValue,
            });
        } else {
            toast.error("Invalid card");
        }
    };

    const handleRemoveCard = (index: number) => {
        cards.splice(index, 1);

        setCards([...cards]);
    };

    const handleSubmit = () => {
        if (cards.length === 0) {
            toast.error("The deck cannot be null");
        }

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
