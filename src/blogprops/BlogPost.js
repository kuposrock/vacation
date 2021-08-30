import React from 'react';

export default function BlogPost(props) {
    return (
        <div className="post">
            <h2>{props.posts.title}</h2>
            <h3>{props.posts.subTitle}</h3>
            <p>Posted by {props.posts.author} on {props.posts.date}</p>
        </div>
    )
}
