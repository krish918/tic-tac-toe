import React, {Component} from 'react'
import Square from './square'

class Board extends Component {

    renderButton(i) {
        return <Square key={i} id = {i} 
            winningMove={this.props.winningMove}
            onClick={()=> this.props.onClick(i)} 
            value={this.props.square[i]} />
    }

    render() {
        const buttons = this.props.square.map((item, idx) => {
            return (this.renderButton(idx));
        });
        return (    
            <div className="board">
                <div className="board-row">
                    {buttons}
                </div>
            </div>
        )
    }
}

export default Board