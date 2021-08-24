import React from 'react'

export default function Spot(props) {

    return (
        <div>
            <li> {props.location.place} {props.location.price} {props.location.timeToGo}</li>
        </div>
    )
}
