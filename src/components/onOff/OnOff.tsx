import React, {useState} from 'react';

type OnOffPropsType = {
    // on: boolean
    // off: boolean
}


const OnOff = (props: OnOffPropsType) => {
    let [on, setOn] = useState(false);

    const onStyle =  {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle =  {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: on ? "white" : "red"
    };
    const indicatorStyle =  {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        display: "inline-block",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    };
    const onOffBlock = {
        margin: "20px 20px"
    }

    return (
        <div style={onOffBlock}>
            <div style={onStyle} onClick={ ()=> {setOn(true)} }>On</div>
            <div style={offStyle} onClick={ ()=> {setOn(false)} }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;