import React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { useStateValue } from "../state";
import Card from "../components/Card";
import { CardsSection } from "../pages/NewDeck";

export interface HomePageProps {
  id: string;
}

const DeckPage: any = ({ match }: RouteComponentProps<HomePageProps>) => {
  const mockDeck = [
    "AH",
    "2C",
    "2H",
    "10D",
    "6H",
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

  const getDeckHighCard = (deck: any[]) => {
    const rotationCard = deck[deck.length - 1];
    const sortedDeck = deck.slice(0, deck.length - 1).sort();
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
          index === 0 ? `Rotation Card` : index === 1 ? `High Card` : index - 2
        }
        val={e.toUpperCase()}
      />
    ));
  };

  return (
    <div>
      <h1>Deck #{match.params.id}</h1>
      <button>
        <Link to="/">Back to Main Page</Link>
      </button>
      <h2>Ordered Pile</h2>
      <CardsSection>
        {currentDeck ? getDeckHighCard(currentDeck) : getDeckHighCard(mockDeck)}
      </CardsSection>
    </div>
  );
};

export default DeckPage;
