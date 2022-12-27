/**  COMPONENTE TIPO FUNCION 
 * ? ESTA ES LA VERDADERA POTENCIA DE REACT 
 *  ! Para iniciar un componente funcion, escribimos rfc y nos dará las opciones
 * ! La opcion que escogemos es rfcp
 * */

import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingsF = (props) => {

    /** Breve introduccion a useState (hook) que renderiza un componente */
    /** 
     * const [variable, metodo para actualizarlo] = useState(valor inicial) 
     */
    const [age,setAge] = useState(29);

    
    const birthday = () => {
        //Actualizamos el state
        setAge(age+1)
    }
    
    return (
        <div>
                <h1> 
                    ¡Hola {props.name} desde componente funcion! 
                </h1>
                <h2> Tu edad es: {age} </h2>
                <button onClick={birthday}> 
                    Cumplir años
                </button>
            </div>
    );
};


GreetingsF.propTypes = {
    name: PropTypes.string
};


export default GreetingsF;
