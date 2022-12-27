/**
 * ! 1. Este componente tendrá todos los "metodos"
 * !  2. Solo podemos tener un useEffect dentro de un componente
 */

import React, {useEffect} from 'react';

const AllCycles = () => {
    
    useEffect(() => {
        console.log("Componente creado")

        const intervalID = setInterval( () => {
            console.log('actualizacion del componente')
        }, 100)

        return () => {
            console.log("Componente va a desaparecer")
            clearInterval(intervalID);
        };
    }, []);
    
    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
