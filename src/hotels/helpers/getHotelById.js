export const getHotelById = async(id) => {
    const resp = await fetch( 'http://localhost:8000/api/hotels/'+id);
    const { data } = await resp.json();
    return data;
}