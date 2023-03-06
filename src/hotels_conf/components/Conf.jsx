import { useGetAllAccommodations } from "../../hooks/useGetAllAccommodations";
import { useGetAllTypesRoom } from "../../hooks/useGetAllTypesRoom"
import $ from 'jquery';
import { NavLink, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useGetHotels } from "../../hooks/useGetHotels";
import { useGetHotelById } from "../../hooks/useGetHotelById";

export const Conf = () => {
    const { TypesRoom } = useGetAllTypesRoom();
    const { Accommodations } = useGetAllAccommodations();
    const { hotel_id } = useParams();
    const { hotel } = useGetHotelById(hotel_id);
    
    let accommodation1   = 'N/A';
    let type_room1           = 'N/A';
    let amount1              = '0';

    let accommodation2   = 'N/A';
    let type_room2           = 'N/A';
    let amount2              = '0';

    let accommodation3   = 'N/A';
    let type_room3           = 'N/A';
    let amount3              = '0';


    if( hotel[0].config?.length != undefined ){
        accommodation1       = Accommodations.find( e => e.id == hotel[0].config[0].accommodation_id).name;
        type_room1           = TypesRoom.find( e => e.id == hotel[0].config[0].room_types_id).name;
        amount1              = hotel[0].config[0].amount;

        accommodation2      = Accommodations.find( e => e.id == hotel[0].config[1].accommodation_id).name;
        type_room2          = TypesRoom.find( e => e.id == hotel[0].config[1].room_types_id).name;
        amount2             = hotel[0].config[1].amount;

        accommodation3      = Accommodations.find( e => e.id == hotel[0].config[2].accommodation_id).name;
        type_room3          = TypesRoom.find( e => e.id == hotel[0].config[2].room_types_id).name;
        amount3             = hotel[0].config[2].amount;
    }
    
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        const tr = document.querySelectorAll('#tableConf tbody tr');
        const data = [];
        
        tr.forEach( (e, i) => {
            data.push({
                accommodation_id: e.children[0].children[0].value,
                room_types_id: e.children[1].children[0].value,
                amount: e.children[2].children[0].value,
                hotel_id: e.children[3].children[0].value,
            });
        } );
        console.log(data);
        fetch( `http://localhost:8000/api/hotel-conf/${hotel_id}`, {
            method: 'POST',
            cors: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        } )
        .then( r => r.json() )
        .then( r => {
            console.log(r);
            let icon = 'success';
            let msg = r.msg;
            if( r.error == true ){
                icon = 'error';
                msg = r.msg ?? r.errors;
            }

            Swal.fire({
                icon,
                title: 'Configuración',
                text: msg
            })
            .then( () => {
                if( r.error == false ){
                    navigate('/', {
                        replace: true
                    });
                }
            } );
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="row">
            <div className="col-12">
                <h1>Configuración</h1>
            </div>
            <div className="col-12">
                <form className="form-row" method="post" onSubmit={ onSubmit } id="formConf">
                    <div className="table-responsive">
                        <table className="table table-sm text-center" id="tableConf">
                            <thead>
                                <tr>
                                    <th>Acomodación</th>
                                    <th>Tipo de Habitación</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <select name="conf[1][accommodation_id]" className="form-control">
                                            {
                                                Accommodations.map( (a) =>(
                                                    <option key={a.id} value={a.id}>{a.name}</option>
                                                ) )
                                            }
                                        </select>
                                    </td>
                                    <td>
                                        <select name="conf[1][room_types_id]" className="form-control">
                                            {
                                                TypesRoom.map( (t) =>(
                                                    <option key={t.id} value={t.id}>{t.name}</option>
                                                ) )
                                            }
                                        </select>
                                    </td>
                                    <td>
                                        <input type="number" name="conf[1][amount]" className="form-control" />
                                    </td>
                                    <td>
                                        <input type="hidden" name="conf[1][hotel_id]" className="form-control" value={hotel_id} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <select name="conf[2][accommodation_id]" className="form-control">
                                            {
                                                Accommodations.map( (a) =>(
                                                    <option key={a.id} value={a.id}>{a.name}</option>
                                                ) )
                                            }
                                        </select>
                                    </td>
                                    <td>
                                        <select name="conf[2][room_types_id]" className="form-control">
                                            {
                                                TypesRoom.map( (t) =>(
                                                    <option key={t.id} value={t.id}>{t.name}</option>
                                                ) )
                                            }
                                        </select>
                                    </td>
                                    <td>
                                        <input type="number" name="conf[2][amount]" className="form-control" />
                                    </td>
                                    <td>
                                        <input type="hidden" name="conf[2][hotel_id]" className="form-control" value={hotel_id} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <select name="conf[3][accommodation_id]" className="form-control">
                                            {
                                                Accommodations.map( (a) =>(
                                                    <option key={a.id} value={a.id}>{a.name}</option>
                                                ) )
                                            }
                                        </select>
                                    </td>
                                    <td>
                                        <select name="conf[3][room_types_id]" className="form-control">
                                            {
                                                TypesRoom.map( (t) =>(
                                                    <option key={t.id} value={t.id}>{t.name}</option>
                                                ) )
                                            }
                                        </select>
                                    </td>
                                    <td>
                                        <input type="number" name="conf[3][amount]" className="form-control" />
                                    </td>
                                    <td>
                                        <input type="hidden" name="conf[3][hotel_id]" className="form-control" value={hotel_id} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-sm">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Acomodación</th>
                                    <th>Tipo de Habitación</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{accommodation1}</td>
                                    <td>{type_room1}</td>
                                    <td>{amount1}</td>
                                </tr>
                                <tr>
                                    <td>{accommodation2}</td>
                                    <td>{type_room2}</td>
                                    <td>{amount2}</td>
                                </tr>
                                <tr>
                                    <td>{accommodation3}</td>
                                    <td>{type_room3}</td>
                                    <td>{amount3}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="form-group col-12">
                    <NavLink className={'btn btn-secondary text-white mr-2'} to="/">Regresar</NavLink>
                        <button type="submit" className="btn btn-primary text-white">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
