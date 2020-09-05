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
        draft.cards = payload.piles.cards.cards;
        return;
      case c.FETCH_CARDS_FAIL:
        draft.loading = false;
        draft.fail = payload.error;
        return;
      case c.FETCH_ROTATION:
        draft.fail = null;
        draft.loading = true;
        return;

      case c.FETCH_ROTATION_SUCCESS:
        draft.loading = false;
        draft.rotation = payload.piles.rotation.cards[0].code;
        return;
      case c.FETCH_ROTATION_FAIL:
        draft.loading = false;
        draft.fail = payload.error;
        return;
    }
  });

export default showdeck;
