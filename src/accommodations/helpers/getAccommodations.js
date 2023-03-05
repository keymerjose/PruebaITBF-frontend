export const getAccommodations = async() => {
    const resp = await fetch( 'http://localhost:8000/api/accommodations')
    const { data } = await resp.json();
    const accommodations = data.map( accommodation => ({
        'id': accommodation.id,
        'name': accommodation.name,
    }));
    return accommodations;
}