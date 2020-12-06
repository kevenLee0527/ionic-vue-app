import axios from 'axios'
let baseUrl = process.env.VUE_APP_BASE_URL;
import { Toast } from 'vant'
let instance = axios.create({
    baseURL: baseUrl
})
instance.interceptors.request.use((config) => {
    let obj = {
        requestType: 'service',
        serviceID: '02c40d15801147648c8563afca442bd7',
        secretKey: 'cc602188308c5b5a5a08be44d6b1313b'
    }
    config.headers=obj
    return config
}, (error) => {
    Promise.reject(error)
})
instance.interceptors.response.use((res) => {
    // return res.data;
    console.log(res)
    const code = res.data.code
    if (code == 401) {
        Toast(res.data.msg)
    } else if (code == 403) {
        Toast(res.data.msg)
    } else if (code == 404) {
        Toast(res.data.msg)
    } else if (code == 500) {
        Toast(res.data.msg)
    } else if (code == 200) {
        return res.data
    }
}, (error) => {
    return Promise.reject(error)
})

export default instance