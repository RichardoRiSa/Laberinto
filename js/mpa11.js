// Nivel 11: Completo
// diseñado por miriam crisanto zetina
// programado por ricardo rivera sanchez

var fin = {
	x:890,
	y:60,
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
	x:240,
	y:90,
	width:30,
	height:30,
	sx:245,
	sy:65
}
// datos del teletransportador 1
var telp1 = {
	x:420,
	y:30,
	width:30,
	height:30,
	sx:455,
	sy:35
}

var muro =[];

function Mapa1 () {

	//nivel 
	juego.levl = 11;
	juego.tmodedass = 5;
	
	// dibuja las monedas 
	add_moneda(240,270);
	add_moneda(300,330);
	add_moneda(840,240);
	add_moneda(840,300);
	add_moneda(840,360);

	// dibujas los reloj
	reloj(540,210);
	reloj(390,270);


	// dibuja laberintos
	for (var i = 0 ; i <  900; i+= 30) {
		amp(i,0);
		amp(i,(canvas.height - 30));
	};

	muro = [1,2,3,4,5,6,7,9,10,11,12,13,14];
	miriam(0);
	muro = [9,10,11,12,13];
	miriam(30);
	muro = [2,3,4,6];
	miriam(60);
	muro = [2,4,6,8,9,10,11,12,13];
	miriam(90);
	muro = [2,4,6];
	miriam(120);
	muro = [2,4,6,7,8,9,10,11,12];
	miriam(150);
	muro = [2,8,12];
	miriam(180);
	muro = [2,3,4,5,6,8,10,11,12];
	miriam(210);
	muro = [4,8];
	miriam(240);
	muro = [1,2,3,4,6,10,11,12];
	miriam(270);
	muro = [6,7,8,9,10,12];
	miriam(300);
	muro = [2,3,4,5,6,12];
	miriam(330);
	muro = [8,9,10,12];
	miriam(360);
	muro = [1,2,4,5,6,7,8,10,12];
	miriam(390);
	muro = [2,4,10,,12,13];
	miriam(420);
	muro = [2,4,6,8,9,10];
	miriam(450);
	muro = [2,4,6,8,12];
	miriam(480);
	muro = [2,4,6,8,10,11,12];
	miriam(510);
	muro = [8,12];
	miriam(540);
	muro = [1,2,3,5,6,8,9,10,11,12];
	miriam(570);
	muro = [1,5,8];
	miriam(600);
	muro = [1,2,3,4,5,6,7,8,9,10,12,13];
	miriam(630);
	muro = [7,8,13];
	miriam(660);
	muro = [2,3,5,7,8,9,10,11,13];
	miriam(690);
	muro = [3,5,11,13];
	miriam(720);
	muro = [1,2,3,5,7,8,9,10,11,13];
	miriam(750);
	muro = [1,5,13];
	miriam(780);
	muro = [1,3,4,5,7,9,11,13];
	miriam(810);
	muro = [1,3,4,5,6,7,9,11,13];
	miriam(840);
	muro = [1,3,4,5,6,7,8,9,10,11,12,13,14];
	miriam(870);





}

function miriam (lineax) {
	for(var i in muro){
		amp(lineax,(muro[i]*30))
	}
}