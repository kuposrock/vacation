import React from 'react'

export default function Dice(props) {
    var selected = false;
    function selectDice(){
    if(!selected){
        selected=true;
        console.log(selected);
    }
    else{
        selected=false;
        console.log(selected);
    }
    }
    return (
        <div className="dice" onClick={()=>{selectDice()}} > 
           <p> {props.number}</p>
        </div>
    )
}
