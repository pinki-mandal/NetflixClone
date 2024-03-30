import {configureStore} from '@reduxjs/toolkit'
import movieReducer from './movieSlice'

import userReducer from './userSlice'
import searchSlice from './searchSlice'
const Store = configureStore({
    reducer:{
        app:userReducer,
        movie:movieReducer,
        searchMovie:searchSlice
       
        
    }
})
export default Store