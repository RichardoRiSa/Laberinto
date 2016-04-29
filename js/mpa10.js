// Nivel 10: Completo
// diseñado por miriam crisanto zetina
// programado por ricardo rivera sanchez

var fin = {
	x:890,
	y:120,
	width:10,
	height:30
}
var pj = {
	x:5,
	y:185,
	width:20,
	height:20
}


//datos del teletransportador 2
var telp2 = {
	x:90,
	y:90,
	width:30,
	height:30,
	sx:95,
	sy:125
}
// datos del teletransportador 1
var telp1 = {
	x:480,
	y:120,
	width:30,
	height:30,
	sx:455,
	sy:125
}

var muro =[];

function Mapa1 () {

	//nivel 
	juego.levl = 10;
	juego.tmodedass = 5;
	
	// dibuja las monedas 
	add_moneda(330,270);
	add_moneda(330,150);
	add_moneda(600,390);
	add_moneda(780,390);
	add_moneda(840,120);

	// dibujas los reloj
	reloj(690,60);
	reloj(330,210);


	// dibuja laberintos
	for (var i = 0 ; i <  900; i+= 30) {
		amp(i,0);
		amp(i,(canvas.height - 30));
	};

	muro = [1,2,3,4,5,7,8,9,10,11,12,13,14];
	miriam(0);
	muro = [14];
	miriam(30);
	muro = [2,3,4,6,8,9,10,11,12,14];
	miriam(60);
	muro = [2,6,9];
	miriam(90);
	muro = [2,3,4,5,6,7,8,9,11,12,13];
	miriam(120);
	muro = [14];
	miriam(150);
	muro = [1,2,3,4,5,6,8,9,10,11,12];
	miriam(180);
	muro = [2,4];
	miriam(210);
	muro = [2,4,5,6,7,8,9,10,12];
	miriam(240);
	muro = [12,13];
	miriam(270);
	muro = [2,3,4,6,7,8,10];
	miriam(300);
	muro = [2,4,6,8,10,11,12];
	miriam(330);
	muro = [2,4,5,6,8,9,10,12];
	miriam(360);
	muro = [2,12,13];
	miriam(390);
	muro = [1,2,3,4,5,7,8,9,10,12];
	miriam(420);
	muro = [5,7,9,10,11,12];
	miriam(450);
	muro = [1,3,5,7];
	miriam(480);
	muro = [1,3,4,5,7,9,11,13];
	miriam(510);
	muro = [7,9,11];
	miriam(540);
	muro = [2,3,4,5,6,7,9,11,13];
	miriam(570);
	muro = [9,11];
	miriam(600);
	muro = [1,2,4,5,7,8,9,11,13];
	miriam(630);
	muro = [5,11,13];
	miriam(660);
	muro = [1,3,4,5,6,7,8,9,10,11,13];
	miriam(690);
	muro = [1,3,7,13];
	miriam(720);
	muro = [1,3,5,7,9,11,13];
	miriam(750);
	muro = [1,3,5,7,9];
	miriam(780);
	muro = [1,3,5,9,11,13];
	miriam(810);
	muro = [1,3,5,6,7,8,9,11,13];
	miriam(840);
	muro = [1,2,3,5,6,7,8,9,10,11,12,13,14];
	miriam(870);





}

function miriam (lineax) {
	for(var i in muro){
		amp(lineax,(muro[i]*30))
	}
}