import { useEffect, useState } from "react";
import { getAccommodations } from "../accommodations/helpers/getAccommodations";

export const useGetAllAccommodations = () => {
    const [Accommodations, setAccommodations] = useState([]);

    const GetAllAccommodations = async() => {
        const __typesRoom = await getAccommodations();
        setAccommodations(__typesRoom);
    }

    useEffect( () => {
        GetAllAccommodations();
    }, []);

    return{
        Accommodations, setAccommodations
    }
}