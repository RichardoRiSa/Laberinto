<?php 
session_start();
	$_SESSION['nombre'] = $_POST['nombre'];
	echo $_SESSION['nombre'];
	echo '<script language = javascript>
        self.location = "index.php";
        </script>';
?>