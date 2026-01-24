import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const api = axios.create({
    baseURL: 'http://10.10.112.167:4000/api'
});

// додавання токен до кожного запиту
api.interceptors.request.use(async config => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}
)


api.interceptors.response.use(
    response => response,
    error => {
        console.log(error);
        return Promise.reject(error.response)
    }
)