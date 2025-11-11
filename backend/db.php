<?php
$host = 'localhost';
$db = 'tasks';
$user = 'root';
$pass = '';

try{
    $conn = new PDO("mysql:host=localhost;dbname=$db", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
    die("connection failed");
}
