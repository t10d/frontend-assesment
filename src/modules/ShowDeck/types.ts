import * as c from "./constants";

export type State = {
  fail: string | null;
  loading: boolean;
  rotation: String;
  cards: Array<String>;
};

export type Reducer = (
  state: State,
  payload: {
    type:
      | typeof c.FETCH_CARDS
      | typeof c.FETCH_CARDS_SUCCESS
      | typeof c.FETCH_CARDS_FAIL
      | typeof c.FETCH_ROTATION
      | typeof c.FETCH_ROTATION_SUCCESS
      | typeof c.FETCH_ROTATION_FAIL;

    payload: any;
  }
) => State;
