import React from 'react';
import './TasksList.css';
import Task from './Task';
import UnActiveTask from './UnActiveTask'

const TasksList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} confirm={props.confirm}/>);
    const unActiveTasks = props.tasks.filter(task => !task.active).map(task => <UnActiveTask key={task.id} task={task} delete={props.delete} confirm={props.confirm}/>);
    
    return ( 
        <>
            <div className="tasksList">
                <h2>Lista zadań:</h2>
                {activeTasks.length > 0 ? activeTasks : <p>Obecnie nie masz nic zaplanowanego.</p>} 
            </div>
            <div className="finishedTasksList">
                <h3>Ostatnio wykonane (0)</h3>
                {unActiveTasks}  
        </div>
        </>
     );
}
 
export default TasksList;