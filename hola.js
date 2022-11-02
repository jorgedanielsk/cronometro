
const boton1 = document.getElementById("boton1");
const boton0 = document.getElementById("boton0");
boton1.addEventListener("click", accion1);
boton0.addEventListener("click", reiniciar);

const spanMinutos = document.querySelector(".minutos");
const spanSegundos = document.querySelector(".segundos");
const spanCentesimas = document.querySelector(".centesimas");


let minutos = "00";
let segundos = "00";
let centesimas = "00";

let corriendo = null;

function dibujarTiempo(){

	spanMinutos.innerHTML = minutos;
	spanSegundos.innerHTML = segundos;
	spanCentesimas.innerHTML = centesimas;
}

function reiniciar(){

	minutos = "00";
	segundos = "00";
	centesimas = "00";
	dibujarTiempo();
}

function accion1(){

	if(corriendo){
		detener();
		boton0.disabled = false;
	}
	else{
		boton0.disabled = true;
		iniciar();
	}
}

function iniciar(){

	const sumarMinuto = () => {

		if(minutos < 99) minutos++;
	}

	const sumarSegundo = () => {

		if(segundos === 59){
			segundos = 0;
			sumarMinuto();
		}
		else{
			segundos++;
		}
	}

	const incrementar = () => {

		if(centesimas === 99){
			centesimas = 0;
			sumarSegundo();
		}
		else{
			centesimas++;
		}

		dibujarTiempo();
	}

	corriendo = setInterval(incrementar, 10);
	boton1.innerHTML = "Detener";
}

function detener(){

	clearInterval(corriendo);
	corriendo = null;
	boton1.innerHTML = "Iniciar";
}

dibujarTiempo();