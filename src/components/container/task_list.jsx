import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import {Task} from '../../models/task.class'
import TaskComponent from '../pure/task';

// Importamos la hoja de estilos de task.css

import '../../syles/task.css'
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Tasca 1',"Pelar pomes",false, LEVELS.BLOCKING);
    const defaultTask2 = new Task('Tasca 2',"2a tasca: trencar els plats",true, LEVELS.URGENT);
    const defaultTask3 = new Task('Tasca 3',"3a tasca: menjar galetes",true, LEVELS.NORMAL);


    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1,defaultTask2,defaultTask3])
    const [loading,setLoading]= useState(true)

    //Control ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false); //indicamos que ya no carga
        return () => {
            console.log("TaskListcomponent is going to unmount")
        };
    }, [tasks]);

    function completeTask(task){
        console.log('Complete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        // We update the state of the component with the new list and will
        //update the iteration of the tasks in order to show the task updated
        setTasks(tempTasks);
    }

    function deleteTask(task){
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        // We update the state of the component with the new list and will
        //update the iteration of the tasks in order to show the task updated
        setTasks(tempTasks); 
    }

    function addTask(task){
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks); 
    }



    return (
        <div>
            <div className='col-12'> 
                <div className='card'>
                    {/* Card Header */}
                    <div className='card-header p-3'> 
                        <h5> 
                            Your Tasks: 
                        </h5>
                    </div>
                    {/* Card body */}
                    <div className='card-body' data-mbd-perfect-scrollbar='true' 
                    style={ {position: 'relative', minHeight: '400px', height: 'auto'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'> Title </th>
                                    <th scope='col'> Description </th>
                                    <th scope='col'> Priority </th>
                                    <th scope='col'> Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tasks.map( (task,index) => {
                                        return (
                                            <TaskComponent 
                                                key={index} 
                                                task={task}
                                                complete={completeTask}
                                                trash={deleteTask}
                                            >
                                            </TaskComponent>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <hr></hr>
                    <TaskForm add={addTask}> </TaskForm>
                </div>
            </div>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
