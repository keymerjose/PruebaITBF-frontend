import { useEffect, useState } from "react";
import { getTypesRoom } from "../room_types/helpers/getTypesRooms";

export const useGetAllTypesRoom = () => {
    const [TypesRoom, setTypesRoom] = useState([]);

    const GetAllTypesRoom = async() => {
        const __typesRoom = await getTypesRoom();
        setTypesRoom(__typesRoom);
    }

    useEffect( () => {
        GetAllTypesRoom();
    }, []);

    return{
        TypesRoom, setTypesRoom
    }
}