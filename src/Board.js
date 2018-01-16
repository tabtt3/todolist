import React from 'react';
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
        { this.renderCard() }
        { this.renderCard() }
      </div>
    );
  }
}

export default Board
