import React from 'react';
import './Operand';
import Operator from './Operator';
const OperatorList=(props)=>{
    var OpList=[];
    OpList.push(<Operator key={0} value={'+'} onOperatorClicked={props.onOperatorClicked}></Operator>)
    OpList.push(<Operator key={1} value={'-'} onOperatorClicked={props.onOperatorClicked}></Operator>)
    OpList.push(<Operator key={2} value={'*'} onOperatorClicked={props.onOperatorClicked}></Operator>)
    OpList.push(<Operator key={3} value={'/'} onOperatorClicked={props.onOperatorClicked}></Operator>)
    OpList.push(<Operator key={4} value={'='} onOperatorClicked={props.onOperatorClicked}></Operator>)
    OpList.push(<Operator key={5} value={'c'} onOperatorClicked={props.onOperatorClicked}></Operator>)
    return(
    <div>{OpList}</div>
    );
}
export default OperatorList;