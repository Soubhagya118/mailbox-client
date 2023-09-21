import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const getData=createAsyncThunk('get/getData',async(arg,{rejectWithValue})=>{
    try{
    const res = await fetch('https://redux-toolkit-api-3ca2d-default-rtdb.firebaseio.com/name.json');
    const data =await res.json(); 
let dataList=[];
for(let k in data){
    dataList.push({
    id:k,
    name:data[k].name
})
}
return dataList;

    }catch(err){
        console.log("error");
    }
})

export const postData=createAsyncThunk('post/postData',async(arg,{rejectWithValue})=>{
    try{
    const res = await fetch('https://redux-toolkit-api-3ca2d-default-rtdb.firebaseio.com/name.json',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(arg)
    });
    const data =await res.json(); 
    console.log("data",data)
let dataList={};

for(let k in data){
    console.log(data[k])
    dataList={
        id:data[k],
        name:arg.name

    }
}
console.log("dataList",dataList)
return dataList;

    }catch(err){
        console.log("error");
    }
})

const nameSlice=createSlice(
    {
        name:'name',
        initialState:{
            nameList:[]
        },
      extraReducers(builder){
builder.addCase(getData.fulfilled,(state,action)=>{
    console.log("action",action.payload)
    state.nameList=action.payload;
})
.addCase(postData.fulfilled,(state,action)=>{
    console.log("action post data",state)
const dispatch=useDispatch();
dispatch(addName(action))
   
})
      },
        reducers:{
            addName:(state,action)=>{
                const findsameNameIndex= state?.nameList?.findIndex(e=>e.name==action.payload.name);

                const findsameName = state?.nameList[findsameNameIndex];
            
                if(findsameName){
                    const update ={...findsameName,quantity:2};
                    state.nameList[findsameNameIndex] =update;
                    state.nameList=state.nameList
                    
                }else{
                state.nameList.push(action.payload);
                }
            }
        }
    }
)


export const addName=nameSlice.actions;
export default nameSlice.reducer