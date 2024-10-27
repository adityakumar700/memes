import React, { useState,createRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import {exportComponentAsJPEG} from "react-component-export-image"

import Text from '../components/Text'
function Edit() {
    const [params] = useSearchParams()
    const [count, setcount] = useState(0)
    const memref=createRef();
    const addText = () => {
        setcount(count + 1)
    }
    console.log(params.get('url'));

    return (
        <div>
            <div style={{width :"700px",border:"1px solid"}} ref={memref} className='meme mt-7 mb-8'>
            <img src={params.get('url')} width='300px'></img>
            {
                Array(count).fill(0).map(e => <Text />)
            }
            </div>
            <button className="add" onClick={addText}>AddText</button>
            <br>
            </br>
            <button className='sav' variant="success" onClick={(e)=>exportComponentAsJPEG(memref)}>Save</button>
        </div>

    )
}

export default Edit