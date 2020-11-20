import React from 'react';
import './TasksList.css';
import Task from './Task';

const TasksList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} confirm={props.confirm}/>);
    const unActiveTask = props.tasks.filter(task => !task.active).map(task => <Task key={task.id} task={task} delete={props.delete} confirm={props.confirm}/>);
    
    return ( 
        <>
            <div className="tasksList">
                <h2>Lista zadań:</h2>
                {activeTasks.length > 0 ? activeTasks : <p>Obecnie nie masz nic zaplanowanego.</p>} 
            </div>
            <div className="finishedTasksList">
                <h3>Ostatnio wykonane (0)</h3>
                {unActiveTask}  
        </div>
        </>
     );
}
 
export default TasksList;