<?php
include 'db.php';
header('Content-Type: application/json');
try{
    if (isset($_POST['task'])){
        $task = $_POST['task'];
        $stmt = $conn->prepare("UPDATE tasks SET completed=1 WHERE task=:task");
        $stmt->bindParam(':task', $task, PDO::PARAM_STR);
        if($stmt->execute()){
            echo json_encode(["error_msg"=>$task]);
        }else{
            echo json_encode(['error_msg'=> "failed query"]);
        }
    }else{
        echo json_encode(['error_msg'=> "invaild input"]);
    }
}catch(PDOException $e){
    echo json_encode(['error_msg'=> "DATABASE failed"]);
}