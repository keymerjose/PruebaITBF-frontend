import { Route, Routes } from "react-router-dom"
import { Container } from "../hotels/components/Container"
import { Create } from "../hotels/components/Create"
import { Conf } from "../hotels_conf/components/Conf"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="create" element={<Create/>}/>
            <Route path="/config/:hotel_id" element={<Conf/>}/>
            <Route path="/" element={<Container/>}/>
        </Routes>
    )
}
