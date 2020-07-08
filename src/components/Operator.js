
import React from 'react';
const Operator =(props)=>{
    return(
    <button onClick={props.onOperatorClicked} value={props.value} >{props.value}</button>
    );
}
export default Operator;