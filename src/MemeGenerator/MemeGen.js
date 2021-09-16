import React from 'react';
import MemeChoices from './MemeChoices';

class MemeGen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MasterMemeList: [],
            UserMemeList: [],
            listNumber: 0,
            loading: false,
        };
    }


    componentDidMount() {
        this.setState({ loading: true })
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                this.setState({
                    MasterMemeList: data.data.memes,
                    loading: false,
                })

            })

    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        this.setState((prevState, props) => ({
            listNumber: prevState.listNumber + 1,

        }));
        //console.log(this.state.listNumber);


    }
    myChangeHandler = (event) => {
        // console.log(event.target.value + event.target.name)
        // var name = event.target.name;
        // this.setState({ [name]: event.target.value });
    }


    render() {
        var backgrounds = {
           
            //backgroundImage: 'url(' + this.state.MasterMemeList[this.state.listNumber].url + ')'
        }
        console.log(this.state.MasterMemeList[this.state.listNumber])
            
        var meme = (this.state.loading) ? "loading" : <MemeChoices background={backgrounds} listNumber={this.state.listNumber} />

        return (
            <div>
                <div className="container">
                    {meme}
                    {/* <MemeChoices background={this.state.MasterMemeList[this.state.listNumber]} listNumber={this.state.listNumber} /> */}

                    <form onSubmit={this.mySubmitHandler}>
                        <input type='text' onChange={this.myChangeHandler} name="fName" placeholder="Top Text" />
                        <input type='text' onChange={this.myChangeHandler} name="lName" placeholder="Bottom Text" />

                        <input type='submit' />


                    </form>
                </div>
                {/* 
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
                                
                            </div>
                        )
                    })
                } */}

            </div>
        );
    }
}
export default MemeGen;

