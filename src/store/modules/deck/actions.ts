import { IData } from "../../../models/Redux"

export function addDeckRequest(data: IData) {
    return {
        type: '@deck/ADD_REQUEST',
        payload: { data },
    }
}

export function addDeckSuccess(deckId: string) {
    return {
        type: '@deck/ADD_SUCCESS',
        payload: { deckId }
    }
}

export function loadDeckRequest(deckId: string) {
    return {
        type: '@deck/LOAD_REQUEST',
        payload: { deckId }
    }
}

export function loadDeckSuccess(data: IData) {
    console.log('loadsucess');
    return {
        type: '@deck/LOAD_SUCCESS',
        payload: { data },
    }
}