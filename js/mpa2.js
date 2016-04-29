// Nivel 2: Completo
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
	x:450,
	y:360,
	width:30,
	height:30,
	sx:485,
	sy:365
}
// datos del teletransportador 1
var telp1 = {
	x:840,
	y:270,
	width:30,
	height:30,
	sx:845,
	sy:245
}

var muro =[];

function Mapa1 () {

	//nivel 
	juego.levl = 2;
	juego.tmodedass = 3;
	
	// dibuja las monedas 
	add_moneda(90,30);
	add_moneda(600,240);
	add_moneda(840,90);

	// dibujas los reloj
	reloj(510,300);
	reloj(540,300);


	for (var i = 0 ; i <  900; i+= 30) {
		amp(i,0);
		amp(i,(canvas.height - 30));
	};

	muro = [1,2,3,4,5,6,7,9,10,11,12,13];
	miriam(0);
	muro = [9];
	miriam(30);
	muro = [2,4,5,6,7,9,11,12,13];
	miriam(60);
	muro = [2,9,11];
	miriam(90);
	muro = [2,4,5,6,7,8,9,11,13];
	miriam(120);
	muro = [2,4,11,13];
	miriam(150);
	muro = [2,4,5,6,7,9,11,13];
	miriam(180);
	muro = [2];
	miriam(210);
	muro = [1,2,3,4,6,7,8,10,11,12,13];
	miriam(240);
	muro = [8,10];
	miriam(270);
	muro = [2,3,4,5,6,8,10,12];
	miriam(300);
	muro = [6,8,10,12];
	miriam(330);
	muro = [1,2,3,4,6,8,10,12];
	miriam(360);
	muro = [6,8,10,11,12];
	miriam(390);
	muro = [2,3,4,5,6,8];
	miriam(420);
	muro = [6,8,9,10,11,13];
	miriam(450);
	muro = [1,2,3,4,6,9];
	miriam(480);
	muro = [1,3,4,5,6,7,9,11,12,13];
	miriam(510);
	muro = [1,3,9];
	miriam(540);
	muro = [1,3,5,6,7,9,10,11,13];
	miriam(570);
	muro = [1,3,5,13];
	miriam(600);
	muro = [1,3,5,7,8,9,10,11,12,13];
	miriam(630);
	muro = [1,3,5];
	miriam(660);
	muro = [5,6,7,9,10,11,12];
	miriam(690);
	muro = [2,3,12];
	miriam(720);
	muro = [5,6,7,9,10,11,12];
	miriam(750);
	muro = [2,11];
	miriam(780);
	muro = [2,3,4,5,6,7,8,9,11,13];
	miriam(810);
	muro = [2,11,13];
	miriam(840);
	muro = [1,2,3,4,5,6,7,8,9,11,12,13];
	miriam(870);





}