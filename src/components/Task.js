import './Task.css';
import React from 'react';

import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

const Task = (props) => {
  const {id, title, date, important, description, visibleDescription} = props.task;
  return ( 
    <div className="singleTask">
      <div className="task">
        <p><button className="important">{important ? <StarIcon style={{ color: 'gold', }} />: <StarBorderOutlinedIcon style={{ opacity: '0.5', }} />}</button><span>{date} - </span> {title}</p>
        <button className="confirm" onClick={() => props.confirm(id)}><CheckIcon /></button>
        <button className="delete" onClick={() => props.delete(id)}><ClearIcon /></button>
        <button className="description" onClick={() => props.show(id)}><ViewHeadlineIcon/></button>
      </div>
      {visibleDescription && <div className="descriptionList"> {description}</div>} 
    </div>
  );
}
 
export default Task;