import './Task.css';
import React from 'react';

const Task = (props) => {
    const {id, text, date, finishDate, important} = props.task;
    return ( 
            <div className="singleTask">
              <p><span>{date} - </span> {text}</p>
              <button className="confirm" onClick={() => props.confirm(id)}>v</button>
              <button className="delete" onClick={() => props.delete(id)}>x</button>
            </div>
       
     );
}
 
export default Task;