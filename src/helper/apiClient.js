import axios from 'axios';

const apiClient = () => {

    const axiosInstance = axios.create({
        baseURL: "https://app-citas-salud.herokuapp.com/",
        reponseType: "json",
    });
    
    return axiosInstance;
};

export default apiClient;