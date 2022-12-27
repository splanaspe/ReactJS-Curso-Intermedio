/** 
 *  Ejemplo de uso de metodo componentDidUpdate de clase y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {
    
    componentDidUpdate(){
        console.log("Comportamiento cuando el componente recibe nuevos props o cambia en su estado privado");
    }
    
    render() {
        return (
            <div>
                <h1> DidUpdate</h1>
            </div>
        );
    }
}

import React from 'react';

export const DidUpdateHook = () => {
    
    useEffect(() => {
        console.log("Comportamiento cuando el componente recibe nuevos props o cambia en su estado privado")
    }); 
    // Ahora no pondemos corchetes, significa que siempre se va a ejectuar, se ejecuta todas las veces

    return (
        <div>
            <h1> DidUpdate</h1>
        </div>
    );
}



