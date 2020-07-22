import * as React from "react";
import styled from "styled-components";
import { isNumber } from "util";

export interface CardProps {
  isSelected: boolean;
  val: any;
  selectCard: any;
  index: string | number;
}

const CardWrapper = styled.div`
  flex: 1 0 21%;
  margin: 5px;
  min-height: 25vh;
  max-width: 10vw;
  border-radius: 1%;
  padding: 10px 0;
  background-color: gray;
  //@ts-ignore
  ${({ isSelected }) => isSelected && `border: 2px solid blue;`}
  &:hover {
    background-color: gold;
  }
`;

const CardSelector = styled.span`
  &:hover {
    background-color: gold;
    border: 1px solid white;
    cursor: pointer;
  }
`;

const Card: React.SFC<CardProps> = ({
  val,
  isSelected = false,
  selectCard,
  index,
}) => {
  const cardWrapperProps = { isSelected };

  return (
    <CardWrapper onMouseDown={selectCard} {...cardWrapperProps}>
      {" "}
      <CardSelector>
        {!isNumber(index) ? index : Number(index) + 1}
      </CardSelector>
      <h3>{val ? (val.length <= 3 ? val : "?") : ""}</h3>
    </CardWrapper>
  );
};

export default Card;
