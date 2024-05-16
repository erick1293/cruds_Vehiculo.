import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from 'uuid';

export const FormularioVehiculo = ({ setVehiculos, vehiculos, vehiculo, setVehiculo, isEditing }) => {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [anio, setAnio] = useState('');
    const [transmision, setTransmision] = useState('automatico');
    const [patente, setPatente] = useState('');

    useEffect(() => {
        if (isEditing) {
            setMarca(vehiculo.marca);
            setModelo(vehiculo.modelo);
            setAnio(vehiculo.anio);
            setTransmision(vehiculo.transmision);
            setPatente(vehiculo.patente);
        }
    }, [vehiculo, isEditing]);

    const handleRegistro = () => {
        const newVehiculo = {
            id: uuid(),
            marca,
            modelo,
            anio,
            transmision,
            patente,
        };
        setVehiculos([...vehiculos, newVehiculo]);
        resetForm();
    };

    const handleUpdate = () => {
        const updatedVehiculos = vehiculos.map(v => v.id === vehiculo.id ? { ...vehiculo, marca, modelo, anio, transmision, patente } : v);
        setVehiculos(updatedVehiculos);
        resetForm();
    };

    const resetForm = () => {
        setMarca('');
        setModelo('');
        setAnio('');
        setTransmision('automatico');
        setPatente('');
        setVehiculo({});
    };

    return (
        <Form>
            <Form.Group>
                <Form.Label>Marca:</Form.Label>
                <Form.Control type="text" name="marca" placeholder="Ingrese la marca" onChange={(e) => setMarca(e.target.value)} value={marca} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Modelo:</Form.Label>
                <Form.Control type="text" name="modelo" placeholder="Ingrese el modelo" onChange={(e) => setModelo(e.target.value)} value={modelo} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Año:</Form.Label>
                <Form.Control type="text" name="anio" placeholder="Ingrese el año" onChange={(e) => setAnio(e.target.value)} value={anio} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Transmisión:</Form.Label>
                <Form.Control as="select" value={transmision} name="transmision" onChange={(e) => setTransmision(e.target.value)}>
                    <option value="automatico">Automático</option>
                    <option value="manual">Manual</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Patente:</Form.Label>
                <Form.Control type="text" name="patente" placeholder="Ingrese la patente" onChange={(e) => setPatente(e.target.value)} value={patente} />
            </Form.Group>
            <Row>
                <Button className='col-md-2 offset-md-5' onClick={isEditing ? handleUpdate : handleRegistro}>
                    {isEditing ? 'Modificar' : 'Registrar'}
                </Button>
            </Row>
        </Form>
    );
};
