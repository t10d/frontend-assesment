import { call, put, all, takeLatest } from "redux-saga/effects";

import { api } from "../../../services/api";

import {
    addDeckRequest,
    addDeckSuccess,
    loadDeckRequest,
    loadDeckSuccess,
} from "./actions";
import Card from "../../../models/Card";
import history from "../../../services/history";
import { Actions } from "../../../constants";
import { cardCode } from "../../../utils";
import { toast } from "react-toastify";

interface ResponseCards {
    code: string;
}
interface IPile {
    piles: {
        deck: {
            cards: ResponseCards[];
        };
        rotationCard: {
            cards: ResponseCards[];
        };
    };
}

function* addDeck({ payload: { data } }: ReturnType<typeof addDeckRequest>) {
    try {
        const { deck_id } = (yield call(api.get, "/new")).data;

        const cardsSequence = data.deck
            .map((el) => `${cardCode(el)}`)
            .join();

        yield call(api.get, `/${deck_id}/draw/?count=52`);

        yield call(
            api.get,
            `/${deck_id}/pile/deck/add/?cards=${cardsSequence}`
        );

        yield call(
            api.get,
            `/${deck_id}/pile/rotationCard/add/?cards=${cardCode(data.rotationCard)}`
        );

        yield put(addDeckSuccess(deck_id));
        yield call(history.push, "/result");
    } catch (error) {
        toast.error(error);
    }
}

function* loadDeck({
    payload: { deckId },
}: ReturnType<typeof loadDeckRequest>) {
    try {
        const { piles: deckPile }: IPile = (yield call(
            api.get,
            `/${deckId}/pile/deck/list`
        )).data;

        const { piles: rotationCardPile }: IPile = (yield call(
            api.get,
            `/${deckId}/pile/rotationCard/list`
        )).data;

        const cards: Card[] = [];

        deckPile.deck.cards.forEach((card) => {
            const formattedCard: Card = {
                value: card.code[0],
                suit: card.code[1],
            };

            cards.push(formattedCard);
        });

        const rotationCardCode = rotationCardPile.rotationCard.cards[0].code;

        const rotationCard: Card = {
            value: rotationCardCode[0],
            suit: rotationCardCode[1],
        };

        yield put(loadDeckSuccess({ deck: cards, rotationCard }));
    } catch (error) {
        toast.error(error);
    }
}

export default all([
    takeLatest(Actions.ADD_REQUEST, addDeck),
    takeLatest(Actions.LOAD_REQUEST, loadDeck),
]);
