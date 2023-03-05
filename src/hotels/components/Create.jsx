import { CityGrid } from "../../cities/components/CityGrid"
import Swal from 'sweetalert2';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const Create = () => {
    const navigate = useNavigate();
    
    const onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData( document.getElementById('formCreateHotel') );
        fetch( 'http://localhost:8000/api/hotels', {
            method: 'POST',
            cors: 'cors',
            body: formData
        } )
        .then( r => r.json() )
        .then( r => {
            console.log(r);
            let icon = 'success';
            let msg = r.msg;
            if( r.error == true ){
                icon = 'error';
                msg = r.errors;
            }

            Swal.fire({
                icon,
                title: 'Crear Hotel',
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
    <>
        <div className="row">
            <div className="col-12">
                <h1>Crear Hotel</h1>
                <hr />
            </div>
            <div className="col-12">
                <form className="form-row" action="POST" onSubmit={ onSubmit } id="formCreateHotel">
                    <div className="form-group col-12 col-sm-12 col-md-4 col-lg-4">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" id="name" className="form-control" />
                    </div>
                    <div className="form-group col-12 col-sm-12 col-md-4 col-lg-4">
                        <label htmlFor="direction">Dirección</label>
                        <input type="text" name="direction" id="direction" className="form-control" />
                    </div>
                    <div className="form-group col-12 col-sm-12 col-md-4 col-lg-4">
                        <label htmlFor="city_id">Ciudad</label>
                        <CityGrid/>
                    </div>
                    <div className="form-group col-12 col-sm-12 col-md-4 col-lg-4">
                        <label htmlFor="nit">NIT</label>
                        <input type="text" name="nit" id="nit" className="form-control" />
                    </div>
                    <div className="form-group col-12 col-sm-12 col-md-4 col-lg-4">
                        <label htmlFor="number_rooms">Número de habitaciones</label>
                        <input type="text" name="number_rooms" id="number_rooms" className="form-control" />
                    </div>
                    <div className="form-group col-12 col-sm-12 col-md-4 col-lg-4 mt-4">
                        <NavLink className={'btn btn-secondary text-white mr-2'} to="/">Regresar</NavLink>
                        <button type="submit" className="btn btn-primary" >Guardar</button>
                    </div>
                </form>
               
            </div>
        </div>
    </>
  )
}
