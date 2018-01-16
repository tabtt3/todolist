import React from 'react';

class TaskDetail extends React.Component {
  render() {
    return(
      <div className="TaskDetail">
        { this.props.value }
      </div>
    );
  }
}

export default TaskDetail
