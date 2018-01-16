import React from 'react';
import TaskName from './TaskName';
import TaskDetail from './TaskDetail';

class Card extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.value)
    console.log(props.value)
    this.state = {
      name   : "task No" + this.props.value,
      detail : "this is No" + this.props.value + "task",
    }
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
