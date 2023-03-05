import { useGetHotels } from '../../hooks/useGetHotels';
import { HotelItem } from './HotelItem';

export const HotelGrid = () => {
    const { hotels, setHotels } = useGetHotels();
    return (
        <tbody>
            {
                hotels.map( (hotel) => (
                    <HotelItem key={hotel.id} {...hotel} />
                ) )
            }
        </tbody>
    )
}
