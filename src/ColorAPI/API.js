import React from 'react';


class API extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            color: {}
        };

    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    loading: false,
                    color: data.new_color
                })
            })
    }

    render() {
        var background = {
            backgroundColor: `#` + this.state.color
        }
        return (
           
            <div className="container" style={background}>

            </div>

        );
    }
}
export default API;

