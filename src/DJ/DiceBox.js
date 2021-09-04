import React from 'react'

class DiceBox extends React.Component {
    constructor() {
        super();
        this.state = {
            num1: getRandomInt(5)+1,
            num2: getRandomInt(5)+1,
            num3: getRandomInt(5)+1,
            num4: getRandomInt(5)+1,
            num5: getRandomInt(5)+1
        }
        this.setDice = this.setDice.bind(this)
    }

    setDice() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
           1
        )
    }

}
export default DiceBox;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }