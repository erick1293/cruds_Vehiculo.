import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
const Vehiculos = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost/Tracelink/conexion.php')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Vehículos</h1>
            <ul>
                {data.map(v => (
                    <li key={v.id}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>MARCA</th>
                                    <th>MODELO</th>
                                    <th>AÑO</th>
                                    <th>Transmision</th>
                                    <th>PATENTE</th>
                                </tr>
                            </thead>
                            <thead>
                                <tr>
                                    <th> {v.id} </th>
                                    <th>{v.marca}</th>
                                    <th>  {v.modelo}</th>
                                       <th>  {v.anio}</th>
                                    <th>  {v.transmision}</th>
                                    <th> {v.patente}</th>
                                </tr>
                            </thead></Table>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Vehiculos;