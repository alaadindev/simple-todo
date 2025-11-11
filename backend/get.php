<?php
include 'db.php';
header('Content-Type: application/json');

try{
    $stmt = $conn->query("select * from tasks");
    $tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($tasks);
}catch(PDOExecption $e){
    echo json_encode(['error_msg'=> '$e']);
}
