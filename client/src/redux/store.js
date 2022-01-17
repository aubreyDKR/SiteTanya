import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import userRedux from "./userRedux";
import cartRedux from "./cartRedux";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]
}

const reducers = combineReducers({user: userRedux, cart: cartRedux});
const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})