import { memo } from "react"

const Update_Number = ({value}) => {
    console.log("number 1")
    return (
        <div>
            <h2>This is Number {value}</h2>

        </div>
    )
}
export default memo(Update_Number)