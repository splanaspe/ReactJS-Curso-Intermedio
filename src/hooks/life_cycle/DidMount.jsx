/** 
 * ? Ejemplo de uso del metodo de ciclo de vida de componente clase
 * ? Ejemplo de uso del hook de ciclo de vida de componente funcion
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {
    
    componentDidMount(){
        console.log("Comportamiento antes de que el componente se renderize (sea añadido al DOM")
    }
    
    render() {
        return (
            <div> 
                <h1> DidMount</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {
    
    useEffect( () => {
        console.log("Comportamiento antes de que el componente se renderize (sea añadido al DOM")
    }, [])

    return (
        <div> 
            <h1> DidMount</h1>
        </div>
    );
}


