import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { Classes } from '../../type/index'

interface DataStore {
  classes: Classes[]
}

const initialState: DataStore = {
  classes: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    loadClass(state, { payload }: PayloadAction<Classes[]>) {
      state.classes = payload
    },
  },
})

export const dataSelector = (state: RootState) => state.data
export default dataSlice.reducer
