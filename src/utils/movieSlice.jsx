import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies:[],
        movieTrailer:null,
        movieDetails:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.NowPlayingMovies = action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.movieTrailer= action.payload
        },
        addMovieDetails:(state,action)=>{
            state.movieDetails= action.payload
        },
    }
})

export default movieSlice.reducer;
export const{addNowPlayingMovies,addTrailerVideo,addMovieDetails}=movieSlice.actions;