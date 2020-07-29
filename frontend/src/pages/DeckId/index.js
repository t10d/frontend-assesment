import React, { useState, useEffect} from 'react';
import axios from 'axios';

import './styles.css';

function DeckId() {

  const [pileSuit, setPileSuit] = useState([]);
  const [pileValues, setPileValues] = useState([]);
  
  const [pileSuitSorted, setPileSuitSorted] = useState([]);
  const [pileValueSorted, setPileValueSorted] = useState([]);

  const [fullHouseCombinations, setFullHouseCombinations] = useState([]);



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




// full house combinacoes
useEffect(() => {

  
  const inputValue = ['2', '2', '2', '2', '4', '4', '4'];
  const inputSuit = [ 'H', 'D', 'C', 'S', 'H', 'D', 'C'];

  const valores = [];
  const ocorrencias = [];
  var indexValores = 0;
  var indexOcorrencias = 0;

  valores[indexValores] = inputValue[0];
  indexValores++;

  ocorrencias[0] = 1;

  var i;

  for ( i=0; i<inputValue.length-1; i++) {
    if (inputValue[i] !== inputValue[i+1]) {
      valores[indexValores] = inputValue[i+1];
      indexValores++;
      indexOcorrencias++
      ocorrencias[indexOcorrencias] = 1;
    } else {
      ocorrencias[indexOcorrencias]++;
    }
  }


  var j;
  var k;
  var indicesCertos = [];
      

  var indexTrios = 0;
  let trios = [[]];


  // buscando pelos trios
  for ( i=0; i<ocorrencias.length; i++) {
    
    // salvo os trios quando tem 3 cartas de mesmo valor
    if(ocorrencias[i] === 3){
    
      indicesCertos = [];
      k=0;
      
      for ( j=0; j<inputValue.length; j++ ) {
        if ( inputValue[j] === valores[i] ) {

          indicesCertos[k] = j;
          k++;
        }
      }
      
      trios[indexTrios] = [inputValue[indicesCertos[0]], inputSuit[indicesCertos[0]],
                           inputValue[indicesCertos[1]], inputSuit[indicesCertos[1]],
                           inputValue[indicesCertos[2]], inputSuit[indicesCertos[2]]];
      indexTrios++;
      
    }


    // se eu tiver 4 cartas de naipes diferentes, tenho 4 combinaçoes de trios possíveis
    // entao 'ignoro' cada um das cartas, para obter os 4 trios

    if(ocorrencias[i] === 4){
      
      indicesCertos = [];
      k=0;
      
      for ( j=0; j<inputValue.length; j++ ) {
        if ( inputValue[j] === valores[i] ) {

          indicesCertos[k] = j;
          k++;
        }
      }  

      
      trios[indexTrios] = [inputValue[indicesCertos[0]], inputSuit[indicesCertos[0]],
                           inputValue[indicesCertos[1]], inputSuit[indicesCertos[1]],
                           inputValue[indicesCertos[2]], inputSuit[indicesCertos[2]]];
      indexTrios++ ;
      
      trios[indexTrios] = [inputValue[indicesCertos[0]], inputSuit[indicesCertos[0]],
                           inputValue[indicesCertos[1]], inputSuit[indicesCertos[1]],
                           inputValue[indicesCertos[3]], inputSuit[indicesCertos[3]]];
      indexTrios++ ;
      
      trios[indexTrios] = [inputValue[indicesCertos[0]], inputSuit[indicesCertos[0]],
                           inputValue[indicesCertos[2]], inputSuit[indicesCertos[2]],
                           inputValue[indicesCertos[3]], inputSuit[indicesCertos[3]]];
      indexTrios++ ;
      
      trios[indexTrios] = [inputValue[indicesCertos[1]], inputSuit[indicesCertos[1]],
                           inputValue[indicesCertos[2]], inputSuit[indicesCertos[2]],
                           inputValue[indicesCertos[3]], inputSuit[indicesCertos[3]]];
      indexTrios++;

    }
  }

 // console.log(trios);


  let duplas = [[]];
  var indexDuplas = 0;


  // buscando pelas duplas 
  for (var l = 0; l<inputValue.length; l++) {       
    for (var m = 1; m<(inputValue.length); m++) {  
      
        // se l<m, pra nao voltar no vetor e ter combinacoes diferentes (a ordem nao importa) 
        // e se o valor das duas cartas fores iguais, add na matriz(x)
        if ( ( l<m ) && ( inputValue[l] === inputValue[m] ) ) {
          
          duplas[indexDuplas] = [ inputValue[m],inputSuit[m] , inputValue[l],inputSuit[l] ];
          indexDuplas++;
              
      }      
    }
  }

 // console.log(duplas);

/**
 * agora precisamos juntar trios e duplas, verificando as condiçoes possíveis pq nada nessa vida é fácil
 * 
 * se eu tenho um trio, nao posso ter uma dupla com aquele mesmo valor pois não temos cartas repetidas no deck
 * entao vou concatenar as duplas nos trios de valores diferentes
 * 
 * **/


  let fullHouse = [[]];
  var indexFullHouse = 0;


//  for (var array = 0; array<trios.length; array++) {
    for (var trio = 0; trio<trios.length; trio++) {
     
      console.log();

      for (var dupla = 0; dupla<duplas.length; dupla++) {
        
        if ( trios[trio][0] !== duplas[dupla][0] ) {
          
          fullHouse[indexFullHouse] = [ trios[trio][0]+trios[trio][1], trios[trio][2]+trios[trio][3], trios[trio][4]+trios[trio][5], 
                                        duplas[dupla][0]+duplas[dupla][1], + duplas[dupla][2]+duplas[dupla][3] ];

          indexFullHouse++;

        }
      }
    }
//  }

console.log(fullHouse);
setFullHouseCombinations(fullHouse);

   

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



      <h2>Rotation card: </h2>
      

      <h2>High card: </h2>
      <span> {pileValueSorted[0]} {pileSuitSorted[0]} </span>
      

      <h2>Full house combination: </h2>
      
    </div>
  );
}

export default DeckId;