import React from 'react';
import reactDOM from 'react-DOM';
import Board from './Components/Board.jsx';

var board = [[0,1,2],[3,4,5],[6,7,8]];
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: [[0,0,0],[0,0, 0],[0,0,0]],
        };
    }
    render() {
        return(
            <div>
               <h1>Tic Tac Toe!</h1>
                <Board/>
            </div>
        )
    }
}

reactDOM.render(<App/>, document.getElementById('app'));