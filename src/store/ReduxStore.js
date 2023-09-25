import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import mailDetailsSlice from "./mailDetailsSlice";

const ReduxStore= configureStore(
    {
reducer:{
        
        Auth:authSlice,
        Mail:mailDetailsSlice
}
    }
)

export default ReduxStore;