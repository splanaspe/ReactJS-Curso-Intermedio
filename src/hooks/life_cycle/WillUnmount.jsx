/**
 * Controlar cuando el componente va a desaparecer... ejemplo del metodo componentWillUnmount para clase  y ejemplo de hooks para componente funcional
 */

import React, { Component } from 'react';

export class WillUnmount extends Component {
    
    componentWillUnmount(){
        console.log("Comportamiento antes de que el componente desaparezca")
    }
    
    render() {
        return (
            <div>
                <h1> Component WillUnmount</h1>
            </div>
        );
    }
}

export const WillUnmount = () => {
    
    useEffect(() => {
        //Aqui no ponemos nada
        return () => {
            // Antes de desaparecer el componente, sucedera lo que hay aqui dentro
            console.log("Comportamiento antes de que el componente desaparezca")
        };
    }, []); //Indicamos [] para que se ejecute una sola vez
    
    return (
        <div>
            <h1> Component WillUnmount</h1>
        </div>
    );
}

