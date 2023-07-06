<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: POST, REQUEST, GET");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $pdo = new PDO('sqlite:vaccines.db');

    $query = "SELECT * FROM patients";

    $statment = $pdo->query($query);

    $result = $statment->fetchAll(PDO::FETCH_ASSOC);

    if ($result) {
        $message = "success";
        $success = 1;
    } else {
        $message = "Error";
        $success = 0;
    }

    $response["success"] = $success;
    $response["success"] = $message;
    $response["patients"] = $result;

    echo json_encode($response);

?>