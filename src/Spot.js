import React from 'react'



export default function Spot(props) {

    var backgroundColor =props.location.timeToGo;
    return (
        <div className={backgroundColor +" card"}>
           {(props.location.price>1000)?"$$$":(props.location.price>500)?"$$":"$"} {props.location.price} {props.location.place}  {props.location.timeToGo}
        </div>
    )
}


