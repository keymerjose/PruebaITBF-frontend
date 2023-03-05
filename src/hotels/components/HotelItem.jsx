import React from 'react'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2';

export const HotelItem = ({ id, name, number_rooms }) => {
  const delete_hotel= (id) => {
    fetch(`http://localhost:8000/api/hotels/${id}`, {
      method: 'DELETE'
    })
    .then( r => r.json() )
    .then( r => {
      console.log(r);
      Swal.fire({
        icon: 'success',
        title: 'Hoteles',
        text: r.msg
    }).then( () => {
      window.location.reload();
    } );
    } )
    .catch( err => console.log(err) );
  }

  return (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{number_rooms}</td>
        <td><NavLink className={'btn btn-primary text-white'} to={`/config/${id}`}>Configurar</NavLink></td>
        <td><a className='btn btn-danger text-white' onClick={ () => delete_hotel(id) }>Eliminar</a></td>
    </tr>
  )
}
