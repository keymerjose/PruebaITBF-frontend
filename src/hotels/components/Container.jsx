import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HotelGrid } from "./HotelGrid";
export const Container = () => {
  return (
    <>
        <div className="row">
            <div className="col-12">
                <h1>Hoteles</h1>
            </div>
            <div className="col-12">
                <div className="table-responsive">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th colSpan={5}>
                                    <NavLink className={'btn btn-primary text-white'} to="/create">
                                        Agregar
                                    </NavLink>
                                </th>
                            </tr>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Cantidad de Habitaciones</th>
                                <th>Configuración</th>
                                <th colSpan={2}>Eliminar</th>
                            </tr>
                        </thead>
                        <HotelGrid/>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}
