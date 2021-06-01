import {$authHost, $host} from "./index";

export const setVolume = async (volumeValue) =>{

    const {data} = await $host.put
    (`api/volume/set/`, { volumeValue})

    return data
}
export const getVolume = async () =>{

    const {data} = await $host.get
    (`api/volume/get/`)

    return data
}
