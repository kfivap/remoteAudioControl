import React, {useEffect, useState} from 'react';
import {getVolume, setVolume} from "./http/volumeAPI";
import './VolumeControl.css'

const VolumeControl = () => {

    const [volumeState, setVolumeState] = useState(0)
    const [changeDate, setChangeDate] = useState(Date.now())


    async function fetchVolume(){
        let volumeLevel = await getVolume()
        console.log(volumeLevel)
        setVolumeState(volumeLevel.volumeLevel)
    }


    const volumeChangeHandler = (value)=> {
        setVolumeState(value)
    }

    useEffect(()=>{
        let timeout = setTimeout(async ()=>{
            await  setVolume(volumeState)
            await fetchVolume()

        }, 120)
        return (()=>clearTimeout(timeout))

    }, [volumeState])


    useEffect(()=>{
        fetchVolume()
    }, [])


    return (
        <div>
          <h1> {volumeState}</h1>
            <div className="slider">
            <div className="container-slider">
                <input type="range"
                       orient="vertical"
                       id="sss"
                       className={'slider'}
                       value={volumeState}
                       onChange={(e)=>volumeChangeHandler(e.target.value)}
                       min="0" max="100"/>
            </div>
            </div>




        </div>
    );
};

export default VolumeControl;