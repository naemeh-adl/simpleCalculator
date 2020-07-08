
import React from 'react';
const Operand =(props)=>{
    return(
    <button onClick={props.onOperandClicked} value={props.value} >{props.value}</button>
    );
}
export default Operand;