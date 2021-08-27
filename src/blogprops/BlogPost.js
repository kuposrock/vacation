import React from 'react'

export default function BlogPost(props) {
    return (
        <div className="blogPost">
            <h2>{props.posts.title}</h2>
            <h3>{props.posts.subTitle}</h3>
            <h4>{props.posts.author}</h4>
            <h4>{props.posts.date}</h4>
        </div>
    )
}
