import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {

    constructor(){
        super();
        this.state = {
            newProject: {}
        }
    }
    static defaultProps =  {
        categories : ['Web Design', 'Web Developpment', 'Mobile Developpment']
    }

    handleSubmit(e){
        if(this.refs.title.value === ''){
            alert('Titre requis')
        } else {
            this.setState({newProject:{
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, ()=> {
                console.log(this.state)
                this.props.addProject(this.state.newProject);
            })
        };
        e.preventDefault()
    }
  render() {
      console.log(this.props.categories)
    let categoryOptons = this.props.categories.map(cat => {
              return <option key={cat} value={cat}>{cat}</option>
          });
    return (
      <div>
        <h3>Add project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}> 
            <div>
                <label>Title </label><br/>
                <input type="text" ref="title" />
            </div>
            <div>
                <label>Category </label><br/>
                <select ref="category">
                    {categoryOptons}
                </select>
            </div>
            <br/>
            <input type="submit" value="Submit"/>
            <br/>
        </form>    
      </div>
    );
  }
}

export default AddProject;
