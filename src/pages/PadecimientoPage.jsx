import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { padecimientosLoadAsync } from "../redux/reducers/padecimientos/padecimientos.thunks";

const PadecimientoPage = () => {
    const dispatch = useDispatch();
    const {isLoading,padecimientos,errorMessage}=useSelector((state)=>state.padecimientos);

    useEffect(()=>{
        dispatch(padecimientosLoadAsync());
    },[]);

    return (
        <div>
            <h1>Lista Padecimientos</h1>
            {isLoading && <h1>cargando...</h1> }
            {errorMessage && <h1>{errorMessage}</h1> }
            {padecimientos && padecimientos.map(padecimientos => <p>{padecimientos.nombrePadecimiento + " " + padecimientos.tratamiento}</p>) }
        </div>
    )
}

export default PadecimientoPage;

