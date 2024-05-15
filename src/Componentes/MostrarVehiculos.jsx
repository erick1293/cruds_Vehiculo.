import React from 'react';

const MostrarVehiculos = ({ vehiculos }) => {
    return (
        <div>
            <h2>Lista de Vehículos</h2>
            <ul>
                {vehiculos.map(v => (
                    <li key={v.id}>{v.marca} {v.modelo}</li>
                ))}
            </ul>
        </div>
    );
};

export default MostrarVehiculos;

