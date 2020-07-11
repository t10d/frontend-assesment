import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type DeckFormProps = RouteComponentProps;

export default function DeckForm(props: DeckFormProps) {
  function onClick() {
    props.history.push('/deck/123');
  }

  return (
    <div>
      Deck Form <button onClick={onClick}>Submit</button>
    </div>
  );
}
