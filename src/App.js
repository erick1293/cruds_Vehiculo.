import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SeccionCRUD from './Componentes/Vehiculo/SeccionCRUD';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Gestión de Vehículos</h1>
            </header>
            <main>
                <SeccionCRUD/>
            </main>
        </div>
    );
}

export default App;

