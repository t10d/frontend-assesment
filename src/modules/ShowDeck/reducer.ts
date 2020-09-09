import { Reducer, State } from "./types";
import produce from "immer";
import * as c from "./constants";

const INITIAL_STATE: State = {
  fail: null,
  loading: false,
  rotation: "",
  cards: [],
};

const showdeck: Reducer = (state = INITIAL_STATE, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case c.FETCH_CARDS:
        draft.fail = null;
        draft.loading = true;
        return;
      case c.FETCH_CARDS_SUCCESS:
        draft.loading = false;
        const cards = payload.piles.cards.cards;
        const rotation = cards.splice(cards.length - 1, 1);
        draft.cards = cards;
        draft.rotation = rotation[0].code;
        return;
      case c.FETCH_CARDS_FAIL:
        draft.loading = false;
        draft.fail = payload.error;
        return;
    }
  });

export default showdeck;
