import React from 'react';


class NameEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', names:[] };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        this.setState({ names: this.state.names.concat(this.state.username)});
        
    }
    myChangeHandler = (event) => {
        this.setState({ username: event.target.value });
    }
    render() {
        return (
            <div>
            <form onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name, and submit:</p>
                <input type='text' onChange={this.myChangeHandler} />
                <input type='submit' />
            </form>
            <ul>
                {this.state.names.map((name,index)=>{
                    return (<li key={name +index}>{name}</li>)
                })}
            </ul>
            </div>
        );
    }
}
export default NameEntry;

