import React from 'react'

export default function BlogPost(props) {
    return (
        <div className="blogPost">
            <h2>props.title</h2>
            <h3>props.subTitle</h3>
            <h4>props.author</h4>
            <h4>props.date</h4>
        </div>
    )
}
