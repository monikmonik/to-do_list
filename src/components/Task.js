import './Task.css';
import React from 'react';

const Task = (props) => {
    const {id, title, date, important, description, visibleDescription} = props.task;
    return ( 
            <div className="singleTask">
              <div className="task">
                <p>{important && '!! '}<span>{date} - </span> {title}</p>
                <button className="confirm" onClick={() => props.confirm(id)}>v</button>
                <button className="delete" onClick={() => props.delete(id)}>x</button>
                <button className="description" onClick={() => props.show(id)}>-</button>
              </div>
              {visibleDescription && <div className="description"> {description}</div>} 
            </div>
            
     );
}
 
export default Task;