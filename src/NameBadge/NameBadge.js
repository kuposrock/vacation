import React from 'react';


class NameEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fName:"",lName:"",email:"",pob:"",phone:"",food:"",description:""};
               
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
            <div className="container">
            <form onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.fName}</h1>
                <p>Enter your name, and submit:</p>
                <label>First Name</label>
                <input type='text' onChange={this.myChangeHandler} name="fName" />
                <label>Last Name</label>
                <input type='text' onChange={this.myChangeHandler} name="lName" />
                <input type='text' onChange={this.myChangeHandler} name="email" />
                <input type='text' onChange={this.myChangeHandler} name="pob" />
                <input type='text' onChange={this.myChangeHandler} name="phone" />
                <input type='text' onChange={this.myChangeHandler} name="food" />
                <input type='text' onChange={this.myChangeHandler} name="description" />
                <input type='submit' />
            </form>
            <ul>
                {/* {this.state.names.map((name,index)=>{
                    return (<li key={name +index}>{name}</li>)
                })} */}
            </ul>
            </div>
        );
    }
}
export default NameEntry;

