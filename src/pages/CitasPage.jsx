import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCitasAsync } from "../redux/reducers/citas/citas.thunks";

const CitasPage = () => {
    const dispatch = useDispatch();
    const {isLoading,citas,errorMessage}=useSelector((state)=>state.citas);

    useEffect(()=>{
        dispatch(loadCitasAsync());
    },[]);

    return (
        <div>
            <h1>List Citas</h1>
            {isLoading && <h5>Cargando...</h5> }
            {errorMessage && <h1>{errorMessage}</h1> }

            <table>
                
            </table>

            {citas && citas.map(citas =><p>{citas.nombrePaciente + " " + " " + citas.apellidosPaciente + " " + citas.fechaReservaCita + " " + citas.horaReservaCita + " " + citas.nombreMedico}</p>) }
            
        </div>
    )
}

export default CitasPage;