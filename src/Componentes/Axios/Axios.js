import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const Vehiculos = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/Tracelink/conexion.php');
                setData(response.data);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
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
                            <tbody>
                                <tr>
                                    <td>{v.id}</td>
                                    <td>{v.marca}</td>
                                    <td>{v.modelo}</td>
                                    <td>{v.anio}</td>
                                    <td>{v.transmision}</td>
                                    <td>{v.patente}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Vehiculos;
