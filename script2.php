<?php require_once('Connections/conect.php'); ?>
<?php 
session_start();

 if (!function_exists("GetSQLValueString")) {
	function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
	{
	  if (PHP_VERSION < 6) {
	    $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;
	  }

	  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

	  switch ($theType) {
	    case "text":
	      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
	      break;    
	    case "long":
	    case "int":
	      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
	      break;
	    case "double":
	      $theValue = ($theValue != "") ? doubleval($theValue) : "NULL";
	      break;
	    case "date":
	      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
	      break;
	    case "defined":
	      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
	      break;
	  }
	  return $theValue;
	}
}

$insertSQL = sprintf("INSERT INTO nivel".$_SESSION['lvl']." (Nombre, Tiempo) VALUES (%s, %s)",
                                   GetSQLValueString($_SESSION['nombre'], "text"), //listo
                                   GetSQLValueString($_SESSION['tiempo'], "float")); // listo
              mysql_select_db($database_tucodigo, $tucodigo);
              $Result1 = mysql_query($insertSQL, $tucodigo) or die(mysql_error());

 echo '<script language = javascript>
        self.location = "puntuacion.php";
        </script>';




?>