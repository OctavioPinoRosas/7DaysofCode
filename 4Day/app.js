let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
document.getElementById('intentar').removeAttribute('disabled');

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    while (intentos < 3){
        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        if (numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.querySelector('#intentar').setAttribute('disabled','true');
        } else {
            //El usuario no acertó
            if (numeroDeUsuario > numeroSecreto){
                asignarTextoElemento('p',`El número secreto es menor. Oportunidad: ${intentos+1}`);
            } else{
                asignarTextoElemento('p',`El número secreto es mayor. Oportunidad: ${intentos+1}`);
            }
            intentos++;
            limpiaCaja();
        }
        return;
    }
    asignarTextoElemento('p',`No has asertado el numero en las tres oportunidades. Intenta de nuevo`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.querySelector('#intentar').setAttribute('disabled','true');
}

function limpiaCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else{
        //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}. Tienes 3 intentos. Oportunidad: ${intentos+1}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiaCaja();
    //Indicar mensaje de intervalo de números
    //Generar el numero aleatorio
    //Iniciar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    document.getElementById('intentar').removeAttribute('disabled');
}

condicionesIniciales();