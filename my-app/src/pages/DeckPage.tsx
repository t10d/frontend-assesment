import React from "react";
import styled from "styled-components";
import { RouteComponentProps, Link } from "react-router-dom";
import { useStateValue } from "../state";
import Card from "../components/Card";
import { CardsSection } from "../pages/NewDeck";
import { StyledButton } from "./HomePage";

export interface HomePageProps {
  id: string;
}

interface ObjectLiteral {
  [key: string]: number;
}

const SmallButton = styled.button`
  padding: 0.4em;
  background-color: #996515;
  color: white;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    background-color: #daa520;
  }
`;

const DeckPage: any = ({ match }: RouteComponentProps<HomePageProps>) => {
  const [showOrderedPile, setShowOrderedPile] = React.useState(false);
  const mockDeck = [
    "AS",
    "AD",
    "AC",
    "KH",
    "KS",
    "7H",
    "8C",
    "9C",
    "5S",
    "4S",
    "8H",
  ];

  const [{ decks }] = useStateValue();
  const currentDeck =
    decks && decks.length
      ? decks.find((d: any) => d.id === match.params.id)
      : sessionStorage.getItem(match.params.id)?.split(",");

  const getDeckHighCard = (deck: string[]) => {
    const rotationCard = deck[deck.length - 1];
    const sortedDeck = deck.sort((a, b) =>
      a > b || a.slice(0, 1) === "A" ? -1 : b > a ? 1 : 0
    );
    const rotationIndex = sortedDeck.indexOf(rotationCard);

    const array = [
      ...sortedDeck.slice(rotationIndex),
      ...sortedDeck.slice(0, rotationIndex),
    ];
    return array.map((e, index) => (
      <Card
        key={index}
        isSelected={false}
        selectCard={() => {}}
        index={
          index === 0 ? `Rotation Card` : index === 1 ? `High Card` : index - 1
        }
        val={e.toUpperCase()}
      />
    ));
  };

  const getFullHouseOcurrences = (d: string[]) => {
    const deck = d.slice(0, d.length - 1);
    let occurrences: ObjectLiteral = {};
    for (let i = 0, j = deck.length; i < j; i++) {
      let rank = deck[i].length > 2 ? deck[i].substr(0, 2) : deck[i].charAt(0);
      occurrences[rank] = (occurrences[rank] || 0) + 1;
    }
    const repeatedRanks = Object.keys(occurrences).filter(
      (val: string) => occurrences[val] >= 2
    );

    let fullHousesCount: number = 0;
    let nroTrincas: number = 0;
    let nroDuplas: number = 0;

    repeatedRanks.forEach((rank) => {
      if (occurrences[rank] === 2) {
        nroDuplas++;
      }

      if (occurrences[rank] === 3) {
        nroTrincas++;
      }

      if (occurrences[rank] > 3) {
        let permut = 1;
        for (let i = 1; i <= occurrences[rank]; i++) {
          permut = permut * i;
        }
        nroTrincas += permut;
      }
    });

    if (!nroTrincas || !nroDuplas) {
      return false;
    }

    fullHousesCount = nroDuplas * nroTrincas;
    let index: number = 0;
    let fullHouses: string[][] = [
      ...Array(fullHousesCount)
        .fill(0)
        .map(() => [...[]]),
    ];

    repeatedRanks.forEach((rank) => {
      let currentFullHouse = fullHouses[index];

      if (occurrences[rank] === 2) {
        deck.forEach(
          (card) => card.includes(rank) && currentFullHouse.push(card)
        );
      }

      if (occurrences[rank] === 3) {
        nroTrincas++;
        deck.forEach(
          (card) =>
            card.includes(rank) &&
            currentFullHouse.length <= 2 &&
            currentFullHouse.push(card)
        );
      }

      if (occurrences[rank] > 3) {
        const trincasCards = deck.filter((card) => card.includes(rank));
        let multipleOcurr = [...Array(occurrences[rank])];
        trincasCards.forEach((t) => {
          multipleOcurr.forEach((trinca) => {
            if (!trinca.includes(t)) {
              trinca.push(t);
            }
          });
        });
        let j: number = 0;
        for (let i = 0; i < fullHousesCount; i++) {
          if (!fullHouses[i].length || fullHouses[i].length === 2) {
            fullHouses[i] = multipleOcurr[j];
            j++;
          }
        }
      }

      if (currentFullHouse.length > 4) {
        index++;
      }
    });
    return fullHouses;
  };

  const fullHouses = currentDeck
    ? getFullHouseOcurrences(currentDeck)
    : getFullHouseOcurrences(mockDeck);

  return (
    <div>
      <h1>Deck #{match.params.id}</h1>
      {!currentDeck && <h5>(Not found, using mock data)</h5>}

      <SmallButton>
        <Link style={{ color: "white" }} to="/">
          Back to Main Page
        </Link>
      </SmallButton>

      <h2>Ordered Pile</h2>
      <div>
        <StyledButton onClick={() => setShowOrderedPile(!showOrderedPile)}>
          {showOrderedPile ? "Hide" : "Show"}
        </StyledButton>
      </div>
      <CardsSection>
        {showOrderedPile && (
          <>
            {currentDeck
              ? getDeckHighCard(currentDeck)
              : getDeckHighCard(mockDeck)}
          </>
        )}
      </CardsSection>

      <h2>Full House Combinations {fullHouses && `(${fullHouses.length})`}</h2>
      {fullHouses ? (
        fullHouses.map((e, i) => (
          <>
            <h4>Full house #{i + 1}</h4>
            <CardsSection key={i}>
              {e.map((h, index) => (
                <Card
                  key={index}
                  isSelected={false}
                  selectCard={() => {}}
                  index={`Fullhouse ${index + 1} card`}
                  val={h}
                />
              ))}
            </CardsSection>
          </>
        ))
      ) : (
        <div>None</div>
      )}
    </div>
  );
};

export default DeckPage;
