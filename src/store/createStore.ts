import { createStore, applyMiddleware, Reducer, Action } from "redux";
import logger from "redux-logger";
import { PersistPartial } from "redux-persist/es/persistReducer";

export default (
    reducers: Reducer<PersistPartial, Action<any>>,
    middlewares: any
) => {
    const enhancer = applyMiddleware(...middlewares, logger);

    return createStore(reducers, enhancer);
};
