import { useState, useCallback } from "react";
import ListItem from "./List";

const UseCallback = () => {
    const [num, setNum] = useState(0);
    const [dark, setDark] = useState(true);
    const styling = {
        backgroundColor: dark ? "black" : "white", color: dark ? "white" : "black"
    };
    const getItem = useCallback((inc) => {
        return [num + inc + 1, num + inc + 2, num + inc + 3, num + inc + 5];
    }, [num]);

    return (
        <div style={styling}>
            <h2>This is Callback</h2>
            <input type="number" value={num} onChange={(e) => setNum(Number(e.target.value))} />
            <button onClick={() => setNum(0)}>Reset</button>
            <button onClick={() => setDark(curTheme => !curTheme)}>Change Theme</button>
            <h3>This is num {num}</h3>
            <ListItem func1={getItem} />
        </div>
    );
};

export default UseCallback;