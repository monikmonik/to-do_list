import React from 'react';
import './TasksList.css';
import Task from './Task';
import UnActiveTask from './UnActiveTask'

const TasksList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} confirm={props.confirm}/>);
    const unActive = props.tasks.filter(task => !task.active);
    const unActiveTasks = unActive.map(task => <UnActiveTask key={task.id} task={task} delete={props.delete} confirm={props.confirm}/>);

    const hendleTitleunActiveTasks = () => {
        if(unActiveTasks.length === 0){
            return null
        }else if(unActiveTasks.length === 1){
            return `Ostatnio wykonane zadanie:`
        }else if(unActiveTasks.length < 6){
            return `${unActiveTasks.length} ostatnio wykonane zadania:` 
        }else if(unActiveTasks.length >= 6){
            return `6 ostanio wykonanych zadań:`
        }
    }
    
    return ( 
        <>
            <div className="tasksList">
                <h2>Lista zadań:</h2>
                {activeTasks.length > 0 ? activeTasks : <p>Obecnie nie masz nic zaplanowanego.</p>} 
            </div>
            <div className="finishedTasksList">
                 <h3>{hendleTitleunActiveTasks()}</h3>
                {unActiveTasks.length > 0 && unActiveTasks.slice(0,6)}  
        </div>
        </>
     );
}
 
export default TasksList;