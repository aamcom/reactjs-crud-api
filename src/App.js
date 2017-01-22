import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

componentWillMount(){
  this.setState({projects:[
        {
          id: uuid.v4(),
          title: 'BUsiness Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social appli',
          category: 'Mobile Developpment'
        },
        {
          id: uuid.v4(),
          title: 'Sharing vehicles',
          category: 'Mobile Developpment'
        },
        {
          id: uuid.v4(),
          title: 'Geoloc meet',
          category: 'Mobile Developpment'
        }
  ]})
}
  handleAddProject(project){
    //console.log(project)
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});

  }
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}></AddProject>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
