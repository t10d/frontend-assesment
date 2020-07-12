import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik, FormikErrors } from 'formik';
import { createDeck, createPile, drawCards } from '../../services/api';
import { CARDS_PILE_NAME } from '../../utils/constants';
import {
  cards,
  initialCards,
  suits,
  SUITS_TOTAL,
  values,
  VALUES_TOTAL,
} from './DeckForm.content';

type DeckFormProps = RouteComponentProps;
type FormValues = { cards: string[]; rotationCard: string };

function generateSuitRank(rotationCardSuit: string) {
  const suitIndex = suits.indexOf(rotationCardSuit);
  const suitRankMap = new Map<string, number>();
  let rankValue = SUITS_TOTAL;

  for (let it = suitIndex; it < SUITS_TOTAL + suitIndex; it += 1) {
    const suit = suits[it % SUITS_TOTAL];
    suitRankMap.set(suit, rankValue--);
  }

  return suitRankMap;
}

function generateValueRank(rotationCardValue: string) {
  const valueIndex = values.indexOf(rotationCardValue);
  const valueRankMap = new Map<string, number>();
  let rankValue = VALUES_TOTAL;

  for (let it = valueIndex; it < VALUES_TOTAL + valueIndex; it += 1) {
    const value = values[it % VALUES_TOTAL];
    valueRankMap.set(value, rankValue--);
  }

  return valueRankMap;
}

function sortCards(cards: string[], rotationCard: string) {
  const rotationCardSuit = rotationCard.slice(-1);
  const rotationCardValue = rotationCard.slice(0, rotationCard.length - 1);
  const suitRankMap = generateSuitRank(rotationCardSuit);
  const valueRankMap = generateValueRank(rotationCardValue);

  function compare(a: string, b: string) {
    const valueA = a.slice(0, a.length - 1);
    const suitA = a.slice(-1);
    const valueB = b.slice(0, b.length - 1);
    const suitB = b.slice(-1);

    const suitRankA = suitRankMap.get(suitA) ?? 0;
    const suitRankB = suitRankMap.get(suitB) ?? 0;
    const valueRankA = valueRankMap.get(valueA) ?? 0;
    const valueRankB = valueRankMap.get(valueB) ?? 0;

    if (suitRankA === suitRankB) {
      if (valueRankA < valueRankB) {
        return 1;
      }

      if (valueRankA > valueRankB) {
        return -1;
      }

      return 0;
    }

    if (suitRankA < suitRankB) {
      return 1;
    }

    if (suitRankA > suitRankB) {
      return -1;
    }

    return 0;
  }

  return cards.sort(compare);
}

export default function DeckForm(props: DeckFormProps) {
  function onValidate(values: FormValues): FormikErrors<FormValues> {
    const errors = { cards: initialCards, rotationCard: '' };
    let hasError = false;

    values.cards.forEach((card, index) => {
      if (card && cards.indexOf(card) === -1) {
        errors.cards[index] = `${card} não é uma carta válida`;
        hasError = true;
      } else {
        errors.cards[index] = '';
      }
    });

    if (values.rotationCard) {
      if (cards.indexOf(values.rotationCard) === -1) {
        errors.rotationCard = `${values.rotationCard} não é uma carta válida`;
        hasError = true;
      } else {
        errors.rotationCard = '';
      }
    } else {
      errors.rotationCard = 'Rotation card is required';
      hasError = true;
    }

    return hasError ? errors : {};
  }

  async function onSubmit(values: FormValues) {
    const cards = values.cards.filter(card => Boolean(card.trim()));
    const rotationCard = values.rotationCard;

    try {
      const data = await createDeck(cards);
      await drawCards(data.deck_id, data.remaining);
      const orderedCards = sortCards(cards, rotationCard);
      await createPile(data.deck_id, CARDS_PILE_NAME, orderedCards);

      props.history.push(`/deck/${data.deck_id}`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      Cards
      <Formik
        initialValues={{ cards: initialCards, rotationCard: '' }}
        validate={onValidate}
        onSubmit={onSubmit}
      >
        {formikBag => (
          <Form>
            {formikBag.values.cards.map((_, index) => (
              <div key={`card-${index}`}>
                <label>
                  <Field name={`cards[${index}]`} />
                </label>
                <ErrorMessage name={`cards[${index}]`} />
              </div>
            ))}
            <label htmlFor="rotationCard">Rotation Card</label>
            <Field id="rotationCard" name="rotationCard" />
            <ErrorMessage name="rotationCard" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
