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
  renderSquare(i) {
    return (
      <Square 
        mark={this.props.squares[i]} 
        onClick={() => this.props.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
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
      currentStep: 0,
      isXTerm: true,
      winner: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    if (this.state.winner)
      return;

    const prevSquares = this.state.history[this.state.currentStep];
    if (prevSquares[i])
      return;

    let newSquares = this._initSquares(prevSquares);
    newSquares[i] = this.state.isXTerm? 'X' : 'O';
    let newHistory = this.state.history
      .slice(0, this.state.currentStep + 1)
      .concat([newSquares]);

    this.setState({
      history: newHistory,
      currentStep: this.state.currentStep + 1,
      isXTerm: !this.state.isXTerm,
      winner: this._checkWinner(newSquares),
    });
  }

  goToStep(i) {
    if (i === this.state.currentStep)
      return;

    this.setState({
      currentStep: i,
      isXTerm: (i % 2 === 0),
    });
  }

  render() {
    const status = this.state.winner
      ? `Player ${this.state.winner} wins!`
      : `Next player: ` + (this.state.isXTerm ? 'X' : 'O');

    const goToStepButtons = (
      <ul>
        {this.state.history.map((squares, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => this.goToStep(index)}
              >{`Go to step ${index}`}</button>
            </li>
          );
        })}
      </ul>
    );

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.state.history[this.state.currentStep]}
            handleClick={this.handleClick}
          />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ol>{goToStepButtons}</ol>
        </div>
      </div>
    );
  }

  _initSquares(squares = Array(9).fill(null)) {
    return squares.slice();
  }

  _checkWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; ++i) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}
