import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModificarVehiculo from './Componentes/Axios/Modificar_vehiculos';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Gestión de Vehículos</h1>
            </header>
            <main>
                <ModificarVehiculo/>
            </main>
        </div>
    );
}

export default App;

