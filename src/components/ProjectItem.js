import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ProjectItem extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    return (
      <div>
          <li>
            {this.props.project.title} - {this.props.project.category} <button onClick={this.deleteProject.bind(this, this.props.project.id)}>X</button>
          </li>
          
      </div>
    )
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ProjectItem

