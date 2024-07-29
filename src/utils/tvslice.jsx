import { createSlice } from "@reduxjs/toolkit";

const tvslice =createSlice({
    name:"tv",
    initialState:{
    nowPlayingTv:[],
    tvTrailer:null,
    tvDetails:null,
    },
    reducers:{
    addNowPlayingTv:(state,action)=>{
        state.nowPlayingTv = action.payload
    },
    addTvTrailer:(state,action)=>{
        state.tvTrailer = action.payload
    },
    addTvDetails:(state,action)=>{
        state.tvDetails = action.payload
    }
    }
})

export default tvslice.reducer;
export const{addNowPlayingTv,addTvTrailer,addTvDetails}=tvslice.actions;