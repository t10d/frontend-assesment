import { IData } from "../../../models/Redux";
import { Actions } from "../../../constants";

export function addDeckRequest(data: IData) {
    return {
        type: Actions.ADD_REQUEST,
        payload: { data },
    };
}

export function addDeckSuccess(deckId: string) {
    return {
        type: Actions.ADD_SUCCESS,
        payload: { deckId },
    };
}

export function loadDeckRequest(deckId: string) {
    return {
        type: Actions.LOAD_REQUEST,
        payload: { deckId },
    };
}

export function loadDeckSuccess(data: IData) {
    return {
        type: Actions.LOAD_SUCCESS,
        payload: { data },
    };
}
