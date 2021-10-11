import React, {useState, useEffect} from 'react';


const API = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         loading:false,
    //         posts: []
    //     };
        
    // }
    useEffect(() => {
        setLoading(true);
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setLoading(false);
            setPosts(data);
            // this.setState({
            //     loading:false,
            //     posts:data
            // })
        })
    },[false])
   

        
        return (
                <div className="container">
                    {
                    posts.map((post,index)=>{
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
export default API;

