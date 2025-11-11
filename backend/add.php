<?php
include 'db.php';
header('Content-Type: application/json');
$response = [];
if (isset($_POST['task'])){
    $task = $_POST['task'];

    $stmt = $conn->prepare("INSERT INTO tasks (task) VALUES (:task)");
    $stmt->bindParam(':task', $task, PDO::PARAM_STR);
    if ($stmt->execute()){
        $response = [
            'error_msg' => ''
        ];
    }else{
        $response = [
            'error_msg' => ''
        ];
    }

}else{
    $response = [
        'error_msg'=> 'invaild input',
    ];
}
echo json_encode($response);
