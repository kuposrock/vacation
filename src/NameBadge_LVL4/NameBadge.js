import React, { useState } from 'react';


const NameEntry = () => {

    // constructor(props) {
    //     super(props);
    //     this.state = { fName: "", lName: "", email: "", pob: "", phone: "", food: "", description: "", items: [] };
    // }

    const [forms, setForms] = useState({ fName: "", lName: "", email: "", pob: "", phone: "", food: "", description: "", items: [] })

    const mySubmitHandler = (event) => {
        event.preventDefault();
        var values = forms.items.concat({ fName: forms.fName, lName: forms.lName, email: forms.email, pob: forms.pob, phone: forms.phone, food: forms.food, description: forms.description });
        //  this.setState({ items: values });
        var holder = {...forms,items:values}
        setForms(holder);
        console.log(forms);
    }
    const myChangeHandler = (event) => {
        console.log(event.target.value + event.target.name)
        var name = event.target.name;
        var holder = {...forms,[name]: event.target.value}
        setForms(holder);

    }
   
        return (
            <div>
                <div className="container">
                    <form onSubmit={mySubmitHandler}>
                        <input type='text' onChange={myChangeHandler} name="fName" placeholder="First Name" value={forms.fName}/>
                        <input type='text' onChange={myChangeHandler} name="lName" placeholder="Last Name" value={forms.lName}/>
                        <input type='text' onChange={myChangeHandler} name="email" placeholder="Favorite Food" value={forms.email} />
                        <input type='text' onChange={myChangeHandler} name="pob" placeholder="Place of Birth" />
                        <input type='number' onChange={myChangeHandler} name="phone" placeholder="Phone Number" />
                        <input type='text' onChange={myChangeHandler} name="food" placeholder="Favorite Food" />
                        <textarea type='text' onChange={myChangeHandler} name="description" placeholder="Description" className="description" />
                        {console.log(forms)}
                        {console.log(forms.fName.length <=2)}
                        <input type='submit' disabled={(forms.fName.length <=2 || forms.lName.length <=2 || forms.email.length <=2 || forms.pob.length <=2 || forms.phone.length <=2 || forms.food.length <=2 || forms.description.length <=2)}/>
                        
                        
                   
                    </form>
                </div>

                {
                    forms.items.map((item, index) => {
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
                                
                            </div>
                        )
                    })
                }

            </div>
        );
    
}
export default NameEntry;

