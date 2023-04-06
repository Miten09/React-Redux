import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authSliceReducer from "./Auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authSliceReducer },
});

export default store;
