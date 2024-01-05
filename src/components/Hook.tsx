import React, {useState} from 'react';

const Hook = () => {
    let[a, setA]=useState(1)
    // a  is a state, setA is a function where a is existing
    //variant with props name
    const onClickHandler=(name:string)=>{
        if (name === 'add') {
            setA(++a);
        }
        if(name === 'zero') {
            setA(0);
        }
        if(name === 'minus') {
            setA(--a);
        }
    }
    return (
        <div>
        {/*Hook Use State*/}
            <h2>{a}</h2>
            <button onClick={()=>onClickHandler('add')}> + </button>
            <button onClick={()=>onClickHandler('zero')}> 0 </button>
            <button onClick={()=>onClickHandler('minus')}> - </button>
        </div>
    );
};

export default Hook;