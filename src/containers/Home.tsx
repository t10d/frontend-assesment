import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import HomeComponent from "../components/Home";
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
        history.push("/result");
    };

    return (
        <HomeComponent
            {...{
                cards,
                rotationCard,
                suits,
                values,
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
