import React from 'react';
import './UnActiveTask.css'

const UnActiveTask = (props) => {

    const {id,title, date, finishDate} = props.task;
    const finishTime = new Date(finishDate).toLocaleString();

    return ( 
    <div className="unActiveTask">
       <p><span>{title}</span> ({date})</p>
       <p>Wykonano: <span>{finishTime}</span></p>
       <button className="delete" onClick={() => props.delete(id)}>x</button>
    </div>
     );
}
 
export default UnActiveTask;