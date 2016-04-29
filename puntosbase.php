<?php require_once('Connections/conect.php'); ?>
<?php
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

for ($i=1; $i < 14 ; $i++) { 
	$insertSQL = sprintf("INSERT INTO records (nivel, Nombre, Tiempo, Jugado) VALUES (%s, %s, %s, %s)",
                                   GetSQLValueString($i, "int"),
                                   GetSQLValueString("Piloto", "text"), 
                                   GetSQLValueString(24.999, "float"),
                                   GetSQLValueString(1, "int")); 
	mysql_select_db($database_tucodigo, $tucodigo);
	$Result1 = mysql_query($insertSQL, $tucodigo) or die(mysql_error());

	$insertSQL = sprintf("INSERT INTO nivel".$i." (Nombre, Tiempo) VALUES (%s, %s)",
                                   GetSQLValueString("Piloto", "text"), //listo
                                   GetSQLValueString(24.999, "float")); // listo
    mysql_select_db($database_tucodigo, $tucodigo);
    $Result2 = mysql_query($insertSQL, $tucodigo) or die(mysql_error());
}

?>