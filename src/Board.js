import React from 'react'
import Card from './Card'
import Button from './Button'

export default class Board extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      title: 'this is task title',
      detail: 'this is task detail',
      statusCode: 10,
    }
  }

  taskStatus(statusCode) {
    switch(statusCode) {
      case 0:
        return '未着手'
      case 10:
        return '作業中'
      case 99:
        return '完了'
    }
  }

  render() {
    const onClick = () => {
      console.log('test')
    }

    return(
      <div className="board">

        <Card
          title={this.state.title}
          detail={this.state.detail}
          status={this.taskStatus(this.state.statusCode)}
        />

        <Button
          onClick={onClick}
        />

      </div>
    );
  }
}
