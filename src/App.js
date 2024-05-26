import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModificarVehiculo from './Componentes/Axios/Modificar_vehiculos';
import AgregarVehiculo from './Componentes/Axios/Agregar_axios';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Agregar Vehiculo</h1>
            </header>
            <main>
            <AgregarVehiculo/>
                <ModificarVehiculo/>
            </main>
        </div>
    );
}

export default App;

