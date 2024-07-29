import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:null,
    },
    reducers:{
        toggleGptView:(state)=>{
            state.showGptSearch = !state.showGptSearch
        }
    }
})

export default gptSlice.reducer;
export const{toggleGptView}=gptSlice.actions;