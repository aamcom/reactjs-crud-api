import React, { Component } from 'react';

class ProjectItem extends Component {

deleteProject(id){
    this.props.onDelete(id);
}
  render() {
      console.log("xxx",this.props);
    return (
      <li className="Project">
        <a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}>X</a> |  <strong>{this.props.project.title}</strong>   : {this.props.project.category}
      </li>
    );
  }
}

export default ProjectItem;
