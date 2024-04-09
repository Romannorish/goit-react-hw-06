import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import { filtersReducer } from "./filterSlice";
import persistReducer from "redux-persist/es/persistReducer";
import { contactsReducer } from "./contactSlice";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: "contacts",
    storage,
    whitelist: ["items"],
  };

  const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filters: filtersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

export const persistor = persistStore(store)