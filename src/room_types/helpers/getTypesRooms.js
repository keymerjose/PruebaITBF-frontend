export const getTypesRoom = async() => {
    const resp = await fetch( 'http://localhost:8000/api/types-rooms')
    const { data } = await resp.json();
    const typesRooms = data.map( typesRoom => ({
        'id': typesRoom.id,
        'name': typesRoom.name,
    }));
    return typesRooms;
}