import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useStateValue } from "../state";

export interface HomePageProps {}

export interface IDeck {
  cards: string[] | undefined;
  id: string;
}

const HomePageWrapper = styled.div`
  min-height: 100vh;
`;

export const StyledButton = styled.button`
  padding: 0.8em;
  color: black;
  background-color: #996515;
  color: white;
  font-size: 1.6em;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    background-color: #daa520;
  }
`;

const DecksWrapper = styled.div`
  background-color: #996515;
  padding: 1em 2em;
`;

const DeckListItem = styled.li`
  list-style: none;
  text-decoration: none;
  background-color: #c5b358;
  border: 2px solid #e6be8a;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    background-color: #daa520;
  }
`;

const HomePage: React.SFC<HomePageProps> = () => {
  const [
    {
      deckData: { decks },
    },
    dispatch,
  ] = useStateValue();
  const [myDecks, setDecks] = useState<IDeck[]>([]);

  useEffect(() => {
    if (decks && decks.length) {
      console.log("displaying decks from state provider (context)");
      setDecks(decks);
    } else {
      console.log("searching decks from session storage");
      let storedDecks: IDeck[] = [];
      for (let i = 0; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        if (key) {
          console.log("key: " + key);
          const deck = {
            cards: sessionStorage.getItem(key)?.split(","),
            id: key,
          };
          storedDecks.push(deck);
        }
      }
      if (storedDecks.length) {
        setDecks(storedDecks);
        storedDecks.forEach((body) =>
          dispatch({ type: "addDeck", deck: body })
        );
      }
    }
  }, [setDecks, decks, dispatch]);
  return (
    <HomePageWrapper>
      <h2>Decks Creator</h2>
      <StyledButton className="App-link">
        <Link className="App-link" to="/deck/new">
          Criar deck
        </Link>
      </StyledButton>
      {myDecks && (
        <DecksWrapper>
          <h3>Meus decks</h3>
          {myDecks.map(({ id }: IDeck) => (
            <DeckListItem key={id} className="App-link">
              <Link className="App-link" to={`/decks/${id}`}>
                #{id}
              </Link>
            </DeckListItem>
          ))}
        </DecksWrapper>
      )}
    </HomePageWrapper>
  );
};

export default HomePage;
