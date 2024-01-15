import React from 'react';
//універсальний button
type ButtonPropsType = {
    name:string,
    callBack: ()=>void
}

const UniButton = (props:ButtonPropsType) => {

    const onClickButtonHandler = () => {
        props.callBack();
    }
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};

export default UniButton;