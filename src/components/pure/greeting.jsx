
/**  COMPONENTE TIPO CLASE */

/**
 * ? rcc nos ofrece diferentes opciones para crear un componente jsx
 * 
 * ? Un documento JSX es para un componente de clase o de funcion... y tiene siempre la misma estructura

* ? Más adelante veremos como extender esto y usar estilos, etc. No hará falta que el código del div lo pongamos entre comillas... 
 */


/**
 * ! la clase GREETING extiende la clase COMPONENT y está necesita un render... renderizar y devolver un objeto con codigo HTML, todo contenido en un div. No podemos devolver dos divs
 */

/**
 * Hay dos tipos de componentes: 
 *      1. Componentes tipo clase
 *      2. Componentes tipo funcion
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * ! La clase o componente debe ir en Mayuscula la primera letra
 */
class Greeting extends Component {
    /** Pasamos en props los valores que queramos... si el valor lo añadimos, debe ser con this.state = { atributo: valor,...} */
    myAge = 29;
    
    constructor(props){
        super(props);
        this.state = {
            age: this.myAge
        }
    }
    render() {
        return (
            <div>
                <h1> 
                    ¡Hola {this.props.name}! 
                </h1>
                <h2> Tu edad es: {this.state.age} </h2>
                <button onClick={this.birthday}> 
                    Cumplir años
                </button>
            </div>
        );
    }


    /**
     * Lo que hace esto es modificar la instancia del componente (vista),
     * actualiza el state inicial
     */
    birthday = () => {
        /** 
         * ! Tenemos que hacer el setState para generar un nuevo estado y regenerar la VISTA, sino no cambiará 
         * Si por ejemplo 
         * ? Si por ejemplo, la funcion es myAge++; cambiará el valor de myAge, pero la vista no se actualizará */
        this.setState( (prevState) => (
            {
                age: prevState.age +1
            }
        ))
    }
}

/**
 * propType son el contenido que importamos para la clase GREETING de clases superiores
 */
Greeting.propTypes = {
    /** 
     * ! Estamos indicando que la propType "name" dins de "Greeting" es de tipo string
     *  */ 
    name: PropTypes.string,
};


export default Greeting;


