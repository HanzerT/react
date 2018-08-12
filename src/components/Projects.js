import React, { Component } from 'react'
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';


export class Projects extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {

    let projectItems
        if(this.props.projects){
            projectItems = this.props.projects.map(project =>{
                console.log(project)
                return(
                    <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project}/>
                );
            });
      }
    return (
      <div>
        <h3>Lastest projects</h3>
        {projectItems}
      </div>
    )
  }
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};


export default Projects


