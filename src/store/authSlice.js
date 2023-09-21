import { createSlice } from "@reduxjs/toolkit";


const AuthSlice=createSlice(
    {
        name:'Auth',
        initialState:{
            users:[],
            isNotification:'',
            isError:'',
            notification:{}
        },
        reducers:{
            showNotificationMessage:(state,action)=>{
                if(action.payload.title=='Loading!'){
                state.isNotification=true;
                state.isError=false;

                }else if(action.payload.title=='Fulfilled!'){
                state.isNotification=false;
                state.isError=false;

                }else if(action.payload.title=='Error!'){
                    state.isError=true;
                    state.isNotification=false;
                }
                state.notification={...action.payload}
        },
        clearNotification:(state,action)=>{
            console.log("clear Notification")
            state.notification = {}
        }
    }
}
);

export const {showNotificationMessage,clearNotification}=AuthSlice.actions;
export default AuthSlice.reducer;