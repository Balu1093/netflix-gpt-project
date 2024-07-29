import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import gptSlice from '../utils/gptSlicer'
import configSlice from './configSlice'
import tvSlice from './tvslice'


const appStore =configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        gpt: gptSlice,
        config:configSlice,
        tv:tvSlice,
    }
});

export default appStore;