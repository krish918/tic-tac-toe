import React, {Component} from 'react'

class Square extends Component {
    render() {
        let square_class = "square";
        const winning_move = this.props.winningMove;
        const id = this.props.id;
        if(winning_move !== null) {
            const [x, y, z] = winning_move;
            if(id === x || id === y || id === z) {
                square_class = "square winner";
            }
        }
        return (
            <button className={square_class} 
                onClick={()=> this.props.onClick()}>
            {this.props.value}
            </button>
        )
    }
}

export default Square