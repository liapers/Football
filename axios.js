import axios from 'axios'
import qs from 'qs'

export const baseApiUrl = import.meta.env.VITE_API_URL

axios.defaults.baseURL = baseApiUrl
axios.defaults.paramsSerializer = (params) => {
    return qs.stringify(params, { arrayFormat: 'repeat' })
}

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Authorization'] = import.meta.env.VITE_API_KEY

export default axios