import React, { useState, useEffect} from 'react';
import axios from 'axios';

import './styles.css';

function DeckId() {

  const [pileSuit, setPileSuit] = useState([]);
  const [pileValues, setPileValues] = useState([]);
  
  const [pileSuitSorted, setPileSuitSorted] = useState([]);
  const [pileValueSorted, setPileValueSorted] = useState([]);


  useEffect(() => {
    axios({
      method: 'get',
      url: `https://deckofcardsapi.com/api/deck/${localStorage.getItem('deck_id')}/draw/?count=11`
    })
    .then (response => {
      
      const suits = response.data.cards.map(card => card.suit);
      setPileSuit(suits);

      const values = response.data.cards.map(card => card.value);
      setPileValues(values);

    });
  },[]);




  useEffect(() => {
   
  // input de cartas
  const pile_naipe = pileSuit.map(card => card);
  const pile_values = pileValues.map(card => card); 


  // ordem proposta
  const naipes = ['HEARTS', 'DIAMONTS', 'CLUBS', 'SPADES'];
  const valores = ['2', 'ACE', 'KING', 'QUEEN', 'JACK', '10', '9', '8', '7', '6', '5', '4', '3'];


  // carta de rotacao
  const rotationCardValor = '2';
  const rotationCardNaipe = 'HEARTS';

  // dividir as array e passar quem ta na frente da rotation card pra trás
  
  var i = 0;
  var j = 0;
  

  // criando nova array de naipes, com base na carta de rotacao
  const naipesOrder =[];

  for (i=0; i<4; i++) {
    if (naipes[i] === rotationCardNaipe) {
      for (j=0; j<i; j++) {
        naipesOrder[j] = naipes[i];
        if (i<4) i++;
      }
    }
  }

  j = 0;

  for (i=0; i<4; i++) {
    if (naipesOrder[i] === undefined) {
      naipesOrder[i] = naipes[j];
      j++;
    }
  }



  // criando nova array de valores, com base na carta de rotacao
  
  const valuesOrder =[];

  for (i=0; i<13; i++) {
    if (valores[i] === rotationCardValor) {
      for (j=0; j<i; j++) {
        valuesOrder[j] = valores[i];
        if (i<13) i++;
      }
    }
  }

  j = 0;

  for (i=0; i<13; i++) {
    if (valuesOrder[i] === undefined) {
      valuesOrder[i] = valores[j];
      j++;
    }
  }




  // Ordenando as pilhas de cartas com base na carta de rotação

  const pile_naipe_ordenados = [];
  const pile_values_ordenados = [];
  

  var n = 0;

  // ordenando os naipes
  for (j=0; j<4; j++) {
    for (i=0; i<13; i++) {
      if ( pile_naipe[i] === naipesOrder[j] ) {
        pile_naipe_ordenados[n] = pile_naipe[i];
        pile_values_ordenados[n] = pile_values[i];
        n++;
      }
    }
  }


  // ordenando os valores
  var aux;
  for( i=0; i<n-1; i++) {

    if (pile_naipe_ordenados[i] === pile_naipe_ordenados[i+1]) {
  
      if ( valuesOrder.indexOf(pile_values_ordenados[i])  > valuesOrder.indexOf(pile_values_ordenados[i+1]) ) {
        
        aux = pile_values_ordenados[i];
        pile_values_ordenados[i] = pile_values_ordenados[i+1];
        pile_values_ordenados[i+1] = aux;
      }
    }
  }
  
  // imprime a string

  /*
  for (i=0; i<n; i++) {
    console.log(i + ':' + pile_naipe_ordenados[i] + '-' + pile_values_ordenados[i] );
  }
*/

  setPileSuitSorted(pile_naipe_ordenados);
  setPileValueSorted(pile_values_ordenados);


  



},[pileValues, pileSuit]);








  return (
    <div className="deckid-container">


      <h1>Ordered Pile</h1>
      
      <div className="cards">

        <div>
        {pileValueSorted.map(( value, index )=> (
          <div key={index} >
              <span>Card {index+1}:  </span>
              <span>{value} </span>
          </div>
        ))}

        </div>

        <div>
        {pileSuitSorted.map(( suit, index )=> (
          <div key={index+1000}>
              <span>&nbsp;</span>
              <span>{suit} </span>
          </div>
        ))}
        </div>

      </div>



      <h2>Rotation card: 2S </h2>
      
      <h2>High card: 2S</h2>
      
      <h2>Full house combination: none</h2>
      
    </div>
  );
}

export default DeckId;