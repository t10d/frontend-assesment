import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type DeckInfoProps = RouteComponentProps<{ deckId: string }>;

export default function DeckInfo(props: DeckInfoProps) {
  return <div>Deck Info {props.match.params.deckId}</div>;
}
