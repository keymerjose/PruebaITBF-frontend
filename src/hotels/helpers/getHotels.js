export const getHotels = async() => {
    const resp = await fetch( 'http://localhost:8000/api/hotels')
    const { data } = await resp.json();
    const hotels = data.map( hotel => ({
        'id': hotel.id,
        'name': hotel.name,
        'direction': hotel.direction,
        'city_id': hotel.city_id,
        'nit': hotel.nit,
        'number_rooms': hotel.number_rooms
    }));
    return hotels;
}