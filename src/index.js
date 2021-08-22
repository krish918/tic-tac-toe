import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Board from './board'
import getWinner from './util'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    square: Array(9).fill(null),
                    rowcol: [null, null],
                }
            ],
            move_number: 0,
            nextPlayer: 'X',
            isAscending: true,
        }

        this.ROW_COUNT = 3;
    }

    handleClick(id) {  
        console.log(id);
        const history = this.state.history.slice(0, 
            this.state.move_number + 1);
        const current = history[history.length - 1]
        const square_copy = current.square.slice();
        const {winner} = getWinner(square_copy);
        if(square_copy[id] !== null || winner !== null) {
            return;
        }
        const next = (this.state.nextPlayer === 'X') ? 'O' : 'X';
        
        square_copy[id] = this.state.nextPlayer;
    
        const col = (id % this.ROW_COUNT) + 1
        const row = Math.floor(id / this.ROW_COUNT) + 1
        this.setState({
            history: history.concat({
                square: square_copy, 
                rowcol: [row, col],
            }),
            nextPlayer: next,
            move_number: history.length,
        });    
    }

    toggleMoveOrder() {
        this.setState({
            isAscending: !this.state.isAscending,
        })
    }


    gotoMove(move) {
        console.log(move);
        this.setState({
            move_number:  move,
            nextPlayer: ((move % 2 === 0)? 'X':'O' ),
        })
    }

    renderHistoryButtons(history) {
        const history_arr = (this.state.isAscending) ? history : 
            history.slice().reverse();
        const move_history = history_arr.map((move, move_num) => {
            
            const move_no = (this.state.isAscending) ? move_num :
                (history_arr.length - move_num -1);
           
            let goto_text = "Goto ";
            let button_class = "move-button"
            if (move_no === this.state.move_number) {
                goto_text = "";
                button_class = "move-button active-move";
            }
            let button_text = goto_text + ((move_no === 0) ? 
                "Beginning" : "Move #" + move_no);
            
            const [r, c] = move.rowcol;
            const rowcol_desc = (r !== null) ? 
                "[Row: " + r +" Col: " + c +"]" : "";
            return (
                <li className="move-list" key={move_no}>
                    <div className="move-bottom-container">
                    <button className={button_class} 
                    onClick={() => this.gotoMove(move_no)}>
                    {button_text}
                    </button>
                    </div>
                    <div className="rowcol">{rowcol_desc}</div>
                </li>
            );
        });

        return move_history;
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.move_number];
        let status = (<ul className="game-status"><li>Next Player:   
            {(this.state.nextPlayer === 'X') ? ' X' : ' O'}</li></ul>);

        const total_squares = current.square.length;
        const {winner, line} = getWinner(current.square);
        if(winner != null) {
            status = (<div className="game-status winner">
                        WINNER: Player {winner}</div>);
        }
        else if(this.state.move_number === total_squares) {
            status = (<div className="game-status draw">
                        GAME DRAW</div>);
        }

        const move_history = this.renderHistoryButtons(history);
        
        return (
            <div className="game-container">
            <div className="game-row">
                <h2 className="game-title">Tic-Tac-Toe</h2>
                <Board square = {current.square} winningMove={line}
                    onClick={(i) => this.handleClick(i)}/>
                <div>{status}</div>
            </div>
            <div className="game-row history-pane">
                <h4 className="move-history">Move History</h4>
                <ol className="history-container">
                    {move_history}
                </ol>
                <div> 
                    <button className="toggle-button" 
                        onClick={() => this.toggleMoveOrder()}>
                        Toggle Move Order
                    </button> 
                </div>
            </div>
            <div className="game-row dummy"></div>
            </div>
        )
    }
}

ReactDOM.render(<Game />, document.getElementById("root"));