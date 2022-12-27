/**
 * Este ejercicio consta de transformar un componente de clase a un componente funcional, añadiendo los hooks para controlar la vida
 */

import React, {useState,useEffect} from 'react';

const Ejercicio2 = () => {
    
    const initialState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Salvador',
        apellidos: ' Planas Peñalver'
    }

    const [prevState, setState] = useState(initialState);
    
    useEffect(() => {

        const timerID = setInterval ( () => 
            tick(), 1000
        );

        return () => {
            clearInterval (timerID)
        };
    }, []);

    function tick(){
        setState((prevState) => {
            let edad = prevState.edad +1;
            return {
                ...prevState,
                fecha: new Date(),
                edad
            }
        });
    };

    return (
        <div>
            <h2>
            Hora Actual: {prevState.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {prevState.nombre}
                {prevState.apellidos}
            </h3>
            <h1>
                Edad: {prevState.edad}
            </h1>
        </div>
    );
}

export default Ejercicio2;
