import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask'
import TaskList from './TaskList'
import FinishedTasksList from './FinishedTasksList'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <AddTask/>
        <TaskList/>
        <FinishedTasksList/>
      </div>
     );
  }
}
 
export default App;


