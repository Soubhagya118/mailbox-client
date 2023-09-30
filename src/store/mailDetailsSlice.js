import { createSlice } from "@reduxjs/toolkit";

const MailDetailsSlice=createSlice(
    {
        name:'Mail',
        initialState:{
            mailDetails:[],
            isComposeOpen:false
        },
        reducers:{
            openComposereducer:(state,action)=>{
                state.isComposeOpen=true
            },
            closeComposereducer:(state,action)=>{
                state.isComposeOpen=false
            },
            addmailDetails:(state,action)=>{
                state.mailDetails=[...action.payload];
                console.log("m",state.mailDetails)
            }
        }
    }
);
export const {addmailDetails,openComposereducer,closeComposereducer} = MailDetailsSlice.actions;
export default MailDetailsSlice.reducer;