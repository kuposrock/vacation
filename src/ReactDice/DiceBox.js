import React from 'react';
import Dice from './Dice';

class DiceBox extends React.Component {
    constructor() {
        super();
        this.state = {
            num1: Math.floor(Math.random() * 6)+1,
            num2: Math.floor(Math.random() * 6)+1,
            num3: Math.floor(Math.random() * 6)+1,
            num4: Math.floor(Math.random() * 6)+1,
            num5: Math.floor(Math.random() * 6)+1
        }
        this.setDice = this.setDice.bind(this);
    }

    setDice() {
        this.setState(prevState => {
            console.log("works");         
              return {
                num1: Math.floor(Math.random() * 6)+1,
                num2: Math.floor(Math.random() * 6)+1,
                num3: Math.floor(Math.random() * 6)+1,
                num4: Math.floor(Math.random() * 6)+1,
                num5: Math.floor(Math.random() * 6)+1
            }
        })
    }

    render() {
        return (
            <div>
                <div className="diceRow">
                <Dice number={this.state.num1}/>
                <Dice number={this.state.num2}/>
                <Dice number={this.state.num3}/>
                <Dice number={this.state.num4}/>
                <Dice number={this.state.num5}/>
                </div>
                <button onClick={()=>{this.setDice()}}>My button</button>
            </div>)
    }

}
export default DiceBox;

