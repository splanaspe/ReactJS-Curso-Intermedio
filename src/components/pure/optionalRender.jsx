import React, {useState} from 'react';


// Login / logout / buttons

let red = 0;
let green = 200;
let blue = 150; 

const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white', 
    fontWeight: 'bold',
    border: 'none',
}

const unLoggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold', 
    border: 'none'
}

const LoginButton = ({loginAction, propStyle}) => {
    return (
        <button style = {propStyle} onClick={loginAction}> Login </button>
    )
}


const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button style = {propStyle} onClick={logoutAction}> Logout </button>
    )
}

const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);

    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }

    // Sera un componente HTML y es el que retornará el componente
    let optionalButton; 

    {/*}
    if(access){
        optionalButton = <button onClick={updateAcces}> Logout </button>
    } else{
        optionalButton = 
    } 
    */}


    if(access){
        optionalButton = <LogoutButton propStyle = {loggedStyle} logoutAction={logoutAction}> Logout </LogoutButton>
    } else{
        optionalButton = <LoginButton propStyle = {unLoggedStyle} loginAction={loginAction}> Logout </LoginButton>
    } 


    /**
     * UNREAD MESSAGES
     */
    let addMessages = () => {
        setNMessages(nMessages+1);
    }

    return (
        <div>
            {/* Optional Button*/}
            {optionalButton}

            {/* N MEssages unread
            { nMessages > 0 && nMessages===1 && <p> You have {nMessages} new message... </p> }
            { nMessages>1 && <p> You have {nMessages} new messages... </p> }
            { nMessages == 0 &&  <p> There are no new messages </p>}
            <button onClick={addMessages}> Add New Message </button>  */}


            {/* Operador ternario */}
            {access ? (
            <div> 
            { nMessages > 0 ? 
            <p> You have {nMessages} new message{nMessages>1? 's' : ''} </p> : 
            <p> There are no messages </p>}

            <button onClick={addMessages}> {nMessages === 0 ? 'Add your first message' : 'Add new Message'}</button> </div> ) : null }


        </div>
    );
}

export default OptionalRender;
