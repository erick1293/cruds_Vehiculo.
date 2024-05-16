import React, { useState } from 'react';

const ModificarVehiculo = ({ vehiculos, setVehiculos }) => {
    const [id, setId] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [anio, setAnio] = useState('');
    const [transmision, setTransmision] = useState('');
    const [patente, setPatente] = useState('');

    const handleChange = (e) => {
        const vehiculo = vehiculos.find(v => v.id === e.target.value);
        setId(e.target.value);
        setMarca(vehiculo ? vehiculo.marca : '');
        setModelo(vehiculo ? vehiculo.modelo : '');
        setAnio(vehiculo ? vehiculo.anio : '');
        setTransmision(vehiculo ? vehiculo.transmision : '');
        setPatente(vehiculo ? vehiculo.patente : '');
    };

    const handleModificar = () => {
        if (!id) {
            console.error('No se ha seleccionado ningún vehículo para modificar.');
            return;
        }

        const updatedVehiculos = vehiculos.map(v => {
            if (v.id === id) {
                return {
                    ...v,
                    marca,
                    modelo,
                    anio,
                    transmision,
                    patente
                };
            }
            return v;
        });

        setVehiculos(updatedVehiculos);
        console.log('Vehículo modificado:', updatedVehiculos.find(v => v.id === id));

        setId('');
        setMarca('');
        setModelo('');
        setAnio('');
        setTransmision('');
        setPatente('');
    };

    return (
        <div>
            <h2>Modificar Vehículo</h2>
            <select onChange={handleChange} value={id}>
                <option value="">Seleccione un vehículo</option>
                {vehiculos.map(v => (
                    <option key={v.id} value={v.id}>{v.marca} {v.modelo}</option>
                ))}
            </select>
            {id && (
                <div>
                    <input type="text" placeholder="Marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
                    <input type="text" placeholder="Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                    <input type="text" placeholder="Año" value={anio} onChange={(e) => setAnio(e.target.value)} />
                    <input type="text" placeholder="Transmisión" value={transmision} onChange={(e) => setTransmision(e.target.value)} />
                    <input type="text" placeholder="Patente" value={patente} onChange={(e) => setPatente(e.target.value)} />
                    <button onClick={handleModificar}>Modificar</button>
                </div>
            )}
        </div>
    );
};

export default ModificarVehiculo;


// <div>
//        <select onChange={handleChange} value={id}>
//          <option value="">Seleccione un vehículo</option>
//        {vehiculos.map(v => (
//          <option key={v.id} value={v.id}>{v.marca} {v.modelo}</option>
//    ))}
// </select>
// </div>


