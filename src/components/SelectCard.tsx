import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Select = styled.select``;

const AddButton = styled.button``;

interface ISelectCard {
    suits: string[];
    values: string[];
    setSelectedSuit: Function;
    setSelectedValue: Function;
    handleAddCard: Function;
}

const SelectCard: React.FC<ISelectCard> = ({
    suits,
    values,
    setSelectedSuit,
    setSelectedValue,
    handleAddCard
}) => {
    return (
        <Container>
            <Select onChange={(e) => setSelectedValue(e.target.value)}>
                {values.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </Select>
            <Select onChange={(e) => setSelectedSuit(e.target.value)}>
                {suits.map((suit) => (
                    <option key={suit} value={suit}>
                        {suit}
                    </option>
                ))}
            </Select>
            <AddButton onClick={() => handleAddCard()}>+</AddButton>
        </Container>
    );
};

export default SelectCard;
