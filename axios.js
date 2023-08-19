import axios from 'axios'
import qs from 'qs'

export const baseApiUrl = import.meta.env.VITE_API_URL

axios.defaults.baseURL = baseApiUrl
axios.defaults.paramsSerializer = (params) => {
    return qs.stringify(params, { arrayFormat: 'repeat' })
}

export const setToken = (token) => {
    axios.defaults.headers.common['Authorization'] = token
        ? `Token ${ token }`
        : ''
}

setToken(import.meta.env.VITE_API_TOKEN)

axios.defaults.headers.common['Content-Type'] = 'application/json'

export default axios