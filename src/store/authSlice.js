import { createSlice } from "@reduxjs/toolkit";


const AuthSlice=createSlice(
    {
        name:'Auth',
        initialState:{
            users:{},
            islogin:false,
            
        },
        reducers:{
           userDetails:(state,action)=>{
            state.islogin=true;
            state.users={...action.payload};
            console.log("auth user",state.users)
           }
           
    }
}
);

export const {userDetails}=AuthSlice.actions;
export default AuthSlice.reducer;