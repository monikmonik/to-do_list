import React from 'react';
import Task from './Task';

const TaskList = () => {
    return ( 
        <div className="singleTask">
            <h2>Lista zadań</h2>
            <Task/>
            <Task/>
        </div>
     );
}
 
export default TaskList;