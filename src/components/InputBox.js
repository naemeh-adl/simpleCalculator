import React from 'react';
const InputBox =(props)=>{
    return(
        <div className='pa2'>
        <input  onChange={props.onMyChange} className='pa3 ba b--red bg-light-yellow' type='search'
         value={props.textVal} placeholder='0'
        />
        </div>
    );
}
export default InputBox;