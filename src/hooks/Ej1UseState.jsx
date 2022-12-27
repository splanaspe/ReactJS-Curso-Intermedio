/**
 * Ejemplo de uso del HOOK useState
 * 
 * Crear un componente de tipo funcion y acceder a su estado privado a través de un hook y, además, poder modificarlo
 * 
 * !Todos los hooks empiezan por use...
 */

import React, {useState} from 'react';

const Ej1UseState = () => {
    // Valor inicial para un contador
    const valorInicial = 0;

    const personaInicial = {
        nombre: "Salvador",
        email: "splanape1@gmail.com"
    }

    /**
     * Queremos que el valorInicial y personaInicial
     * sean parte del estado de componente para asi poder gestionar su cambio y que este sea reflejado en la vista del componente
     * 
     *  const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

    const [contador,setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */
    function incrementarContador(){
        setContador(contador+1);
    }

    function actualizarPersona(){
        setPersona(
            {
                nombre: "Pepe",
                email: "saldas@fdsd.com"
            }
        )
    }

    return (
        <div>
            <h1> *** Ejemplo de UseState***</h1>
            <h2> Contador: {contador}</h2>
            <h4> Datos de la persona: </h4>
            <h5> Nombre: {persona.nombre} </h5>
            <h5> Email: {persona.email} </h5>
            {/* Importante que los eventos no lleven el parentesis*/ }
            <button onClick={incrementarContador}> incrementarContador </button>
            <button onClick={actualizarPersona}> actualizarPersona </button>
        </div>
    );
}

export default Ej1UseState;
