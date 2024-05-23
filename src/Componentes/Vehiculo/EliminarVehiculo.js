import React from 'react';
import Table from 'react-bootstrap/Table'; 

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

                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>MARCA</th>
                                    <th>MODELO</th>
                                    <th>AÑO</th>
                                    <th>PATENTE</th>
                                    <th>Transmision</th>
                                    <th>accion</th>
                                </tr>
                            </thead>
                            <thead>
                                <tr>
                                    <th> {v.id} </th>
                                    <th>{v.marca}</th>
                                    <th>{v.modelo}</th>
                                    <th>  {v.anio}</th>
                                    <th>  {v.patente}</th>
                                    <th>  {v.transmision}</th>
                                    <button onClick={() => handleDelete(v.id)}>Eliminar</button>
                                </tr>
                            </thead></Table>  
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EliminarVehiculo;
