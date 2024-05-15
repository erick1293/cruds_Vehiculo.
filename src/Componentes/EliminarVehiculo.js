import React from 'react';

const EliminarVehiculo = ({ vehiculos, setVehiculos }) => {
    const handleDelete = (id) => {
        const updatedVehiculos = vehiculos.filter(vehiculo => vehiculo.id !== id);
        setVehiculos(updatedVehiculos);
    };

    return (
        <div>
            <h2>Eliminar Vehículo</h2>
            <ul>
                {vehiculos.map(v => (
                    <li key={v.id}>
                        {v.marca} {v.modelo} <button onClick={() => handleDelete(v.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EliminarVehiculo;
