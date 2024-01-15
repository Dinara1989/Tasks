import React, {useState} from 'react';
import InputUni from "./InputUni";
import UniButton from "./UniButton";
//Загальний input

const FullInput = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])
    let [title, setTitle] = useState('')
    const addMessage = (title:string) => {
        setMessage([{message: title}, ...message])
    }
    const callBackButtonHandler = ()=>{
        addMessage(title)
        setTitle('')
    }
    return (
        <div style={{margin: "20px 20px"}}>
            <InputUni setTitle={setTitle} title={title}/>
            <UniButton name={'+'} callBack={callBackButtonHandler}/>
            {message.map( (el, index:number) =>{
                return (
                    <div key={index}>
                        {el.message}
                    </div>
                )
            })}
        </div>
    );
};

export default FullInput;