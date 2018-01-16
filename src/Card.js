import React from 'react';
import TaskName from './TaskName';
import TaskDetail from './TaskDetail';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name   : 'task No',
      detail : 'this is No',
    }
    console.log(props)
  }

  render() {
    return(
      <div className="card">
        <TaskName value={ this.state.name } />
        <TaskDetail value={ this.state.detail } />
      </div>
    );
  }
}

export default Card
