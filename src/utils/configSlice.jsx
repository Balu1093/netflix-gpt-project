import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
        lang:"en",
        navBar:false,
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.lang = action.payload
        },
        toggleNavBar:(state,action)=>{
            state.navBar = !state.navBar
        }
    }
})

export default configSlice.reducer
export const {changeLanguage,toggleNavBar}=configSlice.actions