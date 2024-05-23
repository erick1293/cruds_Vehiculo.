<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vehiculos";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$requestMethod = $_SERVER["REQUEST_METHOD"];

switch($requestMethod) {
    case 'GET':
        getVehiculos($conn);
        break;
    case 'POST':
        addVehiculo($conn);
        break;
    default:
        echo json_encode(array("message" => "Método de solicitud no compatible"));
        break;
}

function getVehiculos($conn) {
    $sql = "SELECT * FROM vehiculo";
    $result = $conn->query($sql);
    $vehiculos = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $vehiculos[] = $row;
        }
    }
    echo json_encode($vehiculos);
}

function addVehiculo($conn) {
    $data = json_decode(file_get_contents(""), true);
    $marca = $data['marca'];
    $modelo = $data['modelo'];
    $anio = $data['anio'];
    $transmision = $data['transmision'];
    $patente = $data['patente'];

    $sql = "INSERT INTO vehiculo (marca, modelo, anio, transmision, patente) VALUES ('$marca', '$modelo', $anio, '$transmision', '$patente')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("message" => "Vehiculo agregado exitosamente"));
    } else {
        echo json_encode(array("message" => "Error: " . $conn->error));
    }
}

$conn->close();
?>
