// Nivel 6: Completo
// diseñado por miriam crisanto zetina
// programado por ricardo rivera sanchez

var fin = {
	x:890,
	y:300,
	width:10,
	height:30
}
var pj = {
	x:5,
	y:245,
	width:20,
	height:20
}
//datos del teletransportador 2
var telp2 = {
	x:390,
	y:390,
	width:30,
	height:30,
	sx:395,
	sy:365
}
// datos del teletransportador 1
var telp1 = {
	x:810,
	y:30,
	width:30,
	height:30,
	sx:785,
	sy:35
}

var muro =[];

function Mapa1 () {

	//nivel 
	juego.levl = 6;
	juego.tmodedass = 4;
	
	// dibuja las monedas 
	add_moneda(330,300);
	add_moneda(330,120);
	add_moneda(720,210);
	add_moneda(840,180);

	// dibujas los reloj
	reloj(540,90);
	reloj(540,390);


	// dibuja laberintos
	for (var i = 0 ; i <  900; i+= 30) {
		amp(i,0);
		amp(i,(canvas.height - 30));
	};

	muro = [1,2,3,4,5,6,7,9,10,11,12,13,14];
	miriam(0);
	muro = [14];
	miriam(30);
	muro = [2,4,6,8,10,12];
	miriam(60);
	muro = [2,4,6,8,10,12];
	miriam(90);
	muro = [2,4,6,8,10,12];
	miriam(120);
	muro = [2,4,6,8,10,12];
	miriam(150);
	muro = [2,4,6,8,10,12];
	miriam(180);
	muro = [14];
	miriam(210);
	muro = [1,3,5,7,9,11,13];
	miriam(240);
	muro = [1,3,5,7,9,11,13];
	miriam(270);
	muro = [1,3,5,7,9,11,13];
	miriam(300);
	muro = [1,3,5,7,9,11,13];
	miriam(330);
	muro = [1,3,5,7,9,11,13];
	miriam(360);
	muro = [14];
	miriam(390);
	muro = [1,3,4,5,6,7,8,10,11,12,13,14];
	miriam(420);
	muro = [14];
	miriam(450);
	muro = [2,4,6,8,10,12,14];
	miriam(480);
	muro = [2,4,6,8,10,12,14];
	miriam(510);
	muro = [2,4,6,8,10,12,14];
	miriam(540);
	muro = [2,4,6,8,10,12,14];
	miriam(570);
	muro = [2,4,6,8,10,12,14];
	miriam(600);
	muro = [14];
	miriam(630);
	muro = [1,2,3,4,6,7,8,9,10,11,12,13,14];
	miriam(660);
	muro = [14];
	miriam(690);
	muro = [2,3,4,5,6,8,9,10,11,12,13,14];
	miriam(720);
	muro = [14];
	miriam(750);
	muro = [2,3,4,5,6,7,8,9,10,11,12,14];
	miriam(780);
	muro = [2,3,4,5,6,7,8,9,10,11,12,14];
	miriam(810);
	muro = [4,14];
	miriam(840);
	muro = [1,2,3,4,5,6,7,8,9,11,12,13,14];
	miriam(870);
}
