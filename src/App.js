import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Productos from './components/productos';
import Producto from './components/producto';
import EditarProducto from './components/editarProducto';
import AgregarProducto from './components/agregarProducto';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/nuevo-producto" component={AgregarProducto} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/producto/:id" component={Producto} />
          <Route exact path="/productos/editar/:id" component={EditarProducto } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
