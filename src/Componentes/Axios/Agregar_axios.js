import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from './axiosConfig';

const AgregarVehiculo = ({ onAgregar }) => {
    const [show, setShow] = useState(false);
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [anio, setAnio] = useState('');
    const [transmision, setTransmision] = useState('');
    const [patente, setPatente] = useState('');
    const [error, setError] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!marca || !modelo || !anio || !transmision || !patente) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        try {
            const response = await axios.post('/agregar_vehiculo.php', {
                marca,
                modelo,
                anio,
                transmision,
                patente
            });

            // Verificar si onAgregar es una función antes de llamarla
            if (typeof onAgregar === 'function') {
                onAgregar(response.data);
            }

            // Limpiar el formulario y los errores después de agregar el vehículo
            setMarca('');
            setModelo('');
            setAnio('');
            setTransmision('');
            setPatente('');
            setError(null);
            handleClose();
        } catch (error) {
            setError('Error al agregar vehículo: ' + error.message);
            console.error('Error al agregar vehículo:', error);
        }
    };

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Agregar Vehículo
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Vehículo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formMarca">
                            <Form.Label>Marca:</Form.Label>
                            <Form.Control type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formModelo">
                            <Form.Label>Modelo:</Form.Label>
                            <Form.Control type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formAnio">
                            <Form.Label>Año:</Form.Label>
                            <Form.Control type="text" value={anio} onChange={(e) => setAnio(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formTransmision">
                            <Form.Label>Transmisión:</Form.Label>
                            <Form.Control type="text" value={transmision} onChange={(e) => setTransmision(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formPatente">
                            <Form.Label>Patente:</Form.Label>
                            <Form.Control type="text" value={patente} onChange={(e) => setPatente(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Agregar</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AgregarVehiculo;
