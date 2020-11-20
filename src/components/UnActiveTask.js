import React from 'react';
import './UnActiveTask.css'

const UnActiveTask = (props) => {

    const {id, text, date, finishDate, important} = props.task;
   

    return ( 
    <div className="unActiveTask">
       <p><span>{date} - </span> {text}</p>
       <p>Wykonano: <span>{finishDate}</span></p>
    </div>
     );
}
 
export default UnActiveTask;