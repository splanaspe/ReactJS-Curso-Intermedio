import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

// ? Importamos la hoja de estilos de task.scss sino no se aplicara
import '../../syles/task.css'
import { LEVELS } from '../../models/levels.enum';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

const TaskComponent = ({task, complete, trash}) => {
    
    useEffect(() => {
        console.log("Tarea creada");
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        }
    }, [task]);

    /**
     * Function that returns a badge depending on the level of the task
     */
    function taskLevelBadge (){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'> 
                        <span className='badge bg-primary'> 
                            {task.level}
                        </span>
                    </h6>
                )
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'> 
                        <span className='badge bg-warning'> 
                            {task.level}
                        </span>
                    </h6>
                ) 
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'> 
                        <span className='badge bg-danger'> 
                            {task.level}
                        </span>
                    </h6>
                )   
            default:
                break;
        }    
    }

    /**
     * 
    *  Function that returns
     */
    function taskIconCompleted(){
        if(task.completed){
            return (<i  onClick={() => complete(task)}className='bi-toggle-on task-action' style={ {color:'green', fontWeight:'bold'} }> </i>)
        } else {
            return (<i onClick={() => complete(task)}className='bi-toggle-off task-action' style={ {color:'grey', fontWeight:'bold'} }> </i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th> 
                <span className='ms-2'> {task.name} </span>
            </th>
            <td className='align-middle ms-2'> 
                <span> {task.description} </span>
            </td>
            <td className='align-middle ms-2'> 
                {taskLevelBadge()}
            </td>
            <td className='align-middle ms-2'> 
                {taskIconCompleted()}
            </td>
            <td className='align-middle ms-2'> 
                <i className='bi-trash task-action' 
                    onClick={ () => trash(task)}
                    style={ {color: 'tomato', fontSize:'large'}}> </i> 
            </td>
        </tr>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    trash: PropTypes.func.isRequired
};


export default TaskComponent;
