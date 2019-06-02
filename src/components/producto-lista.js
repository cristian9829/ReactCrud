import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const ProductoLista = ({producto, guardarRecargarProductos}) =>{
  const eliminarProducto = id =>{
    console.log("Elimnando", id)
    //Todo: Eliminar los registros
    Swal.fire({
      title: 'Estas seguro de eliminar el producto?',
      text: "Un Platillo eliminado no se puede recuperar!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText : 'Cancelar'
    }).then(async (result) => {
      if (result.value) {
         

        try{
          const url = ` http://localhost:4000/resturant/${id}`;
          const resultado = await axios.delete(url)

          if(resultado.status === 200){
            Swal.fire(
              'Eliminado!',
              'El producto se ha eliminado',
              'success'
            )
            //consultar la api nuevamente
            guardarRecargarProductos(true)
          }
        }catch(error){
          console.log(error); 
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'Hubo un error vuelve a intentarlo!',
          })
        }
      }
    })
  }
  return(
    <li data-categoria={producto.categoria} className="list-group-item d-flex justify-content-between align-items-center">
      <p>
        {producto.nombrePlatillo} { ' '}
        <span className="font-weight-bold">$ {producto.precioPlatillo}</span>
      </p>

      <div>
        <Link
          to={`/productos/editar/${producto.id}`}
          className="btn btn-success mr-2"
        >Editar</Link>
        <button
          type="button"
          className="btn btn-danger"
          onClick = {() => eliminarProducto(producto.id )}
        >Elimnar &times;</button>
      </div>
    </li>
  )
}

export default ProductoLista;