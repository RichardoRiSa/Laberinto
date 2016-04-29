<?php require_once('Connections/conect.php'); ?>
<?php
	session_start();
	if (!$_SESSION['nombre']) {
		$_SESSION['nombre'] = "anonimo";
	}
	$ANombre = array();
	$ATiempo = array();
	$AJugado = array();

	mysql_select_db($database_tucodigo, $tucodigo);
    $query_Recordset1 = sprintf("SELECT * FROM records order by nivel asc");
    $Recordset1 = mysql_query($query_Recordset1, $tucodigo) or die(mysql_error());
    $row_Recordset1 = mysql_fetch_assoc($Recordset1);
    $totalRows_Recordset1 = mysql_num_rows($Recordset1);

    do {

    	$ANombre[] = $row_Recordset1['Nombre'];
		$ATiempo[] = $row_Recordset1['Tiempo'];
		$AJugado[] = $row_Recordset1['Jugado'];

    } while ($row_Recordset1 = mysql_fetch_assoc($Recordset1));
?>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap-responsive.css">
    <link rel="stylesheet" type="text/css" href="css/ricardo.css">
    <meta charset="utf-8">
    <link rel="shortcut icon" href="img/p_1.ico"/>
    <meta name="author" content="Ricardo Rivera Sanchez y Miriam Crisanto Zetina">
	<title>Laberinto</title>
</head>
	<body background="img/fondo.gif">
		<div class="" style="">
			<div class="row">
				

				<div class="span3 centrar">
					<img src="img/tec.png" width="150">
				</div>

				<div class="span7">
					<br> <br>
					<h4><div class="centrar het">INTITUTO TECNOLOGICO SUPERIOR DE JESUS CARRANZA</div></h4>
					<h4><div class="centrar het2">INGENIERIA EN SISTEMAS COMPUTACIONALES</div></h4>
				</div>

				<div class="span3 centrar">
					<img src="img/isic.png" width="180">
				</div>
			</div>

		</div>
		
		<div class="container">
			<div class="jumbotron">
			  <div class="centrar">
				<div class="centrar"><h2>Nombre: <?php echo $_SESSION['nombre'];?></h2></div>

				<form class="form" action="nombre.php" method="POST">
					<input name="nombre" id="nombre">
					<input type="submit" class="btn  btn-success" value="cambiar nombre del jugador">
				</form>
			</div>
			  
			</div>

			
			
			
			
			<br>

			<div class="rowfluit">
				<div class="span1"></div>

				<div class="span3">
				    <div  class="thumbnail">
				    	<br>
				      <img src="img/mp1.png" alt="vista previa nivel 1" width="200" >
				      <div class="caption">
				        <h3 style="color:white;">Nivel 1</h3>
						<p>Jugado: <?php echo $AJugado[0]; ?> veces</p>
				        <p>Record <br>
				        Nombre: <?php echo $ANombre[0]; ?><br>
				        Tiempo: <?php echo $ATiempo[0]; ?></p>
				        <p class="centrar"><a href="jugar.php?L=1" class="btn btn-large btn-primary" role="button">Jugar</a></p>
				      </div>
				    </div>
				</div>

				<div class="span3">
				    <div class="thumbnail">
				    	<br>
				      <img src="img/mp2.png" alt="vista previa nivel 2" width="200" >
				      <div class="caption">
				        <h3 style="color:white;">Nivel 2</h3>
				        <p>Jugado: <?php echo $AJugado[1]; ?> veces</p>
				        <p>Record <br>
				        Nombre: <?php echo $ANombre[1]; ?><br>
				        Tiempo: <?php echo $ATiempo[1]; ?></p>
				        <p class="centrar"><a href="jugar.php?L=2" class="btn btn-large btn-primary" role="button">Jugar</a></p>
				      </div>
				    </div>
				</div>

				<div class="span3">
				    <div class="thumbnail">
				    	<br>
				      <img src="img/mp3.png" alt="vista previa nivel 3" width="200" >
				      <div class="caption">
				        <h3 style="color:white;">Nivel 3</h3>
				        <p>Jugado: <?php echo $AJugado[2]; ?> veces</p>
				        <p>Record <br>
				        Nombre: <?php echo $ANombre[2]; ?><br>
				        Tiempo: <?php echo $ATiempo[2]; ?></p>
				        <p class="centrar"><a href="jugar.php?L=3" class="btn btn-large btn-primary" role="button">Jugar</a></p>
				      </div>
				    </div>
				</div>
			</div>
		</div>

		<br>
		<br>

		<div class="container">
			<div class="rowfluit">
				<div class="span1"></div>

				<div class="span3">
				    <div  class="thumbnail">
				    	<br>
				      <img src="img/mp4.png" alt="vista previa nivel 4" width="200" >
				      <div class="caption">
				        <h3 style="color:white;">Nivel 4</h3>
				        <p>Jugado: <?php echo $AJugado[3]; ?> veces</p>
				        <p>Record <br>
				        Nombre: <?php echo $ANombre[3]; ?><br>
				        Tiempo: <?php echo $ATiempo[3]; ?></p>
				        <p class="centrar"><a href="jugar.php?L=4" class="btn btn-large btn-primary" role="button">Jugar</a></p>
				      </div>
				    </div>
				</div>

				<div class="span3">
				    <div class="thumbnail">
				    	<br>
				      <img src="img/mp5.png" alt="vista previa nivel 5" width="200">
				      <div class="caption">
				        <h3 style="color:white;">Nivel 5</h3>
				        <p>Jugado: <?php echo $AJugado[4]; ?> veces</p>
				        <p>Record <br>
				        Nombre: <?php echo $ANombre[4]; ?><br>
				        Tiempo: <?php echo $ATiempo[4]; ?></p>
				        <p class="centrar"><a href="jugar.php?L=5" class="btn btn-large btn-primary" role="button">Jugar</a></p>
				      </div>
				    </div>
				</div>

				<div class="span3">
				    <div class="thumbnail">
				    	<br>
				      <img src="img/mp6.png" alt="vista previa nivel 6" width="200">
				      <div class="caption">
				        <h3 style="color:white;">Nivel 6</h3>
				        <p>Jugado: <?php echo $AJugado[5]; ?> veces</p>
				        <p>Record <br>
				        Nombre: <?php echo $ANombre[5]; ?><br>
				        Tiempo: <?php echo $ATiempo[5]; ?></p>
				        <p class="centrar"><a href="jugar.php?L=6" class="btn btn-large btn-primary" role="button">Jugar</a></p>
				      </div>
				    </div>
				</div>
			</div>
		</div>
		<br>
		<br>

		<div class="container">
			<div class="rowfluit">
				<div class="span1"></div>

				<div class="span3">
				    <div  class="thumbnail">
				    	<br>
				      <img src="img/mp7.png" alt="vista previa nivel 7" width="200" >
				      <div class="caption">
				        <h3 style="color:white;">Nivel 7</h3>
				        <p>Jugado: <?php echo $AJugado[6]; ?> veces</p>
				        <p>Record <br>
				        Nombre: <?php echo $ANombre[6]; ?><br>
				        Tiempo: <?php echo $ATiempo[6]; ?></p>
				        <p class="centrar"><a href="jugar.php?L=7" class="btn btn-large btn-primary" role="button">Jugar</a></p>
				      </div>
				    </div>
				</div>

				<div class="span3">
				    <div class="thumbnail">
				    	<br>
				      <img src="img/mp8.png" alt="vista previa nivel 8" width="200">
				      <div class="caption">
				        <h3 style="color:white;">Nivel 8</h3>
				        <p>Jugado: <?php echo $AJugado[7]; ?> veces</p>
				        <p>Record <br>
				        Nombre: <?php echo $ANombre[7]; ?><br>
				        Tiempo: <?php echo $ATiempo[7]; ?></p>
				        <p class="centrar"><a href="jugar.php?L=8" class="btn btn-large btn-primary" role="button">Jugar</a></p>
				      </div>
				    </div>
				</div>

				<div class="span3">
				    <div class="thumbnail">
				    	<br>
				      <img src="img/mp9.png" alt="vista previa nivel 9" width="200">
				      <div class="caption">
				        <h3 style="color:white;">Nivel 9</h3>
				        <p>Jugado: <?php echo $AJugado[8]; ?> veces</p>
				        <p>Record <br>
				        Nombre: <?php echo $ANombre[8]; ?><br>
				        Tiempo: <?php echo $ATiempo[8]; ?></p>
				        <p class="centrar"><a href="jugar.php?L=9" class="btn btn-large btn-primary" role="button">Jugar</a></p>
				      </div>
				    </div>
				</div>
			</div>
		</div>
		<br>
		<br>

		<div class="container">
			<div class="rowfluit">
				<div class="span1"></div>

				<div class="span3">
				    <div  class="thumbnail">
				    	<br>
				      <img src="img/mp10.png" alt="vista previa nivel 10" width="200" >
				      <div class="caption">
				        <h3 style="color:white;">Nivel 10</h3>
				        <p>Jugado: <?php echo $AJugado[9]; ?> veces</p>
				        <p>Record <br>
				        Nombre: <?php echo $ANombre[9]; ?><br>
				        Tiempo: <?php echo $ATiempo[9]; ?></p>
				        <p class="centrar"><a href="jugar.php?L=10" class="btn btn-large btn-primary" role="button">Jugar</a></p>
				      </div>
				    </div>
				</div>

				<div class="span3">
				    <div class="thumbnail">
				    	<br>
				      <img src="img/mp11.png" alt="vista previa nivel 11" width="200">
				      <div class="caption">
				        <h3 style="color:white;">Nivel 11</h3>
				        <p>Jugado: <?php echo $AJugado[10]; ?> veces</p>
				        <p>Record <br>
				        Nombre: <?php echo $ANombre[10]; ?><br>
				        Tiempo: <?php echo $ATiempo[10]; ?></p>
				        <p class="centrar"><a href="jugar.php?L=11" class="btn btn-large btn-primary" role="button">Jugar</a></p>
				      </div>
				    </div>
				</div>

				<div class="span3">
				    <div class="thumbnail">
				    	<br>
				      <img src="img/mp12.png" alt="vista previa nivel 12" width="200">
				      <div class="caption">
				        <h3 style="color:white;">Nivel 12</h3>
				        <p>Jugado: <?php echo $AJugado[11]; ?> veces</p>
				        <p>Record <br>
				        Nombre: <?php echo $ANombre[11]; ?><br>
				        Tiempo: <?php echo $ATiempo[11]; ?></p>
				        <p class="centrar"><a href="jugar.php?L=12" class="btn btn-large btn-primary" role="button">Jugar</a></p>
				      </div>
				    </div>
				</div>
			</div>
		</div>
		<br>
		<br>


		
	</body>
</html>