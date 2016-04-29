// Nivel 12: Completo
// diseñado por miriam crisanto zetina
// programado por ricardo rivera sanchez

var fin = {
	x:890,
	y:240,
	width:10,
	height:30
}
var pj = {
	x:5,
	y:95,
	width:20,
	height:20
}


//datos del teletransportador 2
var telp2 = {
	x:210,
	y:390,
	width:30,
	height:30,
	sx:215,
	sy:365
}
// datos del teletransportador 1
var telp1 = {
	x:630,
	y:240,
	width:30,
	height:30,
	sx:635,
	sy:215
}

var muro =[];

function Mapa1 () {

	//nivel 
	juego.levl = 12;
	juego.tmodedass = 5;
	
	// dibuja las monedas 
	add_moneda(300,330);
	add_moneda(450,150);
	add_moneda(630,90);
	add_moneda(690,90);
	add_moneda(810,90);

	// dibujas los reloj
	reloj(90,210);
	reloj(30,360);


	// dibuja laberintos
	for (var i = 0 ; i <  900; i+= 30) {
		amp(i,0);
		amp(i,(canvas.height - 30));
	};

	muro = [1,2,4,5,6,7,8,9,10,11,12,13,14];
	miriam(0);
	muro = [14];
	miriam(30);
	muro = [1,3,4,5,6,7,8,9,10,11,12];
	miriam(60);
	muro = [1,3,5,9];
	miriam(90);
	muro = [1,3,5,7,9,11,12];
	miriam(120);
	muro = [3,5,7,9,11];
	miriam(150);
	muro = [2,3,5,7,11,13];
	miriam(180);
	muro = [3,5,7,8,9,10,11];
	miriam(210);
	muro = [1,3,13];
	miriam(240);
	muro = [1,5,6,7,8,9,10,11,13];
	miriam(270);
	muro = [1,3,5,13];
	miriam(300);
	muro = [3,5,7,8,9,10,11,12,13];
	miriam(330);
	muro = [2,3,4,5,7];
	miriam(360);
	muro = [2,7,9,10,11,13];
	miriam(390);
	muro = [2,4,5,6,7,9,13];
	miriam(420);
	muro = [2,9,10,11,13];
	miriam(450);
	muro = [2,3,4,5,6,7,8,9,11,13];
	miriam(480);
	muro = [6,13];
	miriam(510);
	muro = [1,2,3,4,6,8,9,10,11,12,13];
	miriam(540);
	muro = [4,6];
	miriam(570);
	muro = [2,3,4,6,7,8,9,10,11,12];
	miriam(600);
	muro = [6,9];
	miriam(630);
	muro = [2,3,4,5,6,8,9,11,12,13];
	miriam(660);
	muro = [8,9];
	miriam(690);
	muro = [2,3,4,5,6,7,8,9,10,11,12];
	miriam(720);
	muro = [7,9];
	miriam(750);
	muro = [2,3,4,5,7,9,11,12,13];
	miriam(780);
	muro = [7,9,13];
	miriam(810);
	muro = [1,2,3,4,5,6,7];
	miriam(840);
	muro = [1,2,3,4,5,6,7,9,10,11,12,13,14];
	miriam(870);





}

function miriam (lineax) {
	for(var i in muro){
		amp(lineax,(muro[i]*30))
	}
}