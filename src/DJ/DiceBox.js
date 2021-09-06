import React from 'react'

class DiceBox extends React.Component {
    constructor() {
        super();
        this.state = {
            num1: Math.floor(Math.random() * 6),
            num2: Math.floor(Math.random() * 6),
            num3: Math.floor(Math.random() * 6),
            num4: Math.floor(Math.random() * 6),
            num5: Math.floor(Math.random() * 6)
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

