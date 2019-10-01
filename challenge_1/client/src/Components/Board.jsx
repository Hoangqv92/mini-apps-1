import React from 'react';
import Square from './Square.jsx'

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: [null,null,null,null,null,null,null,null,null],
            xTurn: true
        };
        this.handleReset = this.handleReset.bind(this);
    }
    calculateWinner(squares) {
        const winningCombo = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(var i = 0; i < winningCombo.length; i++) {
            if(squares[winningCombo[i][0]] && squares[winningCombo[i][0]] === squares[winningCombo[i][1]] && squares[winningCombo[i][0]] === squares[winningCombo[i][2]]) {
                return squares[winningCombo[i][0]];
            }
        }
        return null;
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        if (squares[i] === null){
            squares[i] = this.state.xTurn ? 'X': 'O';
            this.setState({squares: squares, xTurn: !this.state.xTurn});

        } else {
            console.log("There is already move there!");
        }
    }
    renderSquare(i) {
        return (<Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
        )
    }

    handleReset() {
        this.setState({squares: [null,null,null,null,null,null,null,null,null], xTurn: true});
        return console.log('Reset');
    }
    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } 
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
            <div>
            <button onClick={this.handleReset} name="Reset Game">Reset Game</button>
            </div>
          </div>
        );
      }
}

export default Board;