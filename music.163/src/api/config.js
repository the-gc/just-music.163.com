import axios from 'axios'
import { access } from 'fs';

export const baseUrl = 'http://localhost:3000';

const axiosInstance = axios.create({
    baseURL: baseUrl
});

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, "网络错误")
    }
);

export {
    axiosInstance
}