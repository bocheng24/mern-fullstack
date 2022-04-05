import axios from "axios";

const BASE_URL = 'http://localhost:4500/api'
const API_URL = '/goals/'
// const API_URL = '/api/goals'


export const postGoal = async (goal, token) => {

    const authAxios = axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    
    const response = await authAxios.post(API_URL, {text: goal})

    return response.data
}

