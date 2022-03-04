import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import userReducer from './reducers/UserSlice'
import noteReducer from './reducers/NoteSlice'

export const rootReducer = combineReducers({
  user: userReducer,
  note: noteReducer,
})

export const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
