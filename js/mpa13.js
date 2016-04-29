// Nivel 13: nivel oculto 
// diseñado por miriam crisanto zetina
// programado por ricardo rivera sanchez

var fin = {
	x:890,
	y:270,
	width:10,
	height:30
}
var pj = {
	x:5,
	y:210,
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
	juego.levl = 13;
	juego.tmodedass = 10;
	
	// dibuja las monedas 
	add_moneda(300,330);
	add_moneda(450,150);
	add_moneda(630,90);
	add_moneda(690,90);
	add_moneda(810,90);
	add_moneda(300,300);
	add_moneda(450,120);
	add_moneda(600,90);
	add_moneda(660,90);
	add_moneda(780,90);

	// dibujas los reloj
	reloj(90,210);
	reloj(30,360);
	reloj(390,210);
	reloj(630,360);


	// dibuja laberintos
	for (var i = 0 ; i <  900; i+= 30) {
		amp(i,0);
		amp(i,(canvas.height - 30));
	};

	muro = [1,2,3,4,5,6,8,9,10,11,12,13,14];
	miriam(0);
	muro = [14];
	miriam(30);
	muro = [1,2,3,5,6,7,8,10,11,12];
	miriam(60);
	muro = [14];
	miriam(90);
	muro = [1,3,4,5,7,9,10,11,13];
	miriam(120);
	muro = [1,3,5,7,9,11,13];
	miriam(150);
	muro = [1,3,5,7,9,11,13];
	miriam(180);
	muro = [1,3,5,7,11,13];
	miriam(210);
	muro = [1,3,5,7,8,9,10,11,13];
	miriam(240);
	muro = [1,5,13];
	miriam(270);
	muro = [1,2,3,4,5,7,9,10,11,13];
	miriam(300);
	muro = [7,9,13];
	miriam(330);
	muro = [1,2,3,4,5,6,7,9,10,11,12,13];
	miriam(360);
	muro = [7];
	miriam(390);
	muro = [1,3,4,6,7,9,10,11,13];
	miriam(420);
	muro = [1,4,6,9,11,13];
	miriam(450);
	muro = [1,2,4,6,8,9,11,13];
	miriam(480);
	muro = [2,4,6,8,9,13];
	miriam(510);
	muro = [2,4,6,8,9,10,11,12,13];
	miriam(540);
	muro = [2,4,8];
	miriam(570);
	muro = [2,4,5,6,7,8,10,11,12];
	miriam(600);
	muro = [2];
	miriam(630);
	muro = [2,4,5,6,7,8,9,10,11,13];
	miriam(660);
	muro = [4,13];
	miriam(690);
	muro = [2,3,4,6,7,9,10,11,12,13];
	miriam(720);
	muro = [2,6,7,8,9,10,11,12,13];
	miriam(750);
	muro = [2,4,7];
	miriam(780);
	muro = [2,4,5,6,7,9,10,11,12];
	miriam(810);
	muro = [];
	miriam(840);
	muro = [1,2,3,4,5,6,7,8,10,11,12,13,14];
	miriam(870);





}

function miriam (lineax) {
	for(var i in muro){
		amp(lineax,(muro[i]*30))
	}
}