import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import './taskForm.css';

const TaskForm = ({add}) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);
    
    function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value    
        )
        add(newTask);
    }

    return (
        <form onSubmit={addTask} 
            className='d-flex justify-content-center align-items-center mb-4' style = { {fontSize: '0.8rem'} } >
            <div className = 'form-outline flex-fill'> 
                <input 
                    ref={nameRef} 
                    id='inputName'
                    type='text'
                    className = 'form-control form-control-lg m-2 input-style'
                    required
                    autoFocus
                    placeholder='Nombre de la tarea'
                />
                <input
                    ref={descriptionRef} 
                    id='inputDescription'
                    type='text'
                    className = 'form-control form-control-lg m-2 input-style'
                    required
                    placeholder='Descripción'
                />
                <label htmlFor ='selectLevel' className = 'sr-only mt-2' > Priority </label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'> 
                    <option value={LEVELS.NORMAL}> Normal </option>
                    <option value={LEVELS.BLOCKING}> Blocking </option>
                    <option value={LEVELS.URGENT}> Urgent </option>
                </select>
            </div>
            <button type='submit' className='btn btn-success btn-lg m-2' style = { {fontSize: '0.8rem'} } > Add</button>

        </form>
    );
}

TaskForm.prototypes = { 
    add: PropTypes.func.isRequired
}

export default TaskForm;
