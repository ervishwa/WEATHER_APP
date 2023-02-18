import React, { useEffect, useState } from 'react'
import { WeatherCard } from '../../components/WeatherCard/WeatherCard';

export function Home() {

    const [state, setState] = useState("");
    const ChangeValue = (event) => {

        setState(event.target.value);
    }

    // useEffect(()=>{
    //     console.log("gai");
        
    // },[])
    //console.log(state);

    return (
        <div className='home'>
            <input type="text" placeholder='Enter Your City Name' value={state} onChange={ChangeValue}></input>
            <button>Fetch Data</button>

            <WeatherCard place={state}></WeatherCard>
        </div>

    )
}

