import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 15px;
    align-self: flex-start;
`;

const Select = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 15px 15px;
    font-size: 18px;
    color: #6c6c80;
    margin-right: 15px;
    font-weight: bold;
`;

const AddButton = styled.button`
    border-radius: 8px;
    border: 0;
    padding: 15px 20px;
    font-size: 16px;
    background-color: #297045;
    color: #FDF;
    font-weight: bold;
`;

interface ISelectCard {
    suits: string[];
    values: string[];
    setSelectedSuit: Function;
    setSelectedValue: Function;
    handleAddCard: Function;
    addButtonText: string;
}

const suitMap: { [key: string]: number } = {
    S: 9824,
    H: 9829,
    D: 9830,
    C: 9827,
};

const SelectCard: React.FC<ISelectCard> = ({
    suits,
    values,
    setSelectedSuit,
    setSelectedValue,
    handleAddCard,
    addButtonText,
}) => {
    return (
        <Container>
            <Select onChange={(e) => setSelectedValue(e.target.value)}>
                <option>Valor: </option>
                {values.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </Select>
            <Select onChange={(e) => setSelectedSuit(e.target.value)}>
                <option>Naipe: </option>
                {suits.map((suit) => (
                    <option key={suit} value={suit}>
                        {String.fromCharCode(suitMap[suit])}
                    </option>
                ))}
            </Select>
                <AddButton onClick={() => handleAddCard()}>{addButtonText}</AddButton>
        </Container>
    );
};

export default SelectCard;
