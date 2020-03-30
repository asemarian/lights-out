import React, { Component } from 'react';
import Cell from './Cell';
import getSolvablePattern from './helpers';
import './Grid.css';

class Grid extends Component {
    static defaultProps = {
        size: 5
    }

    constructor(props) {
        super(props);
        this.state = {
            pattern: getSolvablePattern(this.props.size)
        }

        this.toggle = this.toggle.bind(this);
        this.newGame = this.newGame.bind(this);
    }

    toggle(index) {
        const [a, b] = index;
        const matrix = [...this.state.pattern];

        matrix[a][b] = !matrix[a][b];
        (matrix[a][b + 1] !== undefined) && (matrix[a][b + 1] = !matrix[a][b + 1]);
        (matrix[a][b - 1] !== undefined) && (matrix[a][b - 1] = !matrix[a][b - 1]);
        (a + 1 < matrix.length) && (matrix[a + 1][b] = !matrix[a + 1][b]);
        (a - 1 >= 0) && (matrix[a - 1][b] = !matrix[a - 1][b]);

        this.setState({ pattern: [...matrix] });
    }

    newGame() {
        this.setState({ pattern: getSolvablePattern(this.props.size) });
    }

    render() {
        return (

            this.state.pattern.every(row => row.every(cell => cell === false)) ?
                <div className="Grid-win">
                    <p className="Grid-win-message">You Win!</p>
                    <button className="Grid-win-button" onClick={this.newGame}>New Puzzle</button>
                </div>
                :
                <div className="Grid">
                    {this.state.pattern.map((row, i) => row.map((bool, j) => <Cell isLit={bool} toggle={this.toggle} index={[i, j]} key={`${i}-${j}`} />))}
                </div>


        )
    }
}

export default Grid;
