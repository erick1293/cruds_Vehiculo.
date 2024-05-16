import React from 'react';

const MostrarVehiculos = ({ vehiculos }) => {
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
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <th> {v.id} </th>
                                <th>{v.marca}</th>
                                <th>  {v.modelo}</th>
                                <th>  {v.anio}</th>
                                <th> {v.patente}</th>
                            </tr>
                        </thead></Table>  
                </li>
            ))}
        </ul>
    </div>
    );
};

export default MostrarVehiculos;

