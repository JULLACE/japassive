import axios from 'axios'
const baseURL = 'http://localhost:3001'

const getWords = () => {
    const request = axios.get(`${baseURL}/words`)
    return request.then(response => response.data)
}

export default {
    getWords,
}