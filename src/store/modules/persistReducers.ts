import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { Reducer } from "redux";

export default (reducers: Reducer<any, any>) => {
    const persistedReducer = persistReducer(
        {
            key: "t10.tech_test",
            storage,
            whitelist: ["deckId", "deck", "rotationCard"],
        },
        reducers
    );

    return persistedReducer;
};
