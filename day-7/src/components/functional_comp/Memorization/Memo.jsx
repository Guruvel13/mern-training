import { useState } from "react"
import Update_Number from "./Update_Number"
import Update_Text from "./Update_Text"

const Memo = () => {
    var [num,setNum] =useState(0)
    return (
        <div>
            <h2>This is memo</h2>
            <Update_Number value={num}/>
            <button onClick={()=>setNum(num+1)}>+</button>

            <Update_Number value={num}/>
            <button onClick={()=>setNum(num+2)}>+</button>
            <Update_Text />
        </div>
    )
}
export default Memo