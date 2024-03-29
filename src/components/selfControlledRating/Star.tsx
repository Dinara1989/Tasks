import React from 'react';

type StarPropsType = {
    selected: boolean
}
const Star = (props:StarPropsType) => {
    if(props.selected === true) {
        return <span><b> -Star</b></span>
    } else {
        return <span> -Star</span>
    }
};

export default Star;