/**
 * Ejemplo para entender el uso de props.children, alternativa al hook de useContext
 */

import React from 'react';

export const Ejemplo4 = (props) => {
    return (
        <div>
            <h1> 
                *** Ejemplo de CHILDREN PROPS *** 
            </h1>
            <h2> 
                Nombre: {props.name} \\
                Edad: {props.edad}
            </h2>
            {/* props.children pintará por defecto aquello que se encuentre entre las etiquetas de apertura y cierre de este componente desde el componente de orden superior*/}
            {props.children}
        </div>
    );
}

export default Ejemplo4;
