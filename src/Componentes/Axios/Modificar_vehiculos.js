import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form, FormControl } from 'react-bootstrap';

const Vehiculos = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [filtro, setFiltro] = useState('');
    const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState(null);
    const [editando, setEditando] = useState(false);
    const [nuevoVehiculo, setNuevoVehiculo] = useState({
        id: '',
        marca: '',
        modelo: '',
        anio: '',
        transmision: '',
        patente: ''
    });
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost/Tracelink/conexion.php');
            setData(response.data);
        } catch (error) {
            setError(error);
        }
    };

    const handleDelete = async (vehiculoId) => {
        try {
            const response = await axios.post('http://localhost/Tracelink/eliminar_vehiculo.php', { id: vehiculoId });
            alert(response.data.message); // Mostrar mensaje de éxito o error
            // Actualizar la lista de vehículos después de eliminar
            fetchData();
        } catch (error) {
            console.error('Error al eliminar vehículo:', error);
            alert('Error al eliminar vehículo: ' + error.message);
        }
    };

    const handleModificar = (vehiculoId) => {
        // Encuentra el vehículo seleccionado en los datos
        const vehiculo = data.find(v => v.id === vehiculoId);
        if (vehiculo) {
            setVehiculoSeleccionado(vehiculo);
            setNuevoVehiculo(vehiculo); // Establece el vehículo seleccionado como el nuevo vehículo para editar
            setEditando(true);
            setShowModal(true); // Abre el modal al hacer clic en "Modificar"
        } else {
            console.error('Vehículo no encontrado:', vehiculoId);
        }
    };

    const handleEditar = (e) => {
        const { name, value } = e.target;
        setNuevoVehiculo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost/Tracelink/editar_vehiculo.php', nuevoVehiculo);
            alert(response.data.message); // Mostrar mensaje de éxito o error
            // Actualizar la lista de vehículos después de editar
            fetchData();
            // Restaurar el estado de edición y cerrar el modal
            setEditando(false);
            setShowModal(false);
            setVehiculoSeleccionado(null);
            setNuevoVehiculo({
                id: '',
                marca: '',
                modelo: '',
                anio: '',
                transmision: '',
                patente: ''
            });
        } catch (error) {
            console.error('Error al editar vehículo:', error);
            alert('Error al editar vehículo: ' + error.message);
        }
    };

    const handleBuscar = (e) => {
        setFiltro(e.target.value);
    };

    const vehiculosFiltrados = data.filter(v => {
        return v.marca.toLowerCase().includes(filtro.toLowerCase()) ||
               v.modelo.toLowerCase().includes(filtro.toLowerCase()) ||
               v.anio.toString().includes(filtro.toLowerCase()) ||
               v.transmision.toLowerCase().includes(filtro.toLowerCase()) ||
               v.patente.toLowerCase().includes(filtro.toLowerCase()) ||
               v.id.toLowerCase().includes(filtro.toLowerCase());
    });

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Vehículos</h1>
            <FormControl type="text" placeholder="Buscar..." className="mb-3" onChange={handleBuscar} />
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>MARCA</th>
                        <th>MODELO</th>
                        <th>AÑO</th>
                        <th>Transmision</th>
                        <th>PATENTE</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {vehiculosFiltrados.map(v => (
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.marca}</td>
                            <td>{v.modelo}</td>
                            <td>{v.anio}</td>
                            <td>{v.transmision}</td>
                            <td>{v.patente}</td>
                            <td>
                                <Button variant="primary" onClick={() => handleModificar(v.id)}>Modificar</Button>
                                <Button variant="danger" onClick={() => handleDelete(v.id)}>Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Vehículo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formMarca">
                            <Form.Label>Marca:</Form.Label>
                            <Form.Control type="text" name="marca" value={nuevoVehiculo.marca} onChange={handleEditar} />
                        </Form.Group>
                        <Form.Group controlId="formModelo">
                            <Form.Label>Modelo:</Form.Label>
                            <Form.Control type="text" name="modelo" value={nuevoVehiculo.modelo} onChange={handleEditar} />
                        </Form.Group>
                        <Form.Group controlId="formAnio">
                            <Form.Label>Año:</Form.Label>
                            <Form.Control type="text" name="anio" value={nuevoVehiculo.anio} onChange={handleEditar} />
                        </Form.Group>
                        <Form.Group controlId="formTransmision">
                            <Form.Label>Transmisión:</Form.Label>
                            <Form.Control type="text" name="transmision" value={nuevoVehiculo.transmision} onChange={handleEditar} />
                        </Form.Group>
                        <Form.Group controlId="formPatente">
                            <Form.Label>Patente:</Form.Label>
                            <Form.Control type="text" name="patente" value={nuevoVehiculo.patente} onChange={handleEditar} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Guardar cambios</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Vehiculos;
