<?php
include '/db.php';
header('Content-Type: application/json');
$response = [];
if (isset($_POST['task'])){
    $task = $_POST['task'];

    $stmt = $conn->prepare("INSERT INTO tasks VALUES (?)");
    $stmt->bind_param('s', $task);
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
