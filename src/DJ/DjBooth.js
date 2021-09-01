import React from 'react'
import Square from './Square';
import useSound from 'use-sound';
import boopSfx from './Powerup2.mp3';


class DjBooth extends React.Component {
    constructor() {
        super();
        this.state = { colors: ["red", "red", "white", "white"] };
        this.colorChanger = this.colorChanger.bind(this);
        
    }

    colorChanger(param) {
        
        
        console.log(param);
        switch (param) {
            case 'whiteblack':
                console.log(this.state.colors[0]);
                if (this.state.colors[0] !== "white") {
                    console.log(this.state.colors[0] + "yes");
                    this.setState({ colors: ["white", "white", "white", "white"] });
                }
                else if (this.state.colors[0] === "white")
                    this.setState({ colors: ["black", "black", "black", "black"] });
                break;
            case 'purple':
                this.setState({ colors: ["purple", "purple", this.state.colors[2], this.state.colors[3]] });
                break;
            case 'blueOne':
                this.setState({ colors: ["blue", this.state.colors[1], this.state.colors[2], this.state.colors[3]] });
                break;
            case 'blueTwo':
                this.setState({ colors: [this.state.colors[0], "blue", this.state.colors[2], this.state.colors[3]] });
                break;

            case 'purple1':
                this.setState({ colors: ["purple", "red", this.state.colors[2], this.state.colors[3]] });
                break;
            case 'blueOne1':
                this.setState({ colors: ["red", this.state.colors[1], this.state.colors[2], this.state.colors[3]] });
                break;
            case 'blueTwo1':
                this.setState({ colors: [this.state.colors[0], "blue", "black", "red"] });
                break;
            case 'whiteblack1':
                this.setState({colors: ["white", "red", "white", "red"] });
                break;
            default:
                break;

        }
    }

    render() {
        return (
            <div className="itemGrid">
                {this.state.colors.map((color, index) => {
                    return (
                        <Square color={color} key={color + "-" + index} />)
                })}
                <button onClick={() => { this.colorChanger("whiteblack") }}>Black/White</button>
                <button onClick={() => { this.colorChanger("purple") }}>Click Purple</button>
                <button onClick={() => { this.colorChanger("blueOne") }}>Click Blue</button>
                <button onClick={() => { this.colorChanger("blueTwo") }}>Click Blue2</button>
                <button onClick={() => { this.colorChanger("purple1") }}>Click Multi</button>
                <button onClick={() => { this.colorChanger("blueOne1") }}>Click Mutli2</button>
                <button onClick={() => { this.colorChanger("blueTwo1") }}>Click Multi3</button>
                <button onClick={() => { this.colorChanger("whiteblack1") }}>Black Multi</button>
            </div>
        )
    }

}
export default DjBooth;

function red(obj) {
    console.log("poop")
    obj.setState({ colors: ["red", "red", "red", "white"] });
}