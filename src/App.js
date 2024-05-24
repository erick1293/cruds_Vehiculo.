import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SeccionCRUD from './Componentes/Vehiculo/SeccionCRUD';
import Agregar from './Componentes/Axios/Agregar_axios';
import Axios from './Componentes/Axios/Axios';
import AgregarVehiculo from './Componentes/Axios/Agregar_axios';



function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Gestión de Vehículos</h1>
            </header>
            <main>
                <SeccionCRUD/>
  <AgregarVehiculo/>
                <Axios/>
            </main>
        </div>
    );
}

export default App;

