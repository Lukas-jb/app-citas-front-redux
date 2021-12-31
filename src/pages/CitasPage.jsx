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
            {isLoading && <h1>cargando...</h1> }
            {errorMessage && <h1>{errorMessage}</h1> }
            {citas && citas.map(citas =><p>{citas.nombrePaciente}</p>) }
            {citas && citas.map(citas =><p>{citas.apellidoPaciente}</p>) }
        </div>
    )
}

export default CitasPage;