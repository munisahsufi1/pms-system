<?php
   header("Access-Control-Allow-Origin: *");
   header("Access-Control-Allow-Headers: access");
   header("Access-Control-Allow-Methods: POST, REQUEST, GET");
   header("Content-Type: application/json; charset=UTF-8");
   header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

   // Retrieve the JSON data
   $jsonData = file_get_contents('php://input');

   // Parse the JSON data
   $data = json_decode($jsonData, true);

   $nhs_number = $data['nhs_number'];
   $forename = $data['forename'];
   $surname = $data['surname'];
   $date_of_birth = $data['date_of_birth'];
   $gender = $data['gender'];
   $post_code = $data['post_code'];

   $pdo = new PDO('sqlite:vaccines.db');


   $query = "INSERT INTO patients(`nhsnumber`, `forename`, `surname`, `persondob`, `gendercode`, `postcode`) 
      VALUES(:nhs_number, :forename, :surname, :date_of_birth, :gender, :post_code)";

   $statement = $pdo->prepare($query);
   $statement->bindValue(':nhs_number', $nhs_number);
   $statement->bindValue(':forename', $forename);
   $statement->bindValue(':surname', $surname);
   $statement->bindValue(':date_of_birth', $date_of_birth);
   $statement->bindValue(':gender', $gender);
   $statement->bindValue(':post_code', $post_code);

   $response = array();

   // Execute the query
   $result = $statement->execute();

   if ($result) {
       $message = "success";
       $success = 1;
   } else {
       $message = "Error";
       $success = 0;
   }

   $response["success"] = $success;
   $response["message"] = $message;
   $response["patient"] = $result;

   echo json_encode($response);
?>