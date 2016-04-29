// Nivel 5: Completo
// diseñado por miriam crisanto zetina
// programado por ricardo rivera sanchez

// posicion final del laberinto
var fin = {
	x:890,
	y:180,
	width:10,
	height:30
}
//posicion inicial del jugador 
var pj = {
	x:5,
	y:185,
	width:20,
	height:20
}
//datos del teletransportador 2
var telp2 = {
	x:270,
	y:390,
	width:30,
	height:30,
	sx:275,
	sy:365
}
// datos del teletransportador 1
var telp1 = {
	x:690,
	y:150,
	width:30,
	height:30,
	sx:725,
	sy:155
}




var muro =[];

function Mapa1 () {

	//nivel 
	juego.levl = 5;
	juego.tmodedass = 4;
	
	// dibuja las monedas 
	add_moneda(330,300);
	add_moneda(330,150);
	add_moneda(660,210);
	add_moneda(840,180);

	// dibujas los reloj
	reloj(450,30);
	reloj(510,390);


	// dibuja laberintos
	for (var i = 0 ; i <  900; i+= 30) {
		amp(i,0);
		amp(i,(canvas.height - 30));
	};

	muro = [1,2,3,4,5,7,8,9,10,11,12,13,14];
	miriam(0);
	muro = [5,7,14];
	miriam(30);
	muro = [2,3,5,7,9,10,11,13,14];
	miriam(60);
	muro = [14];
	miriam(90);
	muro = [2,3,4,6,7,8,9,11,12,13];
	miriam(120);
	muro = [4,14];
	miriam(150);
	muro = [1,2,4,5,6,7,9,10,11,12,13,14];
	miriam(180);
	muro = [14];
	miriam(210);
	muro = [2,3,4,6,7,8,10,12,13,14];
	miriam(240);
	muro = [2,7,14];
	miriam(270);
	muro = [2,4,5,6,7,8,9,10,11,13,14];
	miriam(300);
	muro = [14];
	miriam(330);
	muro = [2,4,6,7,9,11,13,14];
	miriam(360);
	muro = [4,6,7,9,11,14];
	miriam(390);
	muro = [1,2,3,4,9,11,13,14];
	miriam(420);
	muro = [4,6,7,8,9,11,14];
	miriam(450);
	muro = [2,6,11,13,14];
	miriam(480);
	muro = [2,4,6,8,9,14];
	miriam(510);
	muro = [2,4,6,8,9,11,13,14];
	miriam(540);
	muro = [4,6,14];
	miriam(570);
	muro = [2,3,4,6,7,8,9,11,12,13,14];
	miriam(600);
	muro = [6,14];
	miriam(630);
	muro = [2,3,4,5,6,8,9,10,11,12,14];
	miriam(660);
	muro = [4,6,14];
	miriam(690);
	muro = [2,4,6,7,8,9,10,11,13,14];
	miriam(720);
	muro = [2,4,8,14];
	miriam(750);
	muro = [2,4,6,8,9,10,12,13,14];
	miriam(780);
	muro = [2,6,9,13,14];
	miriam(810);
	muro = [2,4,7,11,14];
	miriam(840);
	muro = [1,2,3,4,5,7,8,9,10,11,12,13,14];
	miriam(870);
}
