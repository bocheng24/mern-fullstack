import axios from "axios";

const BASE_URL = 'http://localhost:4500/api'
const API_URL = '/goals/'
// const API_URL = '/api/goals'

const createAuthAxios =  token => {
    const authAxios = axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return authAxios
}

export const getGoals = async token => {
    
    const authAxios = createAuthAxios(token)
    const response = await authAxios.get(API_URL)

    return response.data
}

export const postGoal = async (goal, token) => {

    const authAxios = createAuthAxios(token) 
    const response = await authAxios.post(API_URL, { text: goal })

    return response.data
}

export const deleteGoal = async (id, token) => {
    const authAxios = createAuthAxios(token) 
    const response = await authAxios.delete(API_URL + id)

    return response.data
}
