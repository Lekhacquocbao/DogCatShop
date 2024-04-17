import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './slide/counterSlide'

export const Store = configureStore({
    reducer:{
        counter : counterReducer
    },
})