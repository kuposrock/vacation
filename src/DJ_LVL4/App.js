import React, { Component } from 'react';
import Square from './Square'
import cheer from './Powerup2.mp3'
import './App.css'

class App extends Component {
  state = {
      squares: ['white', 'black', 'black', 'white']
    }

  djSmall = () => {
    this.setState(({squares})=> ({squares: squares.map(square => square !== 'white'? 'white': 'black')}))
  }

  partyDJ = () => {
    this.setState(({squares}) => ({squares: squares.map((square, i) => i < 2 ? 'purple': square)}))
  }

  professional = (side) => {
    this.setState(({squares}) => ({squares: squares.map((square,i) => (side === 'r' && i === 3) || (side ==='l' && i === 2) ? 'blue' : square)}))
  }

  bigTime = (sq, color) => {
      this.setState(({squares}) => ({squares: squares.map((square, i) => sq === i ? color : square)}))
  }

  render() {
    let audio = new Audio(cheer)
    const mappedSquares = this.state.squares.map((square, i) => <Square key={square + i} color={square} />)
    return (
      <div className='squareContainer'>
        {mappedSquares}
        <button onClick={this.djSmall}>DJ Small</button>
        <button onClick={this.partyDJ}>Party DJ</button>
        <button onClick={() => this.professional('l')}>Left Blue</button>
        <button onClick={() => this.professional('r')}>Right Blue</button>
        <button onClick={() => this.bigTime(0,'yellow')} >Big DJ one</button>
        <button onClick={() => this.bigTime(1,'coral')} >Big DJ two</button>
        <button onClick={() => this.bigTime(2,'cornflowerblue')} >Big DJ three</button>
        <button onClick={() => this.bigTime(3,'crimson')} >Big DJ four</button>
        <button onClick={() => audio.play()}>Make Noise</button>
      </div>
    );
  }
}

export default App;


// SOLUTION BELOW IS USING HOOKS

// import React, {useState} from 'react';
// import Square from './Square'
// import cheer from './cheer.mp3'
// import './App.css'

// const App = () => {
//     const [squares, setSquares] = useState(['white', 'black', 'black', 'white'])

//     const djSmall = () => setSquares(prev => prev.map(square => square !== 'white'? 'white': 'black'))

//     const partyDJ = () => setSquares(prev => prev.map((square, i) => i < 2 ? 'purple': square))

//     const professional = (side) => setSquares(prev => prev.map((square,i) => (side === 'r' && i === 3) || (side ==='l' && i === 2) ? 'blue' : square))

//     const bigTime = (sq, color) => setSquares(prev => prev.map((square, i) => sq === i ? color : square))

//     let audio = new Audio(cheer)
//     const mappedSquares = squares.map((square, i) => <Square key={square + i} color={square} />)
//     return (
//       <div className='squareContainer'>
//         {mappedSquares}
//         <button onClick={djSmall}>DJ Small</button>
//         <button onClick={partyDJ}>Party DJ</button>
//         <button onClick={() => professional('l')}>Left Blue</button>
//         <button onClick={() => professional('r')}>Right Blue</button>
//         <button onClick={() => bigTime(0,'yellow')} >Big DJ one</button>
//         <button onClick={() => bigTime(1,'coral')} >Big DJ two</button>
//         <button onClick={() => bigTime(2,'cornflowerblue')} >Big DJ three</button>
//         <button onClick={() => bigTime(3,'crimson')} >Big DJ four</button>
//         <button onClick={() => audio.play()}>Make Noise</button>
//       </div>
//     )
// }

// export default App;