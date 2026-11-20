import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../Redux_slices/userSlice";
const Store = configureStore({
  reducer: {
    userInfo: useReducer,
  },
});

export default Store;
