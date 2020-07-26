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
    console.log(props.isXTerm);
    this.state = {
      squares: props.squares,
      isXTerm: props.isXTerm,
      handleClick: props.handleClick,
    };
  }
  
  renderSquare(i) {
    return (
      <Square 
        mark={this.state.squares[i]} 
        onClick={() => this.state.handleClick(i)}
      />
    );
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
  constructor(props) {
    super(props);
    this.state = {
      history: [this._initSquares()],
      isXterm: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    let newSquares = this._initSquares(this.state.history[this.state.history.length - 1]);
    newSquares[i] = this.state.isXTerm? 'X' : 'O';
    let history = this.state.history.slice();
    history.push(newSquares);

    this.setState({
      history: history,
      isXTerm: !this.state.isXTerm,
    });
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            isXTerm={this.state.isXTerm}
            squares={this.state.history[this.state.history.length - 1]}
            handleClick={this.handleClick}
          />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }

  _initSquares(squares = Array(9).fill(null)) {
    return squares.slice();
  }
}
