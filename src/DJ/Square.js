import React from 'react';

export default function Square(props) {
    var color = props.color;
    return (
        <div className= {color +" square"}>
        </div>
    )
}
