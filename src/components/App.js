import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask'
import TasksList from './TasksList'

class App extends Component {
  idCounter = 0;
  state = {  
    tasks:[]
  }

  deleteTask = (id) => {
    const tasks =  [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    console.log(tasks);
    this.setState({
      tasks
    })
  }

  confirmTask = (id) => {
    const tasks =  [...this.state.tasks];
    tasks.forEach(task => {
      if(task.id === id){
          task.active = false;
          task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (title, description, date, group, important) => {
    const task = {
      id: this.idCounter, 
      title,
      description,
      date,
      finishDate: null, 
      important,
      group, 
      active: true
    }
    this.idCounter++;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }

  render() { 
    return ( 
      <div className="App">
        <div className="addTask">
        <AddTask add={this.addTask}/>
        </div>
        <div className="tasksListArea">
        <TasksList tasks={this.state.tasks} delete={this.deleteTask} confirm={this.confirmTask}/>
        </div>
      </div>
     );
  }
}
 
export default App;


