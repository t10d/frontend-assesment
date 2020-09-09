import { Reducer, State } from "./types";
import produce from "immer";
import * as c from "./constants";

const INITIAL_STATE: State = {
  fail: null,
  loading: false,
  deck_id: "",
};

const deckform: Reducer = (state = INITIAL_STATE, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case c.CREATE_DECK:
        draft.fail = null;
        draft.loading = true;
        return;

      case c.CREATE_DECK_SUCCESS:
        draft.loading = false;
        if (payload.data) {
          draft.deck_id = payload.data.deck_id;
        } else {
          draft.fail = "It was not possible to create a new deck";
        }
        return;
      case c.CREATE_DECK_FAIL:
        draft.loading = false;
        draft.fail = payload.error;
        return;

      case c.SAVE_DECK:
        draft.fail = null;
        draft.loading = true;
        return;

      case c.SAVE_DECK_SUCCESS:
        draft.loading = false;
        return;
      case c.SAVE_DECK_FAIL:
        draft.loading = false;
        draft.fail = payload.error;
        return;
    }
  });

export default deckform;
