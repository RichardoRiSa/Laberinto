<?php require_once('Connections/conect.php'); ?>
<?php 
session_start();

 $_SESSION['tiempo'] = $_POST['tiempo'];
 $_SESSION['lvl'] = $_POST['lvl'];
 echo '<script language = javascript>
        self.location = "script2.php";
        </script>';

?>