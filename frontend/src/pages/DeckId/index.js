import React, { useState, useEffect} from 'react';
import axios from 'axios';

import './styles.css';

function DeckId() {
  
  const [pile, setPile] = useState([]);
  const [pileSorted, setPileSorted] = useState([]);
  

  // Esta página deve carregar a pilha criada pela Rota #1, usando o deck_id dado pelo endpoint "A Brand New Deck" [1]
  useEffect(() => {
    axios({
      method: 'get',
      url: `https://deckofcardsapi.com/api/deck/${localStorage.getItem('deck_id')}/draw/?count=11`
    })
    .then (response => {
      setPile(response.data.cards);
    });
  },[]);

  return (
    <div className="deckid-container">

      <h1>Ordered Pile</h1>
      <ul className="cards">
      {pile.map((card, index )=> (
          <li key={card.code} className="card">              
            <span> card {index+1} </span>
            <img src={card.image} alt={card.code} />
          </li>
        ))}

      </ul>

      <h2>Rotation card: 2S </h2>
      
      <h2>High card: 2S</h2>
      
      <h2>Full house combination: none</h2>
      
    </div>
  );
}

export default DeckId;