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

  useEffect(() =>{
    const consultarApi = async () => {
      //consultar la api de json-server
      let resultado = await axios.get("http://localhost:4000/resturant")
      
      guardarProducto(resultado.data);
    }

    consultarApi();
  }, [])

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
              />
            ) } 
          />
          <Route exact path="/producto/nuevo" component={AgregarProducto} />
          <Route exact path="/producto/:id" component={Producto} />
          <Route exact path="/productos/editar/:id" component={EditarProducto } />
        </Switch>
        </main>
        <p className="mt-4 p2 text-center">Todos los derechos reservados</p>
      </Router>
    </div>
  );
}

export default App;
