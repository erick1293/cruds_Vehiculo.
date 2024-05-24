import React, { useState } from 'react';
import axios from 'axios';

const AgregarVehiculo = ({ onAgregar }) => {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [anio, setAnio] = useState('');
    const [transmision, setTransmision] = useState('');
    const [patente, setPatente] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost/Tracelink/agregar_vehiculo.php', {
                marca,
                modelo,
                anio,
                transmision,
                patente
            });
            onAgregar(response.data); // Actualiza el estado de la lista de vehículos con el nuevo vehículo
            // Reinicia los campos del formulario después de agregar el vehículo
            setMarca('');
            setModelo('');
            setAnio('');
            setTransmision('');
            setPatente('');
        } catch (error) {
            console.error('Error al agregar vehículo:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Marca:
                <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
            </label>
            <label>
                Modelo:
                <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
            </label>
            <label>
                Año:
                <input type="text" value={anio} onChange={(e) => setAnio(e.target.value)} />
            </label>
            <label>
                Transmisión:
                <input type="text" value={transmision} onChange={(e) => setTransmision(e.target.value)} />
            </label>
            <label>
                Patente:
                <input type="text" value={patente} onChange={(e) => setPatente(e.target.value)} />
            </label>
            <button type="submit">Agregar Vehículo</button>
        </form>
    );
};

export default AgregarVehiculo;
