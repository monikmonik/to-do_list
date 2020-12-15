import React from 'react';
import './TasksList.css';
import Task from './Task';
import UnActiveTask from './UnActiveTask';

const TasksList = (props) => {


    const list = () => {
        let tasks = props.tasks;
        if(props.select === 'all'){
            tasks = tasks.filter(task => task.active);   
            return tasks.map(task => <Task key={task.id} task={task} delete={props.delete} confirm={props.confirm} show={props.show}/>);
        } else if(props.select === 'personal'){
            tasks = tasks.filter(task => task.group === 'personal' && task.active);
            return tasks.map(task => <Task key={task.id} task={task} delete={props.delete} confirm={props.confirm} show={props.show}/>);
        } else if(props.select === 'work'){
            tasks = tasks.filter(task => task.group === 'work' && task.active);
            return tasks.map(task => <Task key={task.id} task={task} delete={props.delete} confirm={props.confirm} show={props.show}/>);
        }else if(props.select === 'done'){
            tasks = tasks.filter(task => !task.active);
            tasks.sort((a,b)=> b.finishDate - a.finishDate);
            return tasks.map(task => <UnActiveTask key={task.id} task={task} delete={props.delete}/>).slice(0,10);
        }
    }

    return ( 
        <div className="tasksList">
            <button className = {props.select === 'all' ? 'active': ''} onClick={()=> props.filter('all')}>Wszystkie</button>
            <button className = {props.select === 'personal' ? 'active': ''} onClick={()=> props.filter('personal')}>Osobiste</button>
            <button className = {props.select === 'work' ? 'active': ''} onClick={()=> props.filter('work')}>Zawodowe</button>
            <button className = {props.select === 'done' ? 'active': ''} onClick={()=> props.filter('done')}>Wykonane</button>
            <div className="list">{list()}</div>
        </div>
     );
}
 
export default TasksList;