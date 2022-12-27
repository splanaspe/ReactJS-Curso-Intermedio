import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting'
import GreetingsF from './components/pure/greetingsF';
import TaskListComponent from './components/container/task_list';
import Ej1UseState from './hooks/Ej1UseState';
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo3 from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Ejercicio2 from './components/pure/Ejercicio2';
import Father from './components/container/Father';
import OptionalRender from './components/pure/optionalRender';

function App() {
    return (
        <div className="App">
        {/*<header className="App-header">*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*}
        {/* comentario: Components propio Greeting.jsx */}
        {/*<Greeting name="Salvador"> </Greeting>*/}
        {/*<GreetingsF name="Salvador"> </GreetingsF>*/}
        
        {/*<Ej1UseState> </Ej1UseState>*/}
        {/*<Ejemplo2> </Ejemplo2>*/}
        {/* <Ejemplo3> </Ejemplo3> */}
        {/*
        <Ejemplo4 name="Salvador" edad="25"> 
			// Todo lo que hay aquí dentro es tratado como props.children 
			<h3> 
				Este es el contenido de props.children
			</h3> 
        </Ejemplo4> 
        */}

        {/*<GreetingStyled name="Salvador"> </GreetingStyled>*/}
        {/* FUNCIONA: <Ejercicio2> </Ejercicio2> */}
        {/*</header> */}


        {/* Ejemplos de renderizado condicional */}
        <OptionalRender> </OptionalRender>




        {/* <TaskListComponent></TaskListComponent> */}
        {/*<Father> </Father>*/}

        </div>
    );
}

export default App;
