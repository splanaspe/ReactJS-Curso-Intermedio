/**
 * Ejemplo HOOKS: 
 *  - useState()
 *  - useContext()
 */

import React, {useState, useContext} from 'react';


/**
 * 
 * @returns Componente 1
 * dispone de un contexto que va a tener un valor que recibe dl padre
 * 
 * useContext servirá para enviar informacion sin usar los props
 */

const miContexto = React.createContext(null);


const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1> 
                El token es: {state.token}
            </h1>
            {/* Pintamos compoenente2*/}
            <Componente2> </Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2> 
                La sesión es: {state.sesion}
            </h2>  
        </div>
    );
}

export default function Ejemplo3() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    // Creamos el estado de este componente
    const [sesionData, setsesionData] = useState(estadoInicial);

    function actualizarSesion(){
        setsesionData(
            {
                token: 'safdDSFADSF',
                sesion: sesionData.sesion +1
            }
        )
    }

    return (
        <div>

            {/* Con el Provider, estamos proveiendo a todo lo que este dentro el contexto "miContexto*, indicandole que lo va a usar con useContext(miContexto */}

            <miContexto.Provider value={sesionData}> 
                {/* Todo lo que esté aquí dentro puede leer los datos de sesionData */}
                {/* Además, si actualiza, los componentes de aquí, también lo actualizan*/}
                <h1> *** Componente con contexto *** </h1>
                <Componente1> </Componente1>

                <button onClick={actualizarSesion}> Actualizar Sesion</button>

            </miContexto.Provider>
        </div>
    )
}

