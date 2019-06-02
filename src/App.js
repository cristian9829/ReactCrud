import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './components/header';
import Productos from './components/productos';
import Producto from './components/producto';
import EditarProducto from './components/editarProducto';
import AgregarProducto from './components/agregarProducto';
import { async } from 'q';

function App() {

  const [producto, guardarProducto] = useState([])
  const [recargarProductos, guardarRecargarProductos] = useState(true);

  useEffect(() =>{
    if(recargarProductos){
      const consultarApi = async () => {
        //consultar la api de json-server
        let resultado = await axios.get("http://localhost:4000/resturant")
        
        guardarProducto(resultado.data);
      }
      consultarApi();

      //Cambiar a false la recarga de los productos
      guardarRecargarProductos(false);
    }
  }, [recargarProductos])

  return (
    <div className="App">
      <Router>
        <Header/>
        <main className="container mt-5">
        <Switch>
          <Route exact path="/productos" 
            render={ () =>(
              <Productos
                productos = {producto}
                guardarRecargarProductos = {guardarRecargarProductos}
              />
            ) } 
          />
          <Route exact path="/producto/nuevo" 
          render={ () =>(
            <AgregarProducto
              guardarRecargarProductos = {guardarRecargarProductos}
            />
          )} />
          <Route exact path="/producto/:id" component={Producto} />
          <Route exact path="/productos/editar/:id" render={props =>{
            //Tomar el id del producto
            const idProducto = parseInt(props.match.params.id);
            
            //El producto que se pasa state
            const productoEdit = producto.filter(producto => producto.id === idProducto);

            return(
              <EditarProducto
                producto = {productoEdit[0]}
                guardarRecargarProductos = {guardarRecargarProductos}
              />
            )
          }} />
        </Switch>
        </main>
        <p className="mt-4 p2 text-center">Todos los derechos reservados</p>
      </Router>
    </div>
  );
}

export default App;
