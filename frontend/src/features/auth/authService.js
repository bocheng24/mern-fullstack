import axios from 'axios'

const API_URL = '/api/users/'

export const signupUser = async userData => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

export const signinUser = async userData => {
    const response = await axios.post(API_URL + 'signin', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

export const signOutUser = () => {
    localStorage.removeItem('user')
}
