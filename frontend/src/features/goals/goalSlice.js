import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGoals, postGoal, deleteGoal } from "./goalService";

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const getAllGoals = createAsyncThunk('goals/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await getGoals(token)

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) 
                        || error.message || error.toString()
        
        return thunkAPI.rejectWithValue(message)
    }
})

export const createGoal = createAsyncThunk('goals/create', async (goal, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await postGoal(goal, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) 
                        || error.message || error.toString()
        
        return thunkAPI.rejectWithValue(message)
    }
})

export const removeGoal = createAsyncThunk('goals/remove', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await deleteGoal(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) 
                        || error.message || error.toString()
        
        return thunkAPI.rejectWithValue(message)
    }
})

export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    
    reducer: {
        reset: state => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(createGoal.pending, state => {
                    state.isLoading = true
                })
               .addCase(createGoal.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.goals.push(action.payload)
               })
               .addCase(createGoal.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
               })
               .addCase(getAllGoals.pending, state => {
                    state.isLoading = true
               })
               .addCase(getAllGoals.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.goals = action.payload
               })
               .addCase(getAllGoals.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
               })
               .addCase(removeGoal.pending, state => {
                    state.isLoading = true
               })
               .addCase(removeGoal.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.goals.pop(action.payload)
               })
               .addCase(removeGoal.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
               })
    }
})

export const { reset } = goalSlice.actions

export default goalSlice.reducer