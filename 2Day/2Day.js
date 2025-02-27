const nombre = prompt("¿Cual es tu nombre");
const edad = prompt("¿Cuántos años tienes?");
const lenguaje = prompt("¿Que lenguaje de programacion estas estudiando?");

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}`);
const gusto = prompt(`¿Te gusta estudiar ${lenguaje}? Responde 1 para SÍ o  2 para NO.`);
if(gusto == 1){
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else{
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")
}