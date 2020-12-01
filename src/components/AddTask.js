import React, { Component } from 'react';
import './AddTask.css'

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0,10);

    state = { 
        title:'',
        description:'',
        date: this.minDate,
        group: 'personal',
        important: false,
     }

     handleChange = (e) => {

        const name = e.target.id;
        const type = e.target.type;
        if (type === 'text' || type === 'textarea' || type === 'select-one' || type === 'date'){
            this.setState({
                [name]:e.target.value
            })
        }else if (type === 'checkbox'){
            this.setState({
                [name]:e.target.checked
            })
        }
     }

     handleClick = (e) => {
         e.preventDefault();
         const {title, description, date, group, important} = this.state;
         const add = this.props.add(title, description, date, group, important);
         if(add){
            this.setState ({
                title:'',
                description:'',
                date: this.minDate,
                group: 'personal',
                important: false,
            })
        }
     }

    render() { 
        
        let maxDate = parseInt(new Date().toISOString().slice(0,4))+1;
        maxDate = maxDate + '-12-31';

        return ( 
            <div className="form">
                 <h2>Nowe zadanie</h2>
                 <form>
                    <label htmlFor="title"> Tytuł zadania:</label>
                    <input type="text" id="title" value={this.state.title} onChange={this.handleChange}></input>
                    <label htmlFor="description"> Krótki opis:</label>
                    <textarea id="description" rows="6" value={this.state.description} onChange={this.handleChange}></textarea>
                    <label htmlFor="date"> Do kiedy ma być wykonane:</label>
                    <input type="date" id="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleChange}></input>
                    <label htmlFor="group">rodzaj zadania </label>
                    <select value={this.state.type} id="group" onChange={this.handleChange}>
                        <option value="personal">osobiste</option>
                        <option value="work">zawodowe</option>
                    </select>
                    <label htmlFor="important"> Wazne 
                    <input type="checkbox" checked={this.state.important} id="important" onChange={this.handleChange}/>
                    </label>
                    <button onClick={this.handleClick}>Dodaj do listy</button>
                </form>
            </div>
         );
    }
}
 
export default AddTask;