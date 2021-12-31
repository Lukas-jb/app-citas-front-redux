import apiClient from "../helper/apiClient";

class PadecimientosService {

    getAllPadecimientos = () => apiClient().get("/padecimientos");

}

export default  new PadecimientosService();