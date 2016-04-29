<?php require_once('Connections/conect.php'); ?>
<?php 
  $value = $_GET['L'];
  mysql_select_db($database_tucodigo, $tucodigo);
  $query_Recordset2 = sprintf("SELECT * FROM nivel".$value." order by Tiempo asc");
  $Recordset2 = mysql_query($query_Recordset2, $tucodigo) or die(mysql_error());
  $row_Recordset2 = mysql_fetch_assoc($Recordset2);
  $dato = $row_Recordset2['Tiempo'];
?>
<html>
<head>
	<title>Nivel <?php echo $_GET['L']; ?></title>
	
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap-responsive.css">
    <link rel="stylesheet" type="text/css" href="css/mycss.css">
	<script type="text/javascript" src="js/jq.js"></script>
	<meta charset="utf-8">
	<link rel="shortcut icon" href="img/p_1.ico"/>
	<meta name="description" content="Acabo de completar este nivel en un tiempo increible juega y trata de superarme.!!">
	<meta name="author" content="Ricardo Rivera Sanchez y Miriam Crisanto Zetina">
	<meta content="img/mp<?php echo $_GET['L']; ?>.png" property="og:image"/>
	
</head>
<body background="img/fondo.gif" style="padding: 0;">
	<form id="juego" action="script.php" method="POST">
		<input name="tiempo" id="tiempo" type="hidden">
		<input name="lvl" id="lvl" type="hidden">
		<input name="besttime" id="besttime" type="hidden" value="<?php echo $dato; ?>">
	</form>
		<h2><div id= "marc"></div></h2>
	<div id="contenedor">
		<canvas id="mycanvas" width="900" height="450" >
			
		</canvas>
		<br>
		<div class="centrar" style="color:white; font-size: 130%;">
			Usa las flechas de tu teclado para moverte por el laberinto y llegar al final en el menor tiempo posible
		</div>
		<br>
	<div class="centrar">
		
	</div>
	</div>
<script type="text/javascript" src="js/mpa<?php echo $_GET['L']; ?>.js"></script>
<script type="text/javascript" src="js/my.js"></script> 

</body>
</html>