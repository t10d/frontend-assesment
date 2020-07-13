import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useAsync } from 'react-async';
import { getPileCards } from '../../services/api';
import { CARDS_PILE_NAME } from '../../utils/constants';
import { useDeckInfo } from '../../hooks/useDeckInfo';
import ErrorBoundary from '../../components/ErrorBoundary';

type RouteParams = { deckId: string };
type DeckInfoProps = RouteComponentProps<RouteParams>;

export default function DeckInfo(props: DeckInfoProps) {
  const { data, isPending } = useAsync(getPileCards, {
    deckId: props.match.params.deckId,
    pileName: CARDS_PILE_NAME,
  });
  const { cards, fullHouseCombinations } = useDeckInfo(data);

  return (
    <ErrorBoundary>
      {isPending ? (
        'loading...'
      ) : (
        <React.Fragment>
          {cards.length && (
            <React.Fragment>
              <div>Ordered Pile</div>
              <div>High Card: {cards[0]}</div>
            </React.Fragment>
          )}
          <div>Full House Combinations: none</div>
        </React.Fragment>
      )}
    </ErrorBoundary>
  );
}
