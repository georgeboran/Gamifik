<?php

use LDAP\Result;

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: text/html; charset=UTF-8');
require('db.php');
$con = Conexion();

$user = $_GET['user'];
$rankingName = $_GET['rankingName'];
$points = $_GET['points'];

$sql = mysqli_query($con, "UPDATE `$rankingName` SET `Puntuación` = '" . $points . "' WHERE `User-ID` = " . $user . ";");

if ($sql) {
  echo json_encode('Correcto!');
}
