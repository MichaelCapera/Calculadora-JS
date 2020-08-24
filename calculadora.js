//Tomamos el valor de los elementos del DOM- botones constantes
const nums = document.getElementsByName('number');
const operation = document.getElementsByName('operation');
const equal =  document.getElementsByName('equal')[0];
const btndelete =  document.getElementsByName('delete')[0];
var operacionActual = '';
var operacionAnterior = '';
var operacion = undefined;

//Tomamos en una variable el campo de resultado

var resp = document.getElementById('resultado');

// Agregamos eventos a los botones de números

nums.forEach(function(boton){
	boton.addEventListener('click', function(){
		addNumber(boton.innerText);
		//alert(boton.innerText);
	})
})

// Agregamos eventos a los botones de operadores

operation.forEach(function(boton){
	boton.addEventListener('click', function(){
		  tipoOperacion(boton.innerText);
		//alert(boton.innerText);
	})
})
 
// Agregamos evento al boton igual

equal.addEventListener('click', function(){
	calcular();
	imprimirEnPantalla();
})

// Agregamos evento al boton delete

btndelete.addEventListener('click', function(){
	borrar();
	imprimirEnPantalla();

})

//Agregamos funciones
// Función para agregar números

function addNumber(num){
	operacionActual = operacionActual.toString() + num.toString();
	imprimirEnPantalla();
}

// Función para seleccionar el tipo de operación

function tipoOperacion(operacion){
	if(operacionActual === '') return;
	if(operacionAnterior !== ''){
		calcular()
	}
	operar = operacion.toString();
	operacionAnterior = operacionActual;
	operacionActual = '';
}

// Metódo calcular

function calcular(){
	var total;
	const numAnterior = parseFloat(operacionAnterior); 
	const numActual = parseFloat(operacionActual);

	if(isNaN(numAnterior) || isNaN(numActual)) return;
	
	switch(operar){
		case '+':
		        total = numAnterior + numActual;
		        break;
		case '-':
		        total = numAnterior - numActual; 
		        break; 

		case 'x':
		        total = numAnterior * numActual;
		        break;
		case '/':
		        total = numAnterior / numActual; 
		        break; 
		default:
		        return;                    
	}   

	operacionActual = total;
	operacion = undefined;
	operacionAnterior = '';
	

}

// Función para mostrar en pantalla la operación

function imprimirEnPantalla(){
	resultado.value = operacionActual;
}

// Función para borrar los datos en pantalla

function borrar(){
	operacionActual = '';
    operacionAnterior = '';
    operacion = undefined;
}

