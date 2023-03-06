import { useEffect, useState } from "react";
import { getHotelById } from "../hotels/helpers/getHotelById";

export const useGetHotelById = (id) => {
    const [hotel, setHotel] = useState([]);

    const __getHotels = async() => {
        const newHotels = await getHotelById(id);
        setHotel(newHotels);
    }

    
    
    useEffect( () => {
        __getHotels();
    }, []);
    

    return {
        hotel,
        setHotel
    }
}