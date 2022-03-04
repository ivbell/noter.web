import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { UserIdResponseToken } from '../action/userAction'

interface UserState {
  readonly id: string
  readonly active: boolean
  readonly role: string
  readonly isLoading: boolean
  readonly isAuth: boolean
}

const initialState: UserState = {
  id: '',
  active: false,
  role: '',
  isLoading: false,
  isAuth: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    isAuth(state) {
      state.isLoading = true
    },
    isAuthSuccess(state, action: PayloadAction<UserIdResponseToken>) {
      state.isLoading = false
      state.isAuth = true
      state.id = action.payload._id
      state.role = action.payload.role
    },
    isAuthError(state) {
      state.isLoading = false
    },
    isLogout(state) {
      state.id = ''
      state.isAuth = false
    },
  },
})

export const { isAuth, isAuthError, isAuthSuccess, isLogout } = userSlice.actions
export const userSelector = (state: RootState) => state.user

export default userSlice.reducer
