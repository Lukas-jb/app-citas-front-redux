import { Link } from "react-router-dom";
import notfound from "../../src/media/notfound.jpeg";
import Home from "./Home";
import "bootswatch/dist/sandstone/bootstrap.min.css";

const NotFound = () => {

    return(
        <div>
            <h3 className="text-center mt-5 mb-4">
                La página que buscabas no se encuentra disponible
            </h3>
            <img src={notfound} alt="Imagen de salud" width={500} height={300} />
            <Link 
            to={`/`}
            className="img-home mx-auto d-block text-info h3 m-5"
            alt="Página no encontrada"
            >Volver
            </Link>
        </div>
    )

}

export default NotFound;