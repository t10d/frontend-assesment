export function addDeckRequest(data: any) {
    return {
        type: '@deck/ADD_REQUEST',
        payload: { data },
    }
}

export function addDeckSuccess() {
    return {
        type: '@deck/ADD_SUCCESS',
    }
}

export function loadDeckRequest() {
    return {
        type: '@deck/LOAD_REQUEST',
    }
}

export function loadDeckSuccess(data: any) {
    return {
        type: '@deck/LOAD_SUCCESS',
        payload: { data },
    }
}