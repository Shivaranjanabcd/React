import { configureStore } from "@reduxjs/toolkit"
import reducer from "../Slice/userSlice"

const Store = configureStore({
    reducer:{
        userInfo: reducer,
    },
});

export default Store;