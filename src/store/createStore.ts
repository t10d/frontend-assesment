import { createStore, applyMiddleware, Reducer, Action } from "redux";
import { PersistPartial } from "redux-persist/es/persistReducer";

export default (reducers: Reducer<PersistPartial, Action<any>>, middlewares: any) => {
    const enhancer = applyMiddleware(...middlewares);

    return createStore(reducers, enhancer);
};
