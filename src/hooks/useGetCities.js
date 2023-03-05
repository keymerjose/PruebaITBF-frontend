import { useEffect, useState } from "react";
import { getCities } from "../cities/helpers/getCities";

export const useGetCities = () => {
    const [cities, setCities] = useState([]);

    const GetAllHotels = async() => {
        const data = await getCities();
        setCities(data);
    }

    useEffect( () => {
        GetAllHotels();
    }, []);

    return{
        cities,
        setCities
    }
}