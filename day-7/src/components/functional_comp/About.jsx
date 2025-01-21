import { useState } from "react";   //importing useState from react
const About = () => {
    var [text,setText] = useState("Text box");
    function handleText(event){
        setText(event.target.value);
    }
    /*
    function handleText(e){
        setText(e.target.value);
    }
    */
    return(
        <div>
            <h2>This is about components</h2>
            <h3>TEXT AREA:</h3>
            <textarea value={text} onChange={handleText}/>
            {/*<textarea value={text} onchange={()=> setText()}/> */}
            <p>The text is{text}</p>
            <button onClick={()=> setText("")}>Clear</button>
        </div>
    )
}
export default About;