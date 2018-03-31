import React from 'react'
import TaskList from './TaskList'

export default class Board extends React.Component {

  constructor(props) {
    super(props)

    this.state = [
      {
        title: 'this is taskNo1 title',
        //detail: 'this is taskNo1 detail',
        statusCode: 0,
        //checked: true,
      },
      {
        title: 'this is taskNo2 title',
        //detail: 'this is taskNo1 detail',
        statusCode: 10,
        //checked: true,
      },
      {
        title: 'this is taskNo3 title',
        //detail: 'this is taskNo2 detail',
        statusCode: 99,
        //checked: false,
      }
    ]
  }

  transitionStatus(currentStatus) {
    switch(currentStatus) {
      case 0:
        return console.log('status changed')
      case 10:
        return console.log('status changed')
      case 99:
        return console.log('status changed')
    }
  }

  render() {
    const onClick = () => {
      this.setState({ checked: !this.state.checked})
    }

    return(
      <div className="board">
        <TaskList
          tasks={this.state}
          onClick={onClick}
          transitionStatus={this.transitionStatus}
        />
      </div>
    );
  }
}
