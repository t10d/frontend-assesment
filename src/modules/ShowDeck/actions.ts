import * as c from "./constants";
import { Dispatch } from "redux";

export const fetchCards = (id: string) => (dispatch: Dispatch) => {
  dispatch({
    type: c.FETCH_CARDS,
    payload: {
      request: {
        url: `/api/deck/${id}/pile/cards/list/`,
        method: "GET",
      },
      options: {
        onSuccess: ({ getState, dispatch, response }: any) => {
          dispatch({
            type: c.FETCH_CARDS_SUCCESS,
            payload: response.data,
          });
        },
        onError: ({ getState, dispatch, error }: any) => {
          dispatch({
            type: c.FETCH_CARDS_FAIL,
            payload: "error",
          });
        },
      },
    },
  });

  dispatch({
    type: c.FETCH_ROTATION,
    payload: {
      request: {
        url: `/api/deck/${id}/pile/rotation/list/`,
        method: "GET",
      },
      options: {
        onSuccess: ({ getState, dispatch, response }: any) => {
          dispatch({
            type: c.FETCH_ROTATION_SUCCESS,
            payload: response.data,
          });
        },
        onError: ({ getState, dispatch, error }: any) => {
          dispatch({
            type: c.FETCH_ROTATION_FAIL,
            payload: "error",
          });
        },
      },
    },
  });
};
