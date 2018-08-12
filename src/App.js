import React, { Component } from 'react'
import Projects from './components/Projects'
import AddProjects from './components/AddProjects';
import Persons from './components/Persons'
import uuid from 'uuid';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      projects: [],
      persons: []
    }
  }

  getProjects(){
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: "Business Website",
        category: "Web design"
      },
      {
        id: uuid.v4(),
        title: "programming databse",
        category: "programming"
      },
      {
        id: uuid.v4(),
        title: "Network display",
        category: "Network"
      },
    ]});
  }

  getPersonList(){
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res =>{
        this.setState({persons: res.data});
        //console.log(this.state.persons)
      });

  }
  
  componentWillMount(){
    this.getProjects();
    this.getPersonList();
  }
  
  handleAddProjects(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id); 
    projects.splice(index, 1);
    this.setState({projects: projects});
  }

  render() {
    return (
      <div>
        <AddProjects addProject={this.handleAddProjects.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <Persons persons={this.state.persons} />
      </div>
    );
  }
}

export default App;
