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
        //console.log(this.state.listNumber);
    }
    myChangeHandler = (event) => {
        // console.log(event.target.value + event.target.name)
        // var name = event.target.name;
        // this.setState({ [name]: event.target.value });
    }

    changeList = (num) => {
        if(this.state.listNumber>0 || num>0){
        this.setState((prevState, props) => ({
            listNumber: prevState.listNumber + num,
        }));
    }
       
      }


    render() {
        console.log(this.state.MasterMemeList[this.state.listNumber])
        if (this.state.MasterMemeList.length >= 1){
        var backgrounds = { backgroundImage: 'url(' + this.state.MasterMemeList[this.state.listNumber].url + ')' }
        var title = this.state.MasterMemeList[this.state.listNumber].name;
        var meme = <MemeChoices background={backgrounds} listNumber={this.state.listNumber} memeTitle={title} />
    }
        return (
            <div>
                <div className="container">
                    <div className="title">Meme Generator</div>
                {meme}
                <button onClick={()=>{this.changeList(-1)}}>&#8592;</button>
                {this.state.listNumber+1 + " / " + this.state.MasterMemeList.length}
                <button onClick={()=>{this.changeList(1)}}>&#8594;</button>
                   
                
                    <form onSubmit={this.mySubmitHandler}>
                        <input type='text' onChange={this.myChangeHandler} name="fName" placeholder="Top Text" />
                        <input type='text' onChange={this.myChangeHandler} name="lName" placeholder="Bottom Text" />
                        <input type='submit' />
                    </form>
                   
                </div>
               

            </div>
        );
    }
}
export default MemeGen;

