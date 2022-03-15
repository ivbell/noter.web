import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import userReducer from './reducers/UserSlice'
import noteReducer from './reducers/NoteSlice'
import dataReducer from './reducers/DataSlice'

export const rootReducer = combineReducers({
  user: userReducer,
  note: noteReducer,
  data: dataReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
