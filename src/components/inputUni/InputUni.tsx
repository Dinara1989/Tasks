import React, {ChangeEvent, useState} from 'react';
//універсальний input
type InputPropsType = {
    setTitle: (title:string)=> void
    title: string
}
const InputUni = (props:InputPropsType) => {
    //в input завжди лежить строка, навіть якщо представлена цифрами, тому в ініціл. стейті пуста строка
    let[title, setTitle]=useState('')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};

export default InputUni;