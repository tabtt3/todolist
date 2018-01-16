import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';

class Board extends React.Component {

  renderCard() {
    return(
      <Card />
    );
  }

  render() {
    return(
      <div className="board">
        <Card />
        <Card />
      </div>
    );
  }
}

export default Board
