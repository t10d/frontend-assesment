import React, { useState, useEffect} from 'react';
import axios from 'axios';

import './styles.css';
import './modal.css';

function NewDeck() {

  const [availableCards, setAvailableCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [rotationCard, setRotationCard] = useState(0);


  // Esconde a carta de rotacao, que esta inicialmente com valor 0
  useEffect(() => {
    document.getElementById('rotationCard').hidden = true;
  }, []);


  // Chamada a API, cria um novo deck
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://deckofcardsapi.com/api/deck/new/',
    })
    .then (response => {
      // salvo localmente no storage o deck_id da resposta 
      localStorage.setItem('deck_id', response.data.deck_id);
    });
  },[]);


  // Chamada a API, busca a imagem das cartas, assim como o código dela
  useEffect(() => {
    axios({
      method: 'get',
      url: `https://deckofcardsapi.com/api/deck/${localStorage.getItem('deck_id')}/draw/?count=52`,
    })
    .then (response => {
      // salvo a resposta em availableCards
      const cardResponse = response.data.cards.map(card => card);
      setAvailableCards(cardResponse);
    });
  },[]);




  function handleAddCard (addCard, code) {

    // se a carta de rotacao foi selecionada
    if (rotationCard === 1) {

      // salvo a carta de rotacao
      setRotationCard(addCard);
      
      // escodo o botao de add carta de rotacao 
      document.getElementById('addRotationCard').hidden = true;

      // mostro a carta de rotacao
      document.getElementById('rotationCard').hidden = false;

      // fecha o modal
      document.getElementById("modal-toggle").checked = false;
    

      // se o deck foi selecionado
    } else {

      // add ao deckCards
      setSelectedCards([...selectedCards, addCard]);
      
      // remover do availablecards
      setAvailableCards(availableCards.filter(card => card.code !== code));

      // se ja foram selecionadas 10 cartas
      if (selectedCards.length >= 9) {
        // esconde o botao para add 
        document.getElementById('addCard').hidden = true;
      }

      // fecha o modal
      document.getElementById("modal-toggle").checked = false;

    }
  }



  function handleRotationCard() {
    // seto a carta de rotacao como selecionada
    setRotationCard(1);

    // abro o modal para selecionar a carta
    document.getElementById("modal-toggle").checked = true;
  }


  function handleSubimit (e) {
    e.preventDefault();

    console.log(localStorage.getItem('deck_id'));
    console.log(selectedCards);
    console.log(rotationCard);

    // um novo deck deve ser criado [1],
    // as cartas submetidas pelo usuário devem ser adicionadas para 1 ou mais pilhas [2]
    // o usuário deve ser redirecionado para a Rota #2.

  }


  return (
    <div> 


      <div className="modal-container">
        <input type="checkbox" id="modal-toggle" />
        <label className="modal-backdrop" htmlFor="modal-toggle"></label>
    
        <div className="modal-content">
          <label className="modal-close-btn" htmlFor="modal-toggle">
          <svg width="50" height="50">
        		<line x1="15" y1="15" x2="35" y2="35"/>
			      <line x1="35" y1="15" x2="15" y2="35"/>
		      </svg>
	        </label>
	        <p> Select your card </p> 
          <ul className="cards">
            {availableCards.map(card => (
              <li key={card.code} onClick={() => handleAddCard(card, card.code)}>              
                <img src={card.image} alt={card.code}  />
              </li>
            ))}
          </ul>
        </div>
      </div>




    <form onSubmit={handleSubimit} className="newdeck-container">

      <h1>Cards</h1>

      <ul className="cards">
        {selectedCards.map((card, index )=> (
          <li key={card.code} className="card">              
            <span> card {index+1} </span>
            <img src={card.image} alt={card.code} />
          </li>
        ))}

  
        <li className="card" id="addCard">          
          <span>Add card</span>    
          <label htmlFor="modal-toggle">+</label>
        </li>
      </ul>

  

      <h2>Rotation card</h2>

      <ul>
        <li className="card" id="rotationCard" >          
          <img src={rotationCard.image} alt={rotationCard.code} />
        </li>

        <li className="card" id="addRotationCard" onClick={handleRotationCard}>             
          <label>+</label>
        </li>
      </ul>

      
      <button type="submit" className="button">Submit</button>

    </form>
    </div>
  );
}

export default NewDeck;