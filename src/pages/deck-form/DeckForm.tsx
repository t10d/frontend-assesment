import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, Form, Field, FormikErrors, ErrorMessage } from 'formik';
import { cards, initialCards } from './DeckForm.content';
import { createDeck, createPile } from '../../services/api';
import {
  CARDS_PILE_NAME,
  ROTATION_CARD_PILE_NAME,
} from '../../utils/constants';

type DeckFormProps = RouteComponentProps;
type FormValues = { cards: string[]; rotationCard: string };

function validateCardRequirements(cards: string[]) {
  let hasError = true;

  cards.forEach(card => {
    if (card) {
      hasError = false;
    }
  });

  return hasError;
}

export default function DeckForm(props: DeckFormProps) {
  const [hasMinimalCardsError, setHasMinimalCardsError] = React.useState(
    false,
  );

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

    if (hasMinimalCardsError) {
      setHasMinimalCardsError(false);
    }

    return hasError ? errors : {};
  }

  async function onSubmit(values: FormValues) {
    const isInvalid = validateCardRequirements(values.cards);

    if (isInvalid) {
      setHasMinimalCardsError(true);
      return;
    }

    try {
      const data = await createDeck();
      await createPile(data.deck_id, CARDS_PILE_NAME, values.cards);
      await createPile(data.deck_id, ROTATION_CARD_PILE_NAME, [
        values.rotationCard,
      ]);

      props.history.push(`/deck/${data.deck_id}`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      Cards
      {hasMinimalCardsError && <div>Cards has a minimal quantity</div>}
      <Formik
        initialValues={{ cards: initialCards, rotationCard: '' }}
        validate={onValidate}
        onSubmit={onSubmit}
      >
        {formikBag => (
          <Form>
            {formikBag.values.cards.map((_, index) => (
              <div key={`card-${index}`}>
                <Field name={`cards[${index}]`} />
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
