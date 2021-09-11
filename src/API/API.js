import React from 'react';


class API extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            posts: []
        };
        
    }
   
    componentDidMount(){
        this.setState({loading:true})
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                loading:false,
                posts:data
            })
        })
    }

    render() {
        
        return (
                <div className="container">
                    {
                    this.state.posts.map((post,index)=>{
                        var postimg = {
                            backgroundImage:'url(' + post.image + ')'
                        }
                    return (
                        <div key={post.name+index} className="post" style={postimg}>
                            
                        <p>{post.name}</p>
                        </div>
                    )
                })}

                </div>
            
        );
    }
}
export default API;

