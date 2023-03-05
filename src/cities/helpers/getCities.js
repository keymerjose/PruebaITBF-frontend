export const getCities = async() => {
    const resp = await fetch('http://localhost:8000/api/cities');
    const { cities } = await resp.json();
    const __cities = cities.map( city => ({
        'id': city.id,
        'name': city.name
    }) );
    return __cities;
}