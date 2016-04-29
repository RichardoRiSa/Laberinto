// Nivel 3: Completo
// diseñado por miriam crisanto zetina
// programado por ricardo rivera sanchez

var fin = {
	x:890,
	y:390,
	width:10,
	height:30
}
var pj = {
	x:5,
	y:35,
	width:20,
	height:20
}


//datos del teletransportador 2
var telp2 = {
	x:30,
	y:300,
	width:30,
	height:30,
	sx:35,
	sy:275
}
// datos del teletransportador 1
var telp1 = {
	x:510,
	y:270,
	width:30,
	height:30,
	sx:515,
	sy:305
}

var muro =[];

function Mapa1 () {
	//nivel 
	juego.levl = 3;
	juego.tmodedass = 4;
	
	// dibuja las monedas 
	add_moneda(120,30);
	add_moneda(180,300);
	add_moneda(690,390);
	add_moneda(840,390);

	// dibujas los reloj
	reloj(450,210);
	reloj(330,390);


	// dibuja laberintos
	for (var i = 0 ; i <  900; i+= 30) {
		amp(i,0);
		amp(i,(canvas.height - 30));
	};
	muro = [2,3,4,5,6,7,8,9,10,11,12,13];
	miriam(0);
	muro = [8];
	miriam(30);
	muro = [2,4,5,6,8,10,11,12];
	miriam(60);
	muro = [1,2,4,8,10];
	miriam(90);
	muro = [4,5,6,7,8,10,11,12,13];
	miriam(120);
	muro = [1,2];
	miriam(150);
	muro = [1,2,3,4,5,6,7,9,11,12];
	miriam(180);
	muro = [9];
	miriam(210);
	muro = [2,3,4,6,7,9,11,12,13];
	miriam(240);
	muro = [9];
	miriam(270);
	muro = [1,2,3,4,6,7,8,9,10,11,13];
	miriam(300);
	muro = [1,9];
	miriam(330);
	muro = [1,2,4,5,6,7,8,9,11,12,13];
	miriam(360);
	muro = [4,11];
	miriam(390);
	muro = [2,4,6,7,8,9,10,11,13];
	miriam(420);
	muro = [2,4,6,13];
	miriam(450);
	muro = [2,4,6,8,9,10,11,12,13];
	miriam(480);
	muro = [2,4,6];
	miriam(510);
	muro = [1,2,4,6,7,8,9,10,11,12];
	miriam(540);
	muro = [2,4,12];
	miriam(570);
	muro = [2,4,5,6,7,8,9,10,12];
	miriam(600);
	muro = [2,4];
	miriam(630);
	muro = [2,4,5,6,7,8,10,11,12,13];
	miriam(660);
	muro = [2,8];
	miriam(690);
	muro = [4,6,8,10,11,12];
	miriam(720);
	muro = [2,3,4,6,8,12];
	miriam(750);
	muro = [2,6,8,10,12];
	miriam(780);
	muro = [2,4,5,6,8,10,12];
	miriam(810);
	muro = [2,4,8,10,12];
	miriam(840);
	muro = [1,2,3,4,5,6,7,8,9,10,11,12,];
	miriam(870);





}
