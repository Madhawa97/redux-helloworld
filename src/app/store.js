import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import postReducer from '../features/post/postSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer, // in the store we have counter data, coming from counter reducer
    post: postReducer,
  },
})