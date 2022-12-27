import React, {useRef} from 'react';

const Child = ({name, send,update}) => {
    
    const messageRef = useRef ('');
    const nameRef = useRef ('');

    function pressButton(){
        const text = messageRef.current.value;
        alert(`Text in input: ${text}`)
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`);
    }

    function submitName(e){
        e.preventDefault(); // Evitamos que se ejecute el 'por defecto' que en este caso es que se recargue la pagina
        update(nameRef.current.value)
    }
    
    return (
        <div style={{backgroundColor: 'yellow', padding: '30px'}}>
            <p onMouseOver={()=> console.log("On mouse over")} > Hello {name}
            </p>
            <button onClick={()=> console.log('Button1 pressed') }> Button 1 </button>
            <button onClick={()=> pressButton()}> Button 2 </button>
            <button onClick={() => pressButtonParams('Hello')}> Button 3 </button>
            <input 
                placeholder='Text to your father' 
                onFocus={ () => console.log("input focus")} 
                onChange={ (e) => console.log(e.target.value)}    
                onCopy ={ (e) => { 
                    e.preventDefault();
                    alert('No puedes copiar') 
                    
                    }}
                onPaste = { (e)=> {
                    e.preventDefault();
                    alert('Debes escribir, no puedes pegar')
                }}
                ref = {messageRef}
                />
                {/* Con esto haremos que con un clic en un componente hijo se ejecute una funcion del componente padre y le envie la informacion que hemos escrito*/}
                <button onClick={()=> send(messageRef.current.value)}> 
                    Send Message 
                </button>
                
                
                <div style={{marginTop: '20px'}}>
                    <form onSubmit={submitName}>
                        <input placeholder= "New Name" ref={nameRef} />
                        <button type='submit'> Update Name </button>
                    </form>
                </div>
        </div>
    );
}

export default Child;
