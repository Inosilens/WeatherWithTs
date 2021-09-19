import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export interface IUser {
    name: string;
    password: any
}

export interface TinitialState {
    serverError: string | null
    loading: boolean,
    auth: boolean
}

const initialState: TinitialState = {
    serverError: null,
    loading: false,
    auth: false
}
export const authUser: any = createAsyncThunk(
    'auth/authUser',
    async (obj: IUser, {dispatch}) => {
        const response: any = await axios({
            url: 'http://localhost:3000/users',
            method: 'GET',
        })
        const mockUsers = await response.data.find((user: any) => user.name == obj.name)
        if (mockUsers) {
            localStorage.setItem("auth", "true")
            localStorage.setItem("name", mockUsers.name)
            dispatch(authSlice.actions.login())
        } else {
            dispatch(authSlice.actions.getError('Неверный логин или пароль'))
        }
    }
)
export const registerUser: any = createAsyncThunk(
    'auth/registerUser',
    async (obj: IUser, {dispatch}) => {
        const response = await axios({
                url: 'http://localhost:3000/users',
                method: 'GET',
            }
        )
        const mockUsers = await response.data.find((user: any) => user.name == obj.name)
        if (mockUsers) {
            dispatch(authSlice.actions.getError('Пользователь существует'))
        } else {
            const response = await axios({
                url: 'http://localhost:3000/users',
                method: 'POST',
                data: obj
            })
            return response.data

        }
    }
)
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            state.auth = true
        },
        logout(state) {
            state.auth = false
        },
        getError(state, action) {
            state.serverError = action.payload
        }

    },
    extraReducers: {
        [registerUser.pending]: (state, action) => {
            state.loading = true
        },
        [registerUser.fulfilled]: (state) => {
            state.loading = false
        },
        [registerUser.rejected]: (state) => {
            state.serverError = "neudacha"
        }

    }

})

export const {logout, login, getError} = authSlice.actions

export default authSlice.reducer
