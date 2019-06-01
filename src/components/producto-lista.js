import React from 'react';
import { Link } from 'react-router-dom';

const ProductoLista = ({producto}) =>{
  const eliminarProducto = id =>{
    console.log("Elimnando", id)
    //Todo: Eliminar los registros
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