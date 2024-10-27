import React, { useEffect, useState } from 'react'
import MemeCard from '../components/Card'
import { getAllMemes } from '../api/memes'
function Home() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        getAllMemes().then(memes => {
            setdata(memes.data.memes)
        })
    }, []);
    console.log(data.map(el => el.url));

    return (
        <div className='row'>
            {
                data.map((el) => (<MemeCard img={el.url} title={el.name} />)
                )}
        </div>
    )
}

export default Home