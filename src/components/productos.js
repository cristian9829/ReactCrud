import React, {Fragment} from 'react';
import ProductoLista from './producto-lista';


const Productos = ({productos, guardarRecargarProductos }) =>{
  return(
    <Fragment>
      <h1 className="text-center">Productos</h1>
      <ul className="list-group mt-5">
        {productos.map( producto => (
          <ProductoLista
            guardarRecargarProductos = {guardarRecargarProductos}
            key = {producto.id}
            producto = {producto}
          />
        ))}      
      </ul> 
    </Fragment>
  )
}

export default Productos;