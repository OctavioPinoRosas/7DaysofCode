numero = 0;
document.querySelector('#respuesta').style.display = 'none';
document.querySelector('#ok').style.display = 'none';
let respuesta = [];

asignarTextoElemento('h2', '¿Quieres seguir hacia el área de Front-End o seguir hacia el área de Back-End');
asignarTextoElemento('.button-add', 'Front-End');
asignarTextoElemento('.button-add2', 'Back-End');

function pregunta2(){
    if (numero == 1){
        asignarTextoElemento('h2', '¿Quieres aprender React o aprender Vue?');
        asignarTextoElemento('.button-add', 'React');
        asignarTextoElemento('.button-add2', 'Vue'); 
        // Cambiamos los eventos de los botones para que ahora pasen a pregunta3()
        document.querySelector('.button-add').onclick = () => pregunta3('React');
        document.querySelector('.button-add2').onclick = () => pregunta3('Vue');
    } else if (numero == 2){
        asignarTextoElemento('h2', '¿Quieres aprender C# o aprender Java?');
        asignarTextoElemento('.button-add', 'C#');
        asignarTextoElemento('.button-add2', 'Java');
        // Cambiamos los eventos de los botones para que ahora pasen a pregunta3() 
        document.querySelector('.button-add').onclick = () => pregunta3('C#');
        document.querySelector('.button-add2').onclick = () => pregunta3('Java');
    }
}

function pregunta3(){
    asignarTextoElemento('h2', '¿Quieres seguir especializándose en el área elegida o desarrollarse para convertirse en Fullstack?');
    asignarTextoElemento('.button-add', 'Area elegida');
    asignarTextoElemento('.button-add2', 'Fullstack');
    document.querySelector('.button-add').onclick = () => pregunta4('Especializarme');
    document.querySelector('.button-add2').onclick = () => pregunta4('Fullstack');
}

function pregunta4(){
    asignarTextoElemento('h2', '¿En qué tecnologías te gustaría especializarte o conocer?');
    // Ocultar botones anteriores
    document.querySelector('.button-add').style.display = 'none';
    document.querySelector('.button-add2').style.display = 'none';

    // Habilitar input y botón OK
    document.querySelector('#respuesta').style.display = 'block';
    document.querySelector('#ok').style.display = 'block';
}

function pregunta5(){
    asignarTextoElemento('h2', '¿Hay alguna otra tecnología que te gustaría aprender?');
    // Mostrar los botones de "Sí" y "No"
    document.querySelector('.button-add').style.display = 'block';
    document.querySelector('.button-add2').style.display = 'block';
    asignarTextoElemento('.button-add', 'Sí');
    asignarTextoElemento('.button-add2', 'No');
    // Asignar eventos a los botones
    document.querySelector('.button-add').onclick = () => {
        pregunta4(); // Si elige "Sí", vuelve a mostrar la pregunta 4
    };
    document.querySelector('.button-add2').onclick = () => {
        mostrarRespuesta(); // Si elige "No", muestra las respuestas
    };
}

function mostrarRespuesta() {
    asignarTextoElemento('h2', '¡Genial! Te gustaría aprender:');
    document.querySelector('.button-add').style.display = 'none';
    document.querySelector('.button-add2').style.display = 'none';

    let resultadoContenedor = document.querySelector('#resultado');
    resultadoContenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas respuestas

    respuesta.forEach(respuesta => {
        let listItem = document.createElement('li'); // Crear un nuevo elemento de lista
        listItem.textContent = respuesta; // Asignar el texto de la respuesta
        resultadoContenedor.appendChild(listItem); // Agregar el item a la lista
    });
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function opcion1(){
    numero = 1
    pregunta2();
}
function opcion2(){
    numero = 2
    pregunta2();
}

function ok() {
    let textoIngresado = document.getElementById("respuesta").value.trim();
    
    if (textoIngresado !== "") {
        respuesta.push(textoIngresado); // Guardamos la respuesta en el array
        pregunta5(); // Avanzamos a la siguiente pregunta

        // Ocultar input y botón OK después de la respuesta
        document.getElementById("respuesta").style.display = 'none';
        document.getElementById("ok").style.display = 'none';
    } else {
        alert("Por favor, escribe algo antes de continuar.");
    }
    limpiaCaja();
}

function limpiaCaja(){
    document.querySelector('#respuesta').value = '';
}