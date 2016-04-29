// Nivel 1: Completo
// diseñado por miriam crisanto zetina
// programado por ricardo rivera sanchez

var fin= {
	x:890,
	y:90,
	width: 10,
	height: 30
}
// json de el jugador pj
var pj = {
	x:5,
	y:155,
	width: 20,
	height: 20
}

//datos del teletransportador 2
var telp2 = {
	x:270,
	y:180,
	width:30,
	height:30,
	sx:305,
	sy:185
}
// datos del teletransportador 1
var telp1 = {
	x:690,
	y:180,
	width:30,
	height:30,
	sx:695,
	sy:155
}

function Mapa1()
{

	//nivel 
	juego.levl = 1;
	juego.tmodedass = 3;
	
	// dibuja las monedas 
	add_moneda(90,150);
	add_moneda(690,90);
	add_moneda(840,30);

	// dibujas los reloj
	reloj(360,390);


	// dibuja laberintos
	for (var i = 0; i < 900; i += 30) {
		amp(i,0);
		amp(i,(canvas.height - 30));
	};
	amp(0,0);
	amp(0,0);
	amp(0,30);
	amp(0,60);
	amp(0,90);
	amp(0,120);
	amp(0,180);
	amp(0,210);
	amp(0,240);
	amp(0,270);
	amp(0,300);
	amp(0,330);
	amp(0,360);
	amp(0,390);
	amp(0,420);

	
	amp(30,120);
	amp(30,180);

	amp(60,60);
	amp(60,120);
	amp(60,180);
	amp(60,240);
	amp(60,270);
	amp(60,300);
	amp(60,360);
	amp(60,390);


	amp(90,60);
	amp(90,120);
	amp(90,180);
	amp(90,240);

	amp(120,60);
	amp(120,90);
	amp(120,120);
	amp(120,180);
	amp(120,240);
	amp(120,270);
	amp(120,300);
	amp(120,330);
	amp(120,360);
	

	amp(150,330);
	

	amp(180,30);
	amp(180,60);
	amp(180,90);
	amp(180,120);
	amp(180,150);
	amp(180,180);
	amp(180,210);
	amp(180,240);
	amp(180,270);
	amp(180,330);
	amp(180,390);
	amp(180,420);
	




	amp(210,270);
	amp(210,330);
	amp(210,420);

	amp(240,60);
	amp(240,120);
	amp(240,150);
	amp(240,180);
	amp(240,210);
	amp(240,240);
	amp(240,270);
	amp(240,330);
	amp(240,390);

	amp(270,60);
	amp(270,330);
	amp(270,420);

	amp(300,60);
	amp(300,90);
	amp(300,120);
	amp(300,150);
	amp(300,210);
	amp(300,240);
	amp(300,270);
	amp(300,300);
	amp(300,330);
	amp(300,360);
	amp(300,390);
	amp(300,420);

	amp(330,150);
	amp(330,210);

	amp(360,60);
	amp(360,90);
	amp(360,150);
	amp(360,210);
	amp(360,240);
	amp(360,270);
	amp(360,330);
	amp(360,360);

	amp(390,60);
	amp(390,150);
	amp(390,330);

	amp(420,60);
	amp(420,90);
	amp(420,120);
	amp(420,150);
	amp(420,180);
	amp(420,210);
	amp(420,240);
	amp(420,270);
	amp(420,330);
	amp(420,390);

	amp(450,150);
	amp(450,270);
	amp(450,330);

	amp(480,30);
	amp(480,90);
	amp(480,150);
	amp(480,210);
	amp(480,270);
	amp(480,330);
	amp(480,360);

	amp(510,90);
	amp(510,210);
	amp(510,330);

	amp(540,30);
	amp(540,60);
	amp(540,90);
	amp(540,150);
	amp(540,180);
	amp(540,210);
	amp(540,240);
	amp(540,270);
	amp(540,300);
	amp(540,330);
	amp(540,360);

	amp(570,240);
	amp(570,360);
	amp(570,180);

	amp(600,60);
	amp(600,90);
	amp(600,120);
	amp(600,150);
	amp(600,180);
	amp(600,240);
	amp(600,300);
	amp(600,360);

	amp(630,60);
	amp(630,180);
	amp(630,240);
	amp(630,300);
	amp(630,330);
	amp(630,360);

	amp(660,60);
	amp(660,120);
	amp(660,180);
	amp(630,240);

	amp(690,60);
	amp(690,120);
	amp(690,240);
	amp(690,270);
	amp(690,300);
	amp(690,330);
	amp(690,360);

	amp(720,60);
	amp(750,150);
	amp(720,120);
	amp(720,180);

	amp(750,60);
	amp(750,90);
	amp(750,120);
	amp(750,180);
	amp(750,210);
	amp(750,240);
	amp(750,270);
	amp(750,300);
	amp(750,360);
	amp(750,390);

	amp(780,180);

	amp(810,60);
	amp(810,90);
	amp(810,120);
	amp(810,180);
	amp(810,210);
	amp(810,240);
	amp(810,270);
	amp(810,330);
	amp(810,360);
	amp(810,390);

	
	amp(840,120);
	amp(840,180);

	amp(870,30);
	amp(870,60);
	amp(870,120);
	amp(870,150);
	amp(870,180);
	amp(870,210);
	amp(870,240);
	amp(870,270);
	amp(870,300);
	amp(870,330);
	amp(870,360);
	amp(870,390);
	
}