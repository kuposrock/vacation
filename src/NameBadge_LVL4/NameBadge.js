import React from 'react';


class NameEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fName: "", lName: "", email: "", pob: "", phone: "", food: "", description: "", items: [] };
        
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        var values = this.state.items.concat({ fName: this.state.fName, lName: this.state.lName, email: this.state.email, pob: this.state.pob, phone: this.state.phone, food: this.state.food, description: this.state.description });
        this.setState({ items: values });
        console.log(this.state);
    }
    myChangeHandler = (event) => {
        console.log(event.target.value + event.target.name)
        var name = event.target.name;
        this.setState({ [name]: event.target.value });
    }
    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.mySubmitHandler}>
                        <input type='text' onChange={this.myChangeHandler} name="fName" placeholder="First Name" value={this.state.fName}/>
                        <input type='text' onChange={this.myChangeHandler} name="lName" placeholder="Last Name" value={this.state.lName}/>
                        <input type='text' onChange={this.myChangeHandler} name="email" placeholder="Favorite Food" />
                        <input type='text' onChange={this.myChangeHandler} name="pob" placeholder="Place of Birth" />
                        <input type='number' onChange={this.myChangeHandler} name="phone" placeholder="Phone Number" />
                        <input type='text' onChange={this.myChangeHandler} name="food" placeholder="Favorite Food" />
                        <textarea type='text' onChange={this.myChangeHandler} name="description" placeholder="Description" className="description" />
                        {console.log(this.state.fName.length <=2)}
                        <input type='submit' disabled={(this.state.fName.length <=2 || this.state.lName.length <=2 || this.state.email.length <=2 || this.state.pob.length <=2 || this.state.phone.length <=2 || this.state.food.length <=2 || this.state.description.length <=2)}/>
                         
                   
                    </form>
                </div>

                {
                    this.state.items.map((item, index) => {
                        return (
                            <div key={item + index} className="container">
                                <div className="col">
                                    <p>First Name: {item.fName}</p>
                                    <p>Place of Birth: {item.pob}</p>
                                    <p>Email: {item.email}</p>
                                </div>
                                <div className="col">
                                    <p>Last Name: {item.lName}</p>
                                    <p>Phone Number: {item.phone}</p>
                                    <p>Favorite Food: {item.food}</p>
                                </div>
                                
                                <div className="desc">Description: {item.description}</div>
                                

                                {/* <p key={item.fName+index}>First Name: {item.fName}</p>
                        <p key={item.lName+index}>Last Name: {item.lName}</p>
                        <p key={item.email+index}>Email: {item.email}</p>
                        <p key={item.pob+index}>Place of Birth: {item.pob}</p>
                        <p key={item.phone+index}>Phone Number: {item.phone}</p>
                        <p key={item.food+index}>Favorite Food: {item.food}</p>
                        <p key={item.description +index}>Description: {item.description}</p> */}
                            </div>
                        )
                    })
                }

            </div>
        );
    }
}
export default NameEntry;

