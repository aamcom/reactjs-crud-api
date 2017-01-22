import React, { Component } from 'react';
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
          title: 'BUsiness Website',
          category: 'Web Design'
        },
        {
          title: 'Social appli',
          category: 'Mobile Developpment'
        },
        {
          title: 'Sharing vehicles',
          category: 'Mobile Developpment'
        },
        {
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

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}></AddProject>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
