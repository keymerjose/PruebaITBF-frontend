import { useEffect, useState } from "react";
import { getHotels } from "../hotels/helpers/getHotels";


export const useGetHotels = () => {
    const [hotels, setHotels] = useState([]);

    const __getHotels = async() => {
        const newHotels = await getHotels();
        setHotels(newHotels);
    }

    
    
    useEffect( () => {
        __getHotels();
    }, []);
    

    return {
        hotels,
        setHotels
    }
}