import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from 'uuid';

export const FormularioVehiculo = ({ setVehiculos, vehiculos, vehiculo, setVehiculo }) => {
    const [marca, setMarca] = useState(vehiculo.marca || '');
    const [modelo, setModelo] = useState(vehiculo.modelo || '');
    const [anio, setAnio] = useState(vehiculo.anio || '');
    const [transmision, setTransmision] = useState(vehiculo.transmision || 'automatic');
    const [patente, setPatente] = useState(vehiculo.patente || '');

    const handleRegistro = () => {
        setVehiculos([...vehiculos, {
            'id': uuid(),
            'marca': marca,
            'modelo': modelo,
            'anio': anio,
            'transmision': transmision,
            'patente': patente,
        }]);
    }

    const handleUpdate = (campo, valor) => {
        setVehiculo({ ...vehiculo, [campo]: valor });
    }

    return (
        <Form  visible={true} banco="" > 
            <Form.Group>
                <Form.Label>Marca: </Form.Label>
                <Form.Control type="text" name="marca" placeholder="Ingrese la marca" onChange={(e) => { setMarca(e.target.value); handleUpdate(e.target.name, e.target.value); }} value={marca} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Modelo: </Form.Label>
                <Form.Control type="text" name="modelo" placeholder="Ingrese el modelo" onChange={(e) => { setModelo(e.target.value); handleUpdate(e.target.name, e.target.value); }} value={modelo} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Año: </Form.Label>
                <Form.Control type="text" name="anio" placeholder="Ingrese el año" onChange={(e) => { setAnio(e.target.value); handleUpdate(e.target.name, e.target.value); }} value={anio} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Transmisión:</Form.Label>
                <Form.Control as="select" value={transmision} name="transmision" onChange={(e) => { setTransmision(e.target.value); handleUpdate(e.target.name, e.target.value); }}>
                    <option value="automatic">Automático</option>
                    <option value="manual">Manual</option>
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Patente: </Form.Label>
                <Form.Control type="text" name="patente" placeholder="Ingrese la patente" onChange={(e) => { setPatente(e.target.value); handleUpdate(e.target.name, e.target.value); }} value={patente} />
            </Form.Group>
            <Row>
                <Button className='col-md-2 offset-md-5' onClick={handleRegistro}>Registrar</Button>
                
            </Row>
            </Form>
            
    );
}
