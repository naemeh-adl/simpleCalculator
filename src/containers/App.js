import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import '../components/InputBox';
import InputBox from '../components/InputBox';
import OperandList from '../components/OperandList';
import OperatorList from '../components/OperatorList';
class App extends Component{
  constructor(){
    super();
    this.myRef = React.createRef();
    this.state={
      userInput:''
    }
  }
  
  render(){
    const onMyChange=(event={}, buttonValue='',isResult=false)=>{
      //debugger;
      console.log(buttonValue);
      if(!isResult){
      if(event.target===undefined){
       this.setState({userInput:this.state.userInput + buttonValue});
      }else{
        this.setState({userInput:event.target.value});
      }
      // console.log(this.state.userInput);
    }else{
      this.setState({userInput:buttonValue});
    }
    }
    const onOperandClicked=(event)=>{
          onMyChange({},event.target.value);
         //debugger;
          // const node = this.myRef.current;
        //  node.value='nnnnnnnnnnnn';
        // DataView.InputBox.value='mmmmmmm';
    }
    const onOperatorClicked=(event)=>{
      debugger;
      if(event.target.value!=='='&&event.target.value!=='c'){
      onMyChange({},event.target.value);
      }else if(event.target.value==='c'){
        onMyChange({},'',true);
      }
      else{
        debugger; 
        const result=eval(this.state.userInput);
        onMyChange({},result,true);
      }
      
    
    }
    return (
    <div className="App tc">
      
      <InputBox textVal={this.state.userInput} onMyChange={onMyChange} />
      <OperandList  onOperandClicked={onOperandClicked}/>
      <OperatorList  onOperatorClicked={onOperatorClicked}/>
    </div>
  );
  }
}

export default App;
