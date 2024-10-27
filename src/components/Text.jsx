import React, { useState } from 'react'
import Draggable from "react-draggable"
function Text() {
    const [editmode,setEditmode]=useState(false);
    const [val,setVal]=useState("Double click to Edit");
    return (
        <Draggable>
        {
            editmode? (<input onDoubleClick={(e)=> setEditmode(false)} value={val} onChange={(e)=>setVal(e.target.value)}/>)
            :(
                <h1 onDoubleClick={(e)=> setEditmode(true)}>{val}</h1>
            )
        }
        </Draggable>
    )
}

export default Text