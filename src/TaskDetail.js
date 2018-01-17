import React from 'react';

class TaskDetail extends React.Component {
  render() {
    return(
      <div className="task-detail">
        { this.props.value }
      </div>
    );
  }
}

export default TaskDetail
