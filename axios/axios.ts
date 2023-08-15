const BASE_URL = "https://hp-api.onrender.com/api";
import axios, { AxiosInstance } from 'axios';

const axiosOptions ={
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "Application/json",
    }

}

//normal axios request
export const api: AxiosInstance = axios.create(axiosOptions);