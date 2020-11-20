import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask'
import TasksList from './TasksList'

class App extends Component {
  state = {  
    tasks:[
      {id:1, text: 'Posprzątać w domu', date: '2020.11.21',finishDate: null, important: true, type: 'private', active: true},
      {id:2, text: 'Zrobic zakupy', date: '2020.11.18',finishDate: null, important: false, type: 'private', active: true},
      {id:3, text: 'Zrobić aplikację to do', date: '2020.11.25',finishDate: null, important: true, type: 'work', active: true},
      {id:4, text: 'Nauczyć się Angular', date: '2020.12.27',finishDate: null, important: false, type: 'work', active: true},
    ]
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

  render() { 
    return ( 
      <div className="App">
        <div className="addTask">
        <AddTask/>
        </div>
        <div className="tasksList">
        <TasksList tasks={this.state.tasks} delete={this.deleteTask} confirm={this.confirmTask}/>
        </div>
      </div>
     );
  }
}
 
export default App;


