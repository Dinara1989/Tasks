import React, {useState} from 'react';
import AccordionBody from "./AccordionBody";
type AccordionType = {
    titleValue: string
}
const Accordion = (props:AccordionType) => {
    let [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <h3>--{props.titleValue}--</h3>
            <button onClick={()=> {setCollapsed(!collapsed)}}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}
        </div>
    );
};

export default Accordion;