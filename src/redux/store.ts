import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//import counterReducer  from './counterReducer'
import goalReducer from "./features/goals";

const persistConfig = {
  key: "root",
  storage,
};
const persistedGoalReducer = persistReducer(persistConfig, goalReducer);
export const store = configureStore({
  reducer: {
    //counter: counterReducer,
    goal: persistedGoalReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
