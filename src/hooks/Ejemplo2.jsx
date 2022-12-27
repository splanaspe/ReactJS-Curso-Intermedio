/**
 * Ejemplos de uso de:
 *  - useState()
 *  - useRef() : para identificar valores/elementos dentro de la vista
 *  - useEffect() : se usa para controlar los cambios en la vista
 */

import React, {useState,useRef,useEffect} from 'react';

const Ejemplo2 = () => {

    /** Vamos a crear dos contadores distintos cada uno en u estado diferente*/
    const [contador1,setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    /** Vamos a crear una referencia con useRef para asociar variable con elemento del DOM, HTML */
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1+1)
    }

    function incrementar2(){
        setContador2(contador2+1)
    }

    /**
     * Trabajando con useEffect
     */

    /** 
     * ? Caso 1: Ejecutar siempre un snip de codigo
     * Cada vez que haya un cambio en el estado del componente,
     * se ejecuta aquello que esté dentro del useEffect()
    
    useEffect(() => {
        console.log('Cambio en el estado del componente');
        console.log('Mostramos referencia al elemento del DOM')
        console.log(miRef)
    });
    */

    /** 
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR 1
     * Cada vez que haya un cambio en el contador 1, se ejecuta lo que diga el useEffect()
     * */

    useEffect(() => {
        console.log('Cambio en el estado del contador1')
        console.log('Mostrando referencia a elemento del DOM')
        console.log(miRef)
    },[contador1]);

    return (
        <div>
            <h1> *** Ejemplo de useState(), useRef(), useEffect() ***</h1>
            <h2> Contador 1: {contador1} </h2>
            <h2> Contador 2: {contador2} </h2>

            {/* Elemento referenciado */}
            <h4 ref={miRef}> 
                Ejemplo de elemento referenciado
            </h4>

            {/*Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}> Incrementar contador 1 </button>
                <button onClick={incrementar2}> Incrementar contador 2 </button>
            </div>
        </div>
    );
}

export default Ejemplo2;



