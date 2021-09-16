import React from 'react';

class MemeChoices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listNumber: 4
        };
    }

    render() {
        // console.log(this.props.loading);
        // if (this.props.loading) {
        //     var background = {
        //         backgroundImage: 'url(' + this.props.background.url + ')'
        //     }
        // }

        return (
            <div className="meme" style={this.props.background} >

            </div>
        )
    }
}
export default MemeChoices;

