import axios from "axios"
const API_URL = 'http://localhost:8000/'


const DeliveryAxiosService = axios.create({
    baseURL: API_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

export default DeliveryAxiosService




