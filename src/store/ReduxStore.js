import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice";

const ReduxStore= configureStore(
    {
reducer:{
        
        Auth:authSlice
}
    }
)

export default ReduxStore;