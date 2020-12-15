import React, { Component } from 'react';
import './AddTask.css';

import { 
    TextField, 
    FormGroup, 
    createMuiTheme, 
    ThemeProvider, 
    InputLabel, 
    Select, 
    MenuItem, 
    FormControl, 
    FormControlLabel, 
    Checkbox 
} from '@material-ui/core';

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

        const name = e.target.name;
        const type = e.target.type;
        console.log(type);
        console.log(name);
        if (type === 'text' || type === 'textarea' || type === 'date'){
            this.setState({
                [name]:e.target.value
            })
        }else if (name === 'group'){
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
         if(title !== '') {
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
         } else {
             alert('Wymagany jest tytuł nowego zadania');
         }
         
     }

    

    render() { 
        
        const innerTheme = createMuiTheme({
            palette: {
              primary: {
                main: '#2558b1',
              },
            },
         });

        return ( 
            <div className="form">
                 <h2>Nowe zadanie</h2>
                 <ThemeProvider theme={innerTheme}>
                    <FormGroup>
                        <TextField 
                            id="outlined-textarea" 
                            name="title"
                            label="tytuł zadania" 
                            variant="outlined"  
                            type="text" 
                            value={this.state.title} 
                            onChange={this.handleChange}
                        >
                        </TextField>
                        <br/>
                        <TextField
                            id="outlined-textarea"
                            name="description"
                            label="opis zadania"
                            placeholder="Placeholder"
                            multiline
                            rows={6}
                            variant="outlined"
                            value={this.state.description} 
                            onChange={this.handleChange}
                        >
                        </TextField>
                        <br/>
                        <TextField
                            id="date"
                            label="Termin wykonania zadania"
                            type="date"
                            name="date" 
                            value={this.state.date} 
                            onChange={this.handleChange}
                        >
                        </TextField>
                        <br/>
                        <FormControl variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">Grupa</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                name="group"
                                value={this.state.group}
                                onChange={this.handleChange}
                                label="group"
                            >
                                <MenuItem value="personal">osobiste</MenuItem>
                                <MenuItem value="work">zawodowe</MenuItem>
                            </Select>
                        </FormControl>        
                        <br/>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.important}
                                    onChange={this.handleChange}
                                    name="important"
                                    color="primary"
                                />
                            }
                            label="wżazne"
                        />
                        <button variant="contained" color="primary" onClick={this.handleClick}>Dodaj zadanie</button> 
                    </FormGroup>
                </ThemeProvider>
             </div>
         );
    }
}
 
export default AddTask;