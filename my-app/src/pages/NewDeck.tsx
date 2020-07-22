import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
import { useStateValue } from "../state";
import { StyledButton } from "../pages/HomePage";

export interface NewDeckProps {
  id?: number;
}

const CardInfo = styled.div`
  margin-top: 0.5em;
  &:hover {
    color: gold;
  }
`;

const CardEditor = styled.div`
  max-width: 50%;
  margin: 0 1em;
  flex-direction: row;
`;

export const CardsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;

const NewDeck: React.SFC<NewDeckProps> = () => {
  let history = useHistory();
  const [rotationCard, setRotationCard] = useState("");
  const [cards, setCards] = useState([...Array(10)]);
  const [selectedCard, setSelectedCard] = useState(0);
  const [editAll, setEditAll] = useState(false);

  const [, dispatch] = useStateValue();

  const handleCardsChange = (text: string, position: number) => {
    let currentCard = text.toUpperCase();
    if (currentCard.length && currentCard.length > 3) {
      return;
    }
    setCards([
      ...cards.map((c, ind) => (ind === position || editAll ? currentCard : c)),
    ]);
  };

  const addDeck = async () => {
    let missingCards: number[] = [];
    cards.forEach((el, index) => !el && missingCards.push(index + 1));
    if (missingCards.length) {
      return alert("Preencha os valores das cartas! " + missingCards);
    }
    const body: any = {
      cards: [...cards, rotationCard.slice(0, 3).toUpperCase()],
    };
    const response = await fetch(
      "http://deckofcardsapi.com/api/deck/new/"
    ).then((res: any) => res.json());

    if (response) {
      console.dir(response);
      body.id = response.deck_id;
      console.dir(body);
      dispatch({
        type: "addDeck",
        deck: body,
      });
      sessionStorage.setItem(body.id, body.cards.join());
    }

    const response2 = await fetch(
      `https://deckofcardsapi.com/api/deck/${body.id}/pile/myPile/add/?cards=${body.cards[0]},${body.cards[1]}`
    ).then((r) => r.json());

    if (response2.data) {
      console.dir(response2.data);
      history.push("/");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "98vw",
      }}
    >
      <Link className="App-link" to="/">
        Voltar para a página inicial
      </Link>
      <CardsSection>
        <CardEditor>
          <CardInfo>
            Editando carta: {editAll ? "todas" : selectedCard + 1}
          </CardInfo>
          <CardInfo>
            <input
              type="checkbox"
              checked={!!editAll}
              onChange={() => setEditAll(!editAll)}
            />
            Editar todas
          </CardInfo>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleCardsChange(e.target.value, selectedCard)
            }
            placeholder="Insira o valor (ex. 2H)"
          />
        </CardEditor>
        <CardEditor>
          <div>
            <CardInfo>
              Carta de rotação: {rotationCard.slice(0, 3).toUpperCase()}
            </CardInfo>
          </div>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRotationCard(e.target.value)
            }
            placeholder="Insira o valor (ex. 2H)"
          />
        </CardEditor>
      </CardsSection>
      <CardsSection id="cards">
        {[...Array(10)].map((e, i) => (
          <Card
            val={cards[i]}
            isSelected={selectedCard === i}
            selectCard={() => setSelectedCard(i)}
            key={i}
            index={i}
          />
        ))}
      </CardsSection>
      <StyledButton onClick={() => addDeck()} style={{ width: "100%" }}>
        Salvar deck
      </StyledButton>
    </div>
  );
};

export default NewDeck;
