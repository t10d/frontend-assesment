import { all } from "redux-saga/effects";

import deck from "./deck/sagas";

export default function* rootSaga() {
    return yield all([deck]);
}
