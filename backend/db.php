<?php
header('Access-Control-Allow-Origin: http://localhost:8000');
$host = 'localhost';
$db = 'tasks_db';
$user = 'root';
$pass = '';
header('Content-Type: application/json');
try{
    $conn = new PDO("mysql:host=localhost;dbname=$db", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
    $error_msg = "db failed";
    echo $error_msg;
    die("connection failed");
}
