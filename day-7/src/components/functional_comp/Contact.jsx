import { useState } from "react";
const Contact = () => {
    var [num,a] =useState(0);
    return ( <div>
            <h2>This is Contact page</h2>
            <h3>Value is {num}</h3>
            <button onClick={()=>a(num+1)}>+</button>
            <button onClick={()=>a(num-1)}>-</button>
            <button onClick={()=>a(0)}>Reset</button>
            </div>);
};
export default Contact;