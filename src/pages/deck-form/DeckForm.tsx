import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, Form, Field, FieldProps, FormikErrors } from 'formik';
import { cards, initialCards } from './DeckForm.content';

type DeckFormProps = RouteComponentProps;
type FormValues = { cards: string[]; rotationCard: string };

export default function DeckForm(props: DeckFormProps) {
  function onValidate(values: FormValues): FormikErrors<FormValues> {
    const errors = { cards: initialCards, rotationCard: '' };

    values.cards.forEach((card, index) => {
      if (card && cards.indexOf(card) === -1) {
        errors.cards[index] = `${card} não é uma carta válida`;
      } else {
        errors.cards[index] = '';
      }
    });

    if (values.rotationCard && cards.indexOf(values.rotationCard) === -1) {
      errors.rotationCard = `${values.rotationCard} não é uma carta válida`;
    } else {
      errors.rotationCard = '';
    }

    return errors;
  }

  function onSubmit(values: FormValues) {
    console.log(values);
    props.history.push('/deck/123');
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
              <Field key={`card-${index}`} name={`cards[${index}]`}>
                {({ field, meta }: FieldProps) => (
                  <div>
                    <label>
                      <input type="text" {...field} />
                    </label>
                    {meta.touched && meta.error && (
                      <div data-testid={`card-${index}-error`}>
                        {meta.error}
                      </div>
                    )}
                  </div>
                )}
              </Field>
            ))}
            <Field name="rotationCard">
              {({ field, meta }: FieldProps) => (
                <div>
                  <label htmlFor="rotationCard">Rotation Card</label>
                  <input id="rotationCard" type="text" {...field} />
                  {meta.touched && meta.error && (
                    <div data-testid="rotation-card-error">
                      {meta.error}
                    </div>
                  )}
                </div>
              )}
            </Field>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
