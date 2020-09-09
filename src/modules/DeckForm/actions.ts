import * as c from "./constants";
import { Dispatch } from "redux";

export const createEmptyDeck = () => (dispatch: Dispatch) => {
  dispatch({
    type: c.CREATE_DECK,
    payload: {
      request: {
        url: "/api/deck/new/?cards=",
        method: "GET",
      },
      options: {
        onSuccess: ({ getState, dispatch, response }: any) => {
          dispatch({
            type: c.CREATE_DECK_SUCCESS,
            payload: response,
          });
        },
        onError: ({ getState, dispatch, error }: any) => {
          dispatch({
            type: c.CREATE_DECK_FAIL,
            payload: "error",
          });
        },
      },
    },
  });
};

export const saveDeck = (id: String, cards: String) => (dispatch: Dispatch) => {
  dispatch({
    type: c.SAVE_DECK,
    payload: {
      request: {
        url: `/api/deck/${id}/pile/cards/add/?cards=${cards}`,
        method: "GET",
      },
      options: {
        onSuccess: ({ getState, dispatch, response }: any) => {
          dispatch({
            type: c.SAVE_DECK_SUCCESS,
            payload: response,
          });
          window.location.href = `/deck/${id}`;
        },
        onError: ({ getState, dispatch, error }: any) => {
          dispatch({
            type: c.SAVE_DECK_FAIL,
            payload: "error",
          });
        },
      },
    },
  });
};
