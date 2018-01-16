import React from 'react';
import Card from './Card';

class Board extends React.Component {

  renderCard(i) {
    return(
      <Card value={i} />
    );
  }

  render() {
    return(
      <div className="board">
        { this.renderCard(1) }
        { this.renderCard(2) }
      </div>
    );
  }
}

export default Board
