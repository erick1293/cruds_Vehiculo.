import React from 'react';
import { FormularioVehiculo } from './FormularioVehiculo';

const AgregarVehiculo = ({ setVehiculos, vehiculos }) => {
    return (
        <div>
            <h2>Agregar Vehículo</h2>
            <FormularioVehiculo setVehiculos={setVehiculos} vehiculos={vehiculos} vehiculo={{}} setVehiculo={() => {}} />
        </div>
    );
};

export default AgregarVehiculo;
