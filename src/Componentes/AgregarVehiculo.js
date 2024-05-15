import React, { useState } from 'react';

const AgregarVehiculo = ({ setVehiculos, vehiculos }) => {
    const [vehiculo, setVehiculo] = useState({ marca: '', modelo: '', año: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVehiculo({ ...vehiculo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setVehiculos([...vehiculos, { ...vehiculo, id: vehiculos.length + 1 }]);
        setVehiculo({ marca: '', modelo: '', año: '' });
    };

    return (
        <div>
            <h2>Agregar Vehículo</h2>
            <form onSubmit={handleSubmit}>
                <input name="marca" value={vehiculo.marca} onChange={handleChange} placeholder="Marca" />
                <input name="modelo" value={vehiculo.modelo} onChange={handleChange} placeholder="Modelo" />
                <input name="año" value={vehiculo.año} onChange={handleChange} placeholder="Año" />
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
};

export default AgregarVehiculo;
