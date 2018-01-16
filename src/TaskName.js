import React from 'react';

class TaskName extends React.Component {
  render() {
    return(
      <div className="task-name">
        { this.props.value }
      </div>
    );
  }
}

export default TaskName
