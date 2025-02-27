# Día 1 del #7DaysOfCode - Comparaciones de Tipos y Valores en JavaScript

¡Bienvenido al primer desafío de **#7DaysOfCode**! 🎯

## 🚀 Contexto del Desafío

Hoy aprendí un concepto esencial en **JavaScript**: las comparaciones de tipos y valores.

Es algo muy común en este lenguaje, y muchos de nosotros hemos caído en estos errores sin darnos cuenta. En lenguajes como **Java** o **C#**, los errores de comparación de tipos se detectan en tiempo de compilación, mientras que en **JavaScript** estos problemas pueden pasar desapercibidos hasta que se ejecuta el código.

### El Problema Común en JavaScript

En **JavaScript**, los operadores de comparación pueden comportarse de forma extraña debido a la conversión implícita de tipos, lo que puede generar resultados inesperados como estos:

```javascript
console.log( false == '0' ); // true
console.log( null == undefined ); // true
console.log( " \t\r\n" == 0 ); // true
console.log( ' ' == 0 ); // true
```
Aunque a simple vista no tiene sentido que estos valores sean iguales, en JavaScript, el operador `==` permite la conversión automática de tipos, lo que puede llevar a resultados inesperados.

### Diferencia entre los operadores de comparacion
`==`: Este operador compara solo el valor de las variables, no el tipo. Si las variables tienen valores equivalentes pero son de tipos diferentes (por ejemplo, un número y un string), JavaScript intenta hacer una conversión implícita para hacer la comparación.

`===`: Este operador compara tanto el valor como el tipo. Es más estricto, por lo que no realiza conversiones de tipo, y solo devuelve true si las dos variables tienen el mismo valor y el mismo tipo.

## Explicacion del codigo
Este código compara tres pares de variables en JavaScript, donde cada par consiste en un número y un string que representan el mismo valor, pero con tipos de datos diferentes. Las comparaciones se realizan con los operadores == y ===, y los resultados se muestran en la consola.

- Primera comparación: Se usa el comparador `==` con lo cual solo se compara el valor, dando como resultado una de las dos opciones:
Las variables tienen el mismo valor y diferente tipo
no tiene el mismo valor

- Segunda comparación: Se usa el comparador `===` lo cual compara tanto el valor como el tipo de las variables. Si el valor o el tipo son diferentes, se considera que las variables no son iguales:
Las variables tienen el mismo valor y el mismo tipo.
Las variables no tienen el mismo tipo.

- Tercera comparación: Se usa el comparador `==` que solo compara el valor de las variables, sin importar el tipo. El resultado será uno de los siguientes:
Las variables tienen el mismo valor pero tipos diferentes.
Las variables no tienen el mismo valor.
