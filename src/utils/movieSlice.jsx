import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies:null,
        movieTrailer:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.NowPlayingMovies = action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.movieTrailer= action.payload
        },
    }
})

export default movieSlice.reducer;
export const{addNowPlayingMovies,addTrailerVideo}=movieSlice.actions;