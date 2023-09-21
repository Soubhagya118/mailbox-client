import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "./nameSlice";

const ReduxStore= configureStore(
    {
reducer:{
        name:nameSlice
}
    }
)

export default ReduxStore;