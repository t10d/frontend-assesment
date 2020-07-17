import React, { useState } from "react";
import HomeComponent from "../components/Home";
import Card from "../Model/Card";

const suits = ["S", "H", "C", "D"];
const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "J",
    "Q",
];

const Home: React.FC = () => {
    const [selectedSuit, setSelectedSuit] = useState<string>("");
    const [selectedValue, setSelectedValue] = useState<string>("");

    const [selectedRotationSuit, setSelectedRotationSuit] = useState<string>("");
    const [selectedRotationValue, setSelectedRotationValue] = useState<string>("");

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

    const handleAddCard = () => {
        const newCard: Card = {
            suit: selectedSuit,
            value: selectedValue,
        };

        setCards([...cards, newCard]);
    };

    const handleAddRotationCard = () => {
        setRotationCard({
            suit: selectedRotationSuit,
            value: selectedRotationValue,
        });
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
            }}
        />
    );
};

export default Home;
