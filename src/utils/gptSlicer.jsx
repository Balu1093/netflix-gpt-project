import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:null,
        movieName:null,
        movieResults:null,
    },
    reducers:{
        toggleGptView:(state)=>{
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResults:(state,aciton)=>{
            const{movieName,movieResults} = aciton.payload
            state.movieName =movieName;
            state.movieResults = movieResults;
        }
    }
})

export default gptSlice.reducer;
export const{toggleGptView,addGptMovieResults}=gptSlice.actions;