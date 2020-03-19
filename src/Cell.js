import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
    constructor(props) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.props.toggle(this.props.index);
    }

    render() {
        return <div className={`Cell-${this.props.isLit ? 'on' : 'off'}`} onClick={this.handleToggle}></div>
    }
}

export default Cell;