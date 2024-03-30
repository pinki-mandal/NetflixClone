

import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingmovies: null,
        popularmovie:null,
        topratedmovies:null,
        upcoming:null,
        toggle:false,
        trailermovie:null,
        open:false,
        id:""
    
        
    },
    reducers: {
        getPlayingmovies: (state, action) => {
            state.nowPlayingmovies = action.payload;
        },
        getPopuralmovies:(state,action)=>{
            state.popularmovie=action.payload
        },
        getTopratedmovies:(state,action)=>{
            state.topratedmovies=action.payload
        },
        getUpComing:(state,action)=>{
            state.upcoming=action.payload
        },
        setToggle:(state)=>{
            state.toggle=!state.toggle
        },
        getTrailermovies:(state,action)=>{
            state.trailermovie = action.payload

        },
        setOpen:(state,action)=>{
            state.open = action.payload
        },
        getId:(state,action)=>{
            state.id = action.payload
        }

    }
});

export const { getPlayingmovies ,getPopuralmovies,getTopratedmovies,getUpComing,setToggle,getTrailermovies,setOpen,getId} = movieSlice.actions;
export default movieSlice.reducer;
