import apiClient from "../helper/apiClient";

class CitasService {

    getAllCitasReactivas = () => apiClient().get("/citasReactivas")

}

export default  new CitasService();