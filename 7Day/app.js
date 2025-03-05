numero1 = 0;
numero2 = 0;
let operacionB = 0;
let resultado = 0;


condicionesIniciales();

function operacion(){
     // Obtener los valores de los inputs al momento de realizar la operación
     numero1 = parseFloat(document.getElementById("valor1").value);
     numero2 = parseFloat(document.getElementById("valor2").value);
     
     if (isNaN(numero1) || isNaN(numero2)) {
         asignarTextoElemento('p', 'Por favor ingresa números válidos');
         operacion()
         return;
     }
    switch (operacionB){
        case(1):
            resultado = numero1 + numero2;
            break;
        case(2):
            resultado = numero1 - numero2;
            break;
        case(3):
            resultado = numero1 * numero2;
            break;
        case(4):
            resultado = numero1 / numero2;
            if (numero2 == 0){
                asignarTextoElemento('p',`No es posible dividir por 0`)
                operacion();
            }
            break;
    }
}

function sumaF (){
    operacionB = 1;
    escribirNumeros();
    resetBotonResultado();
    asignarTextoElemento('h2',`+`);
}

function restaF (){
    operacionB = 2;
    escribirNumeros();
    resetBotonResultado();
    asignarTextoElemento('h2',`-`);
}

function multiplicacionF (){
    operacionB = 3;
    escribirNumeros();
    resetBotonResultado();
    asignarTextoElemento('h2',`X`);
}

function divisionF (){
    operacionB = 4;
    escribirNumeros();
    resetBotonResultado();
    asignarTextoElemento('h2',`/`);
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function resultadoF(){
    operacion();
    asignarTextoElemento('h2',`El resultado es: ${resultado}.`);
    document.querySelector('#valor1').style.display = 'none';
    document.querySelector('#valor2').style.display = 'none';
    document.getElementById("suma").style.display = 'block';
    document.getElementById("resta").style.display = 'block';
    document.getElementById("multiplicacion").style.display = 'block';
    document.getElementById("division").style.display = 'block';
    document.getElementById("resultado").innerText = "Salir";
    document.querySelector('#resultado').onclick = () => salir();
    asignarTextoElemento('p',``)
    asignarTextoElemento('p2',`Elige una operacion a utilizar`);
    limpiaCaja();
}

function limpiaCaja(){
    document.querySelector('#valor2').value = '';
    document.querySelector('#valor1').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Mi Calculadora');
    asignarTextoElemento('p',`Elige una operacion a realizar`);
    asignarTextoElemento('h2',``);
    asignarTextoElemento('p2',``);
    document.getElementById("resultado").style.display = 'none';
    document.getElementById("valor1").style.display = 'none';
    document.getElementById("valor2").style.display = 'none';
    document.getElementById("suma").style.display = 'block';
    document.getElementById("resta").style.display = 'block';
    document.getElementById("multiplicacion").style.display = 'block';
    document.getElementById("division").style.display = 'block';
}

function escribirNumeros(){
    document.getElementById("valor1").style.display = 'block'
    document.getElementById("valor2").style.display = 'block'
    document.getElementById("suma").style.display = 'none';
    document.getElementById("resta").style.display = 'none';
    document.getElementById("multiplicacion").style.display = 'none';
    document.getElementById("division").style.display = 'none';
    document.getElementById("resultado").style.display = 'block';
    asignarTextoElemento('p', '');
}

function resetBotonResultado() {
    // Asegurarse de que el botón de "Resultado" vuelva a su función original
    document.querySelector('#resultado').innerText = "Resultado";
    document.querySelector('#resultado').onclick = () => resultadoF();
    asignarTextoElemento('p2',``);
}

function salir(){
    asignarTextoElemento('p', '');
    document.getElementById("suma").style.display = 'none';
    document.getElementById("resta").style.display = 'none';
    document.getElementById("multiplicacion").style.display = 'none';
    document.getElementById("division").style.display = 'none';
    document.getElementById("resultado").style.display = 'block';
    document.querySelector('#resultado').innerText = "volver a iniciar";
    document.querySelector('#resultado').onclick = () => condicionesIniciales();
    asignarTextoElemento('h2', '¡¡Hasta la próxima!!');
    asignarTextoElemento('p2',``);
}