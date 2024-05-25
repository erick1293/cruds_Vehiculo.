import React, { useState } from 'react';
import axios from './axiosConfig';

const AgregarVehiculo = ({ onAgregar }) => {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [anio, setAnio] = useState('');
    const [transmision, setTransmision] = useState('');
    const [patente, setPatente] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!marca || !modelo || !anio || !transmision || !patente) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        try {
            const response = await axios.post('/agregar_vehiculo.php', {
                marca,
                modelo,
                anio,
                transmision,
                patente
            });

            // Verificar si onAgregar es una función antes de llamarla
            if (typeof onAgregar === 'function') {
                onAgregar(response.data);
            }

            // Limpiar el formulario y los errores después de agregar el vehículo
            setMarca('');
            setModelo('');
            setAnio('');
            setTransmision('');
            setPatente('');
            setError(null);
        } catch (error) {
            setError('Error al agregar vehículo: ' + error.message);
            console.error('Error al agregar vehículo:', error);
        }
    };

    return (
        <div>
            <h2>Agregar Vehículo</h2>
            <form onSubmit={handleSubmit}>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div>
                    <label>Marca:</label>
                    <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
                </div>
                <div>
                    <label>Modelo:</label>
                    <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                </div>
                <div>
                    <label>Año:</label>
                    <input type="text" value={anio} onChange={(e) => setAnio(e.target.value)} />
                </div>
                <div>
                    <label>Transmisión:</label>
                    <input type="text" value={transmision} onChange={(e) => setTransmision(e.target.value)} />
                </div>
                <div>
                    <label>Patente:</label>
                    <input type="text" value={patente} onChange={(e) => setPatente(e.target.value)} />
                </div>
                <button type="submit">Agregar Vehículo</button>
            </form>
        </div>
    );
};

export default AgregarVehiculo;

