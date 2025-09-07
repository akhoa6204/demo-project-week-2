import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import type { PersistConfig } from "redux-persist";
import { cartReducer } from "./reducers/cart.reducer";

// 1) Tạo rootReducer và SUY RA RootState
export const rootReducer = combineReducers({
  cart: cartReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

// 2) Gõ generic cho persist config & persist reducer
const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefault) =>
    getDefault({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
