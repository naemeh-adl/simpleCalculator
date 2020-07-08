import React from 'react';
import './Operand';
import Operand from './Operand';
const OperandList=(props)=>{
    var OpList=[];
    for(var i=0;i<10;i++){
OpList.push(<Operand key={i} value={i} onOperandClicked={props.onOperandClicked}></Operand>)
     }
     return(
    <div>{OpList}</div>
    );
}
export default OperandList;