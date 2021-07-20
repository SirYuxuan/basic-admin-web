import Axios from 'axios'
import {
    baseURL
} from '@/config'

const axios = Axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
})

axios.interceptors.response.use( (response) => {
    const { data } = response
    return data
},)


export default axios