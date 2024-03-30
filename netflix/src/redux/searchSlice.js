import { createSlice } from '@reduxjs/toolkit'
// import React from 'react'

const SearchSlice = createSlice({
  name:"search",
  initialState:{
    movieName:null,
    searchedMovie:null
  },
  reducers:{
    setSearchDetailsMovies:(state,action)=>{
      const {searchMovie,movies}=action.payload
      state.movieName=searchMovie
      state.searchedMovie=movies

    },
    // setMoviename:(state,action)=>{
    //   state.movieName = action.payload
    // },
    // setSearchmovie:(state,action)=>{
    //   state.searchedMovie = action.payload
    // }
  }
})

export const {setSearchDetailsMovies} = SearchSlice.actions
export default SearchSlice.reducer;