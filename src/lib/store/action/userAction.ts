import axios from 'axios'
import { AppDispatch } from '..'
import { userSlice } from '../reducers/UserSlice'

export type UserIdResponseToken = {
    _id: string
    active: false
    role: 'user' | 'admin'
    email: string
    login: string
    createdAt: string
    updatedAt: string
}

export const userAuthToken =
    (token: string) => async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get<UserIdResponseToken>(
                `${import.meta.env.VITE_SERVER}/auth`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            dispatch(userSlice.actions.isAuthSuccess(response.data))
        } catch (error) {
            dispatch(userSlice.actions.isAuthError())
        }
    }

export const userLogout = () => (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.isLogout())
}
