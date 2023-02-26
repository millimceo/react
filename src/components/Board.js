import React, { Component } from 'react'
import Square from './Square.js'
import "./Board.css"

export default class Board extends Component {

    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null)
        }
    }


    renderSquare(i) {
        return <Square value={i}/>
    }

    render() {
        return (
        <div>
            <div className='status'></div>
            <div className='board-row'>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className='board-row'>
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className='board-row'>
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
        )
    }
}