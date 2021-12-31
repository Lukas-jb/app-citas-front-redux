import axios from 'axios';

const apiClient = () => {

    const axiosInstance = axios.create({
        baseURL: "http://localhost:8080",
        reponseType: "json",
    });
    
    return axiosInstance;
};

export default apiClient;