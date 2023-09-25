import { createSlice } from "@reduxjs/toolkit";

const MailDetailsSlice=createSlice(
    {
        name:'Mail',
        initialState:{
            mailDetails:{}
        },
        reducers:{
            addmailDetails:(state,action)=>{
                state.mailDetails=action.payload;
                console.log("m",state.mailDetails)
            }
        }
    }
);
export const {addmailDetails} = MailDetailsSlice.actions;
export default MailDetailsSlice.reducer;