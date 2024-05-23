import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import AgregarVehiculo from './AgregarVehiculo';
import ModificarVehiculo from './ModificarVehiculo';
import EliminarVehiculo from './EliminarVehiculo';
import MostrarVehiculos from './MostrarVehiculos';

const SeccionCRUD = () => {
    const [vehiculos, setVehiculos] = useState([]);


    return (
        <Tabs defaultActiveKey="agregar" id="crud-tabs">
            <Tab eventKey="agregar" title="Agregar">
                <AgregarVehiculo setVehiculos={setVehiculos} vehiculos={vehiculos} />
            </Tab>
            <Tab eventKey="modificar" title="Modificar">
            <ModificarVehiculo 
                vehiculos={vehiculos} 
                setVehiculos={setVehiculos}
            />
            </Tab>
            <Tab eventKey="eliminar" title="Eliminar">
                <EliminarVehiculo vehiculos={vehiculos} setVehiculos={setVehiculos} />
            </Tab>
            <Tab eventKey="mostrar" title="Mostrar">
                <MostrarVehiculos vehiculos={vehiculos} />
            </Tab>
        </Tabs>
        
    );
};

export default SeccionCRUD;

