import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "./nameSlice";
import authSlice from "./authSlice";

const ReduxStore= configureStore(
    {
reducer:{
        name:nameSlice,
        Auth:authSlice
}
    }
)

export default ReduxStore;