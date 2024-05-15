import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { FormularioVehiculo } from './FormularioVehiculo';

export const Seccion1 = () => {
    const [vehiculos, setVehiculos] = useState([]);
    const [vehiculo, setVehiculo] = useState({});
    const [show, setShow] = useState(false);
    const [accion, setAccion] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const modificar = (id, marca, modelo, anio, transmision, patente) => {
        setAccion(false);
        setVehiculo({
            'id': id,
            'marca': marca,
            'modelo': modelo,
            'anio': anio,
            'transmision': transmision,
            'patente': patente,
        });
        handleShow();
    }
    const eliminarVehiculo = (id) => {
        const updatedVehiculos = vehiculos.filter(vehiculo => vehiculo.id !== id);
        setVehiculos(updatedVehiculos);
    }
    const handleUpdate = () => {
        let updatedVehiculos = vehiculos.map(v => {
            if (v.id === vehiculo.id) {
                return vehiculo;
            }
            return v;
        });
        setVehiculos(updatedVehiculos);
        handleClose();
    }

    const handleDelete = () => {
        let updatedVehiculos = vehiculos.filter(v => v.id !== vehiculo.id);
        setVehiculos(updatedVehiculos);
        handleClose();
    }

    const eliminar = () => {
        setAccion(true);
        handleShow();
    }

    return (
        <div className='row m-1'>
            <FormularioVehiculo
                setVehiculos={setVehiculos}
                vehiculos={vehiculos}
                vehiculo={vehiculo}
                setVehiculo={setVehiculo}  
            />        
            <br />
            <br />
            <div>
                <table className="table table-hover" id="tblAutomoviles" >  
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Año</th>
                            <th>Transmisión</th>
                            <th>Patente</th> 
                            <th>Acciónes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(vehiculos) && vehiculos.length > 0 && (
                            vehiculos.map(({ id, marca, modelo, anio, transmision, patente }) => (
                                <tr style={{ textAlign: 'center' }} key={id}>
                                    <td>{id}</td>
                                    <td>{marca}</td>
                                    <td>{modelo}</td>
                                    <td>{anio}</td>
                                    <td>{transmision}</td>
                                    <td>{patente}</td>
                                    <td>
                                        <Button variant="warning" onClick={() => modificar(id, marca, modelo, anio, transmision, patente)} disabled={accion}>Modificar</Button>
                                        <Button variant="danger" onClick={() => eliminarVehiculo(id)}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table> 
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar Vehículo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormularioVehiculo visible={false} vehiculo={vehiculo} setVehiculo={setVehiculo} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    {!accion ?
                        <Button variant="warning" onClick={handleUpdate}>
                            Modificar
                        </Button> :
                        <Button variant="danger" onClick={handleDelete}>
                            Eliminar
                        </Button>
                    }
                </Modal.Footer>
            </Modal>
        </div>
    );
}
