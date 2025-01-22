import { useEffect,useState} from "react";

const UseEffect = ()=>{  
    var [text,setText]=useState("");
    useEffect(()=> {
        console.log(text)
    },[text])
    return(
        <div>
        <h3>This is useEffect</h3>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <input type="Text"></input>
        <h3>The text is {text}</h3>
        </div>
    )
}
export default UseEffect;