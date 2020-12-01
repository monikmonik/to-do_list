import React from 'react';
import './UnActiveTask.css'

const UnActiveTask = (props) => {

    const {title, date, finishDate} = props.task;
    const finishTime = new Date(finishDate).toLocaleString();

    return ( 
    <div className="unActiveTask">
       <p><span>{date} - </span> {title}</p>
       <p>Wykonano: <span>{finishTime}</span></p>
    </div>
     );
}
 
export default UnActiveTask;