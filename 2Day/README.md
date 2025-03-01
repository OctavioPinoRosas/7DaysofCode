# **Día 2 - #7DaysOfCode: Personalización de la experiencia con JavaScript**

## **Descripción**

En este proyecto, creé un pequeño programa en **JavaScript** que simula una experiencia interactiva con el usuario. El objetivo fue personalizar la experiencia del usuario, pidiendo algunos datos personales y mostrando un mensaje de bienvenida dinámico.

El programa realiza las siguientes acciones:

1. Solicita al usuario tres preguntas:
   - ¿Cuál es tu nombre?
   - ¿Cuántos años tienes?
   - ¿Qué lenguaje de programación estás estudiando?

2. Después de obtener las respuestas, muestra un mensaje personalizado con los datos ingresados, por ejemplo:
   
   ```text
   Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje].
   ```

3. Además, como ejercicio opcional, el programa pregunta al usuario si le gusta estudiar el lenguaje que está aprendiendo y muestra un mensaje dependiendo de la respuesta.

---

## **Cómo Funciona**

### 1. **Entrada de Datos**
   - El programa utiliza la función `prompt()` para solicitar al usuario que ingrese su nombre, edad y el lenguaje de programación que está aprendiendo.
   
### 2. **Mensaje Personalizado**
   - Usando los valores ingresados por el usuario, el programa construye y muestra un mensaje personalizado con `alert()`.

### 3. **Mensaje adicional**
   - Después de mostrar el mensaje principal, el programa pregunta al usuario si le gusta estudiar el lenguaje que está aprendiendo, y dependiendo de su respuesta, muestra un mensaje positivo o negativo.

---

## **Tecnologías Utilizadas**

- **JavaScript** para la lógica de programación y la interacción con el usuario.
- **HTML** para la estructura básica de la página.

---

## **Cómo Usarlo**

1. Abre el archivo `index.html` en tu navegador.
2. El programa se ejecutará automáticamente, pidiendo tus respuestas a través de ventanas emergentes (`prompt`).
3. Después de que hayas respondido todas las preguntas, el sistema te dará un mensaje personalizado de acuerdo con tus respuestas.
