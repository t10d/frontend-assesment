import * as c from "./constants";

export type State = {
  fail: string | null;
  loading: boolean;
  deck_id: string
};

export type Reducer = (
  state: State,
  payload: {
    type:
      | typeof c.CREATE_DECK
      | typeof c.CREATE_DECK_SUCCESS
      | typeof c.CREATE_DECK_FAIL
      | typeof c.SAVE_DECK
      | typeof c.SAVE_DECK_SUCCESS
      | typeof c.SAVE_DECK_FAIL;
    payload: any;
  }
) => State;
