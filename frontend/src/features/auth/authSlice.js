import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { signupUser, signOutUser, signinUser } from './authService'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const register = createAsyncThunk('auth/signup', async (user, thunkAPI) => {

    try {
        const response = await signupUser(user)
        return response
    } catch (error) {
        
        const message = (error.response && error.response.data && error.response.data.message) 
                        || error.message || error.toString()
        
        return thunkAPI.rejectWithValue(message)
    }
})

export const signin = createAsyncThunk('auth/signin', async (user, thunkAPI) => {

    try {
        const response = await signinUser(user)
        return response
    } catch (error) {
        
        const message = (error.response && error.response.data && error.response.data.message) 
                        || error.message || error.toString()
        
        return thunkAPI.rejectWithValue(message)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        reset: state => {
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
            state.message = ''
        }

    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, state => {
                    state.isLoading = true
                })
               .addCase(register.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.user = action.payload
               })
               .addCase(register.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                    state.user = null
               })
               .addCase(signout.fulfilled, state => {
                    state.user = null
               })
               .addCase(signin.pending, state => {
                    state.isLoading = true
                })
                .addCase(signin.fulfilled, (state, action) => {
                        state.isLoading = false
                        state.isSuccess = true
                        state.user = action.payload
                })
                .addCase(signin.rejected, (state, action) => {
                        state.isLoading = false
                        state.isError = true
                        state.message = action.payload
                        state.user = null
                })
    }
})

export const signout = createAsyncThunk('auth/signout', async () => {
    await signOutUser()
})

export const { reset } = authSlice.actions
export default authSlice.reducer