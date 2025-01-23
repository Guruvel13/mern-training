import { useState } from "react";

const UseCallback =()=>{
    var [num,setNum]=useState(0);

    return (
        <div>
            <h2>This is Callback</h2>
            <input type="number"value={num} onChange={(e)=>setNum(e.target.value)} />
            <button onClick={()=>setNum(0)}>Reset</button>
            <h3>This is num {num}</h3>
        </div>
    )
}
export default UseCallback;