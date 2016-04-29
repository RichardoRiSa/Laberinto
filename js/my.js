/*
	Este codigo fue creado por ricardo rivera sanchez basado en el los video tutoriales de codigo facilito.com
	este es el codigo principal dej juego en el se encuentra la logica de todo el juego. todo los diseños fueron creados
	por miriam crisanto zetina los sonido esta tomado de la pagina http://www.freesound.org/ la imagen de fondo y el gif de la 
	moneda son tomados de google.com
*/


var juego = {
	estado: 'pausado',
	tiempo: 0,
	besttime:0,
	seg: 0,
	monedass: 0,
	tmodedass: 0,
	levl:0
}



var status = true;
var pos_pj = 1;
var sonido_tiempo = 0;

var loopjuego;

var teclado37 = false;
var teclado38 = false;
var teclado39 = false;
var teclado40 = false;


var canvas = $("#mycanvas").get(0);
var ctx  = canvas.getContext("2d");
var fondo;
var cuad;
var tele;
var coin;
var img_reloj;
var img_pj1;
var img_pj2;
var img_pj3;
var img_pj4;
var vel_pj = 2;
var sonido_error;
var sonido_record;
var sonido_md;
var sonido_game;
var sonido_nave;
var sonido_reloj;
var sonido_teleport;
var brecord = true;

var teclado = {}
// arreglo para guardar todos los cuadros que forman al mapa 
var mapa = [];
var rel = [];
var moned = [];

juego.besttime = $("#besttime").val();

function miriam (lineax) {
	for(var i in muro){
		amp(lineax,(muro[i]*30))
	}
}

// Funcion delay esta en prueba aun no funciona 

//function delay (timems) {
//	for (var i = 0; i < timems; i++) {
//		setTimeout('return 0', 1);
//	}
//}

function marcador () {


	$("#marc").text("Record:"+juego.besttime+" --- Tiempo:"+juego.seg.toFixed(3)+" --- Monedas: "+juego.monedass+"/"+juego.tmodedass);
	$("#tiempo").val(juego.seg.toFixed(3));
	$("#lvl").val(juego.levl);
	if (juego.seg > juego.besttime && brecord) {
		sonido_record.play();
		brecord = false;
	}
}

function com_juego () {
	if (juego.estado == 'pausado' && status) {
		juego.estado = 'jugando';
	}
	if (hit(pj,fin) && juego.monedass == juego.tmodedass ) {
		juego.estado = 'Finalizado';
	}
}


function loadMedia () {
	sonido_record = document.createElement('audio');
	document.body.appendChild(sonido_record);
	sonido_record.setAttribute('src','music/record.wav');
	sonido_md = document.createElement('audio');
	document.body.appendChild(sonido_md);
	sonido_md.setAttribute('src','music/coin.wav');
	sonido_error = document.createElement('audio');
	document.body.appendChild(sonido_error);
	sonido_error.setAttribute('src','music/error.wav');
	sonido_teleport = document.createElement('audio');
	document.body.appendChild(sonido_teleport);
	sonido_teleport.setAttribute('src','music/teleport.wav');
	sonido_game = document.createElement('audio');
	document.body.appendChild(sonido_game);
	sonido_game.setAttribute('src','music/game.wav');
	sonido_nave = document.createElement('audio');
	document.body.appendChild(sonido_nave);
	sonido_nave.setAttribute('src','music/nave.wav');
	sonido_reloj = document.createElement('audio');
	document.body.appendChild(sonido_reloj);
	sonido_reloj.setAttribute('src','music/reloj.wav');
	img_reloj = new Image();
	img_reloj.src = 'img/reloj.png';
	coin = new Image();
	coin.src = 'img/moneda.png';
	tele = new Image();
	tele.src = 'img/tele.png';
	img_pj1 = new Image();
	img_pj1.src = 'img/p_1.png';
	img_pj2 = new Image();
	img_pj2.src = 'img/p_2.png';
	img_pj3 = new Image();
	img_pj3.src = 'img/p_3.png';
	img_pj4 = new Image();
	img_pj4.src = 'img/p_4.png';
	cuad = new Image();
	cuad.src = 'img/imagen.jpg';
	fondo = new Image();
	fondo.src  = 'img/fondo.png';
	// delay(5000);  este ratardo aun no funciona PD no es importante 
	fondo.onload = function(){
		loopjuego = window.setInterval(frameLoop,1000/55);
	}

}
function dibujaFondo () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function db_pj () {
	if (pos_pj == 1) {
		ctx.drawImage(img_pj1,pj.x,pj.y);
	}
	if (pos_pj == 2) {
		ctx.drawImage(img_pj2,pj.x,pj.y);
	}
	if (pos_pj == 3) {
		ctx.drawImage(img_pj3,pj.x,pj.y);
	}
	if (pos_pj == 4) {
		ctx.drawImage(img_pj4,pj.x,pj.y);
	}
}

function db_mapa () {
	for(var i in mapa){
		var mp = mapa[i];
		ctx.drawImage(cuad,mp.x,mp.y);
	}

	for(var j in rel){
		var reloj = rel[j];
		ctx.drawImage(img_reloj,reloj.x,reloj.y);

	}

	for(var x in moned){
		var monedaa = moned[x];
		ctx.drawImage(coin,monedaa.x,monedaa.y);

	}
	ctx.drawImage(tele,telp2.x,telp2.y);
	ctx.drawImage(tele,telp1.x,telp1.y);
}
// capturar teclas :)
function eventoTeclado () {

	agregarEvento(document,"keydown",function(e){
		teclado[e.keyCode] = true;
		console.log(e.keyCode)
	})

	agregarEvento(document,"keyup",function(e){
		teclado[e.keyCode] = false;
	})

	function agregarEvento (elemento,nombreEveto,funcion) {
		if (elemento.addEventListener) {
			elemento.addEventListener(nombreEveto,funcion,false);
		}
	}
}

//terminar capturar teclas
//-------------------------------------------------------------
// logica de coliciones :) 

function hit (a,b) {
	var re = false;
	if (b.x + b.width >= a.x && b.x < a.x + a.width) {
		if (b.y + b.height >= a.y && b.y < a.y + a.height) {
			re = true;
		}
	}

	if (b.x <= a.x && b.x + b.width >= a.x + a.width) {
		if (b.y <= a.y && b.y + b.height >= a.y + a.height) {
			re = true;
		}
	}

	if (a.x <= b.x && a.x + a.width >= b.x + b.width) {
		if (a.y <= b.y && a.y + a.height >= b.y + b.height) {
			re = true;
		}
	}
	return re;
}
//------------------------------------------------------
function contacto () { // funcion que retorno true o false dependiendo de si el pj hace contacto con alguna parte del laberinto
	var regre = false;
	for(var i in mapa){
		var map = mapa[i];
		if (hit(map,pj)) {
			regre = true;
			sonido_error.pause();
			sonido_error.currentTime = 0;
			sonido_error.play();
		}
	}
	// for que se encarga de revisar si el pj iso contacto con un rejoj si es haci lo elimina del mapa y disminuye el tiempo
	for(var j in rel){
		var reloj = rel[j];
		if (hit(reloj,pj)) {
			delete rel[j];
			sonido_reloj.play();
			juego.tiempo = juego.tiempo - 5000;
		}
	}

	for(var x in moned){
		var moneda = moned[x];
		if (hit(moneda,pj)) {
			delete moned[x];
			sonido_md.pause();
			sonido_md.currentTime = 0;
			sonido_md.play();
			juego.monedass++;
		}
	}

	// teletransportadores
	if (hit(pj,telp2)) {
		sonido_teleport.pause();
		sonido_teleport.currentTime = 0;
		sonido_teleport.play();
		pj.x = telp1.sx;
		pj.y = telp1.sy;
	}

	if (hit(pj,telp1)) {
		sonido_teleport.pause();
		sonido_teleport.currentTime = 0;
		sonido_teleport.play();
		pj.x = telp2.sx;
		pj.y = telp2.sy;
	}
	return regre;
}

function mover_pj () {
	if (teclado[37] && pj.x > 0  ) {

		com_juego (); // comprar si aun no se a iniciado el juego para iniciar el contador
		pos_pj = 2; // identificador para imagen del jugador 
		pj.x -= vel_pj; // cambia la posicion del jugador
		if (contacto()) { // revisa que no alla chocado el jugador con nada de lo contrario no avanza
			pj.x += vel_pj;
		}
		
	}

	if (teclado[39] && pj.x < (canvas.width - pj.width) ) {
		com_juego ();
		pos_pj = 1;
		pj.x += vel_pj;
		if (contacto()) {
			pj.x -= vel_pj;
		}
		
	}

	if (teclado[38] && pj.y > 0) {
		com_juego ();
		pos_pj = 3;
		pj.y -= vel_pj;
		if (contacto()) {
			pj.y += vel_pj;
		}
		
	}

	if (teclado[40] && pj.y < (canvas.height - pj.height) ) {
		com_juego ();
		pos_pj = 4;
		pj.y += vel_pj;
		if (contacto()) {
			pj.y -= vel_pj;
		}
		
	}
	
}

function time () {
	if (juego.estado == 'jugando') {
		sonido_game.play();
		juego.tiempo += 18.18; 
		juego.seg =  (juego.tiempo / 1000);
	}
}

function amp (cx,cy) {
	mapa.push({
		x:cx,
		y:cy,
		height:30,
		width:30
	})
}

function reloj (cx,cy) {
	rel.push({
		x:cx,
		y:cy,
		height:30,
		width:30
	})
}

function add_moneda (cx,cy) {
	moned.push({
		x:cx,
		y:cy,
		height:30,
		width:30
	})
}

function frameLoop () {
	if (juego.estado != 'Finalizado') {
		marcador ();
		time();
		mover_pj();
		dibujaFondo();
		db_mapa();
		db_pj();
	}
	else
	{
		sonido_game.pause();
		sonido_game.currentTime = 0;
		sonido_nave.play();
		dibujaFondo();
		// delay(1500);  este retardo aun no funciona PD no es importante 
		document.getElementById("juego").submit();
		clearInterval(loopjuego);
	}
}

Mapa1();
eventoTeclado();
loadMedia();

	



