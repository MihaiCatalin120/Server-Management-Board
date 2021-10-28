<?php

$serverName = "localhost";
$username = "root";
$password = "Root@1234";
$dbname = "monitoringPex";

$connection = mysqli_connect($serverName, $username, $password, $dbname);

if (!$connection) {
    die('Could not connect: ' . mysql_error());
}

?>