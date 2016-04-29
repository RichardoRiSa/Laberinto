// Nivel 9: Completo
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
	y:390,
	width:20,
	height:20
}

//datos del teletransportador 2
var telp2 = {
	x:60,
	y:120,
	width:30,
	height:30,
	sx:65,
	sy:95
}
// datos del teletransportador 1
var telp1 = {
	x:540,
	y:360,
	width:30,
	height:30,
	sx:515,
	sy:365
}

var muro =[];

function Mapa1 () {


	//nivel 
	juego.levl = 9;
	juego.tmodedass = 5;
	
	// dibuja las monedas 
	add_moneda(330,330);
	add_moneda(420,150);
	add_moneda(660,120);
	add_moneda(720,90);
	add_moneda(840,60);

	// dibujas los reloj
	reloj(510,390);
	reloj(480,360);


	// dibuja laberintos
	for (var i = 0 ; i <  900; i+= 30) {
		amp(i,0);
		amp(i,(canvas.height - 30));
	};

	muro = [1,2,3,4,5,6,7,8,9,10,11,12,14];
	miriam(0);
	muro = [1,2,3,4,5];
	miriam(30);
	muro = [1,5,7,8,9,10,12];
	miriam(60);
	muro = [1,3,4,5,7,8,10,11,12];
	miriam(90);
	muro = [1,14];
	miriam(120);
	muro = [1,2,3,4,5,6,7,8,10,11,12];
	miriam(150);
	muro = [8,10];
	miriam(180);
	muro = [2,4,5,6,8,10,11,12];
	miriam(210);
	muro = [2,4,8,12];
	miriam(240);
	muro = [2,4,5,6,7,8,10,11,12];
	miriam(270);
	muro = [10,14];
	miriam(300);
	muro = [2,3,4,5,7,8,9,10,12];
	miriam(330);
	muro = [12,14];
	miriam(360);
	muro = [2,3,4,5,6,7,8,9,11,12];
	miriam(390);
	muro = [2,14];
	miriam(420);
	muro = [2,4,5,7,8,9,11,12,14];
	miriam(450);
	muro = [2,5,7,9,11,13,14];
	miriam(480);
	muro = [2,3,4,5,7,9,11,14];
	miriam(510);
	muro = [1,7,11,13,14];
	miriam(540);
	muro = [1,3,5,7,8,9,10,11,12,13,14];
	miriam(570);
	muro = [1,3,5,14];
	miriam(600);
	muro = [1,3,5,6,7,8,9,10,11,12,14];
	miriam(630);
	muro = [3,7,14];
	miriam(660);
	muro = [2,3,4,5,7,9,10,11,12,13,14];
	miriam(690);
	muro = [2,4,7,14];
	miriam(720);
	muro = [4,6,7,8,9,10,11,12,13,14];
	miriam(750);
	muro = [1,3,4,6,14];
	miriam(780);
	muro = [1,3,4,6,8,9,10,11,12,13,14];
	miriam(810);
	muro = [1,3,4,6,14];
	miriam(840);
	muro = [1,3,4,5,6,7,8,9,10,11,12,13,14];
	miriam(870);





}

function miriam (lineax) {
	for(var i in muro){
		amp(lineax,(muro[i]*30))
	}
}