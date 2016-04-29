<?php require_once('Connections/conect.php'); // llamamos al archivo que contiene los datos de la coneccion ?>
<?php 
session_start();
// funcion para filtar datos en las consultas sql esta funcion esta tomada del editor dreamweaver
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
  // hace una consulta de los datos que se encuentran en la tabla del nivel para tomar los mejores 10 tiempos
  mysql_select_db($database_tucodigo, $tucodigo);
  $query_Recordset1 = sprintf("SELECT * FROM nivel".$_SESSION['lvl']." order by Tiempo asc limit 0,10");
  $Recordset1 = mysql_query($query_Recordset1, $tucodigo) or die(mysql_error());
  $row_Recordset1 = mysql_fetch_assoc($Recordset1);
  $totalRows_Recordset1 = mysql_num_rows($Recordset1);
  mysql_select_db($database_tucodigo, $tucodigo);

  $query_Recordset5 = sprintf("SELECT * FROM nivel".$_SESSION['lvl']."");
  $Recordset5 = mysql_query($query_Recordset5, $tucodigo) or die(mysql_error());
  $row_Recordset5 = mysql_fetch_assoc($Recordset5);
  $totalRows_Recordset5 = mysql_num_rows($Recordset5);



  // se hace una consulta en la tabla de record para ver si existe o no un record del nivel 
  mysql_select_db($database_tucodigo, $tucodigo);
  $query_Recordset2 = sprintf("SELECT * FROM  records where nivel = %s",GetSQLValueString($_SESSION['lvl'], "int"));
  $Recordset2 = mysql_query($query_Recordset2, $tucodigo) or die(mysql_error());
  $row_Recordset2 = mysql_fetch_assoc($Recordset2);
  $totalRows_Recordset2 = mysql_num_rows($Recordset2);


  if ($totalRows_Recordset2 > 0) { // este if comprueba esa existencia 
  	// en caso de que si exista un record se actualiza no importa si este cambia o no siempre se actualiza eso no quiere decir que cambie 
  	$updateSQL = sprintf("UPDATE records SET Nombre = %s , Tiempo = %s , Jugado = %s WHERE nivel = %s",
						   GetSQLValueString($row_Recordset1['Nombre'], "text"),
						   GetSQLValueString($row_Recordset1['Tiempo'], "float"),
						   GetSQLValueString($totalRows_Recordset5, "int"),                      
						   GetSQLValueString($_SESSION['lvl'], "int"));

    mysql_select_db($database_tucodigo, $tucodigo);
    $Result = mysql_query($updateSQL, $tucodigo) or die(mysql_error());
  	
  }
  else{
  	// en caso de que no existe se inserta el registro 
  	$insertSQL = sprintf("INSERT INTO records (nivel, Nombre, Tiempo, Jugado) VALUES (%s, %s, %s, %s)",
                                   GetSQLValueString($_SESSION['lvl'], "int"),
                                   GetSQLValueString($row_Recordset1['Nombre'], "text"), 
                                   GetSQLValueString($row_Recordset1['Tiempo'], "float"),
                                   GetSQLValueString($totalRows_Recordset5, "int")); 
	mysql_select_db($database_tucodigo, $tucodigo);
	$Result1 = mysql_query($insertSQL, $tucodigo) or die(mysql_error());

  }





?>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap-responsive.css">
    <link rel="stylesheet" type="text/css" href="css/ricardo.css">
    <meta charset="utf-8">
    <link rel="shortcut icon" href="img/p_1.ico"/>
    <meta name="author" content="Ricardo Rivera Sanchez y Miriam Crisanto Zetina">
    <meta name="description" content="Acabo de completar este nivel en un tiempo increible juega y trata de superarme.!!">
    <meta content="img/mp<?php echo $_GET['L']; ?>.png" property="og:image"/>
	<title>Tiempos Nivel <?php echo $_SESSION['lvl']; ?> </title>
</head>
<body background="img/fondo.gif">
	<br>
	<div class="container">
		<div class="rowfluit">
			<div class="span2"></div>
			<div class="span8">
				<legend><h1 style="color:white" align="center">Tiempos Nivel <?php echo $_SESSION['lvl']; ?> </h1 style="color:white"></legend>
		          <table class="table table-bordered table-striped" style="background-color: white;">
		            <tr>
		              <th style="color:black; text-align:center" width="20%">Nombre</td>
		              <th style="color:black; text-align:center" width="20%">Tiempo</td>
		            </tr>
		            <?php do { ?>
		              <tr>
		                <td style="color:black; text-align:center" width="20%"><?php echo $row_Recordset1['Nombre']; ?></td>
		                <td style="color:black; text-align:center" width="20%"><?php echo $row_Recordset1['Tiempo']; ?></td>
		              </tr>
		              <?php } while ($row_Recordset1 = mysql_fetch_assoc($Recordset1)); ?>
		          </table>
		          <div class="centrar">
 		          <h2>Mi tiempo: <?php echo $_SESSION['tiempo']; ?></h2>
		          <a href="index.php" class="btn btn-large btn-success">Niveles</a>
		          <a href="jugar.php?L=<?php echo $_SESSION['lvl']; ?>" class="btn btn-large btn-info">Repetir Nivel</a>
		          </div>
		          <br>
		          <div class="centrar">
<a  href="http://www.facebook.com/sharer.php?u=http://tu-codigo.com/Juego/jugar.php?L=<?php echo $_SESSION['lvl']; ?>&t=Juega al Laberinto" target="_blank"><img src="img/compartir.png" alt="Compartir"></a>
		          </div>

				
			</div>
		</div>
	</div>

</body>
</html>