import { useGetCities } from "../../hooks/useGetCities";
import { CityItem } from "./CityItem";

export const CityGrid = () => {
    const { cities } = useGetCities();
    return (
        <select name="city_id" id="city_id" className="form-control">
            {
                cities.map( (city) => (
                    <CityItem key={city.id} {...city}/>
                ) )
            }
        </select>
    )
}
