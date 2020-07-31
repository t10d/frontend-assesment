import React from 'react';

import './styles.css';


function Card (data) {


  var suitSymbol;
    
  data.suitDraw === 'SPADES' ? suitSymbol =  '\u2660' :
  data.suitDraw === 'CLUBS' ? suitSymbol = '\u2663' :
  data.suitDraw === 'DIAMONDS' ? suitSymbol = '\u2666' :
  suitSymbol = '\u2665' ;
  
    
  var valueSymbol;

  data.valueDraw === 'ACE' ? valueSymbol =  'A' :
  data.valueDraw === 'KING' ? valueSymbol = 'K' :
  data.valueDraw === 'QUEEN' ? valueSymbol = 'Q' :
  data.valueDraw === 'JACK' ? valueSymbol = 'J' :
  valueSymbol = data.valueDraw ;

  
  return (

    <div className="card-container">
      <div className={ ((suitSymbol === '\u2666') || suitSymbol === ('\u2665') ) ? "redCard" : "blackCard" } >
        <span > { suitSymbol } </span>
        <span > { valueSymbol } </span>
      </div>
    </div>

  );
}

export default Card ;