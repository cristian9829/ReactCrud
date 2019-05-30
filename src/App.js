import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Productos from './components/productos';
import Producto from './components/producto';
import EditarProducto from './components/editarProducto';
import AgregarProducto from './components/agregarProducto';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <main className="container mt-5">
        <Switch>
          <Route exact path="/nuevo-producto" component={AgregarProducto} />
          <Route exact path="/productos" component={Productos} />
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
