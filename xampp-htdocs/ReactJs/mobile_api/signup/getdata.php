<?php
	include '../../include/services/functions.php';
     $_POST = json_decode(file_get_contents("php://input"), TRUE);
     $_POST['id'] = newid();
     $signup = new Signup();
     $signup->data=$_POST;
     echo json_encode($signup->insert());
?>