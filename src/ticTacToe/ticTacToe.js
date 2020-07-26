import React from 'react'
import './ticTacToe.css'

function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}>
      {props.mark}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isXTerm: true,
    };
  }
  
  renderSquare(i) {
    return (
      <Square 
        mark={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />
    );
  }
  
  handleClick(i) {
    let squares = this.state.squares.slice();
    squares[i] = this.state.isXTerm? 'X' : 'O';
    this.setState({
      squares: squares,
      isXTerm: !this.state.isXTerm,
    });
  }

  render() {
    const status = `Next player: ` + (this.state.isXTerm ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
