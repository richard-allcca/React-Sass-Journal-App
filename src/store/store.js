import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../reducer/authReducer";

// ? ya no se usa combineReducers porque se usa toolkit
// const reducers = combineReducers({
//   auth: authReducer,
// });

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
