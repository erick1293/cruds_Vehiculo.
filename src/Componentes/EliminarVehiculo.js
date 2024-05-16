import React from 'react';
import Table from 'react-bootstrap/Table';{}

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
          </tr>
      </thead>
      <tbody>
          {vehiculos.map(({id,marca,modelo,anio,patente})=>
              (
                <tr>
                  <td>{id}</td>
                  <td>{marca}</td>
                  <td>{modelo}</td>
                  <td>{anio}</td>
                  <td>{patente}</td>  
              </tr>
              )
          )}
      </tbody>
  </Table>

                        {v.marca} {v.modelo} <button onClick={() => handleDelete(v.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EliminarVehiculo;
