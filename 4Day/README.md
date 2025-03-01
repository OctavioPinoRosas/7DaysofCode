# Día 4: Juego del Número Secreto 🔢🎮

¡Bienvenido al Día 4 del reto **#7DaysOfCode**! Hoy cree un divertido juego en **JavaScript** en el que el usuario debe adivinar un número secreto generado aleatoriamente por la computadora.

## 🎯 Objetivo del Juego  

El programa seleccionará un número secreto entre 1 y 10, y el usuario tendrá **3 intentos** para adivinarlo.  

- Si el usuario acierta, el juego lo felicitará.  
- Si falla, recibirá pistas indicando si el número secreto es mayor o menor.  
- Si no acierta en los 3 intentos, se acaba el juego y debe de reiniciarlo para intentarlo otra vez. 

## 📌 Características Implementadas

✔️ Uso de **estructuras de control de flujo** (`if`, `else`).  
✔️ Uso de **bucles** (`while`) para gestionar intentos.  
✔️ Generación de **números aleatorios** con `Math.random()`.  
✔️ Interacción con el usuario a través del **DOM** (`document.querySelector`).  
✔️ Botón para **reiniciar** el juego.

## 🛠️ Cómo Usarlo
1️⃣ Clonar el repositorio
Si aún no tienes el código en tu máquina local, clónalo con:
```
git clone https://github.com/OctavioPinoRosas/7DaysOfCode.git
```
2️⃣ Abrir el archivo en el navegador
Abre el archivo index.html en cualquier navegador para jugar.

3️⃣ Interactuar con el juego
Ingresa un número en la caja de texto y presiona "Intentar".
El juego te dirá si acertaste o si el número es mayor o menor.
Tienes 3 intentos para adivinar el número correcto.
Si fallas 3 veces, se mostrará el número secreto y podrás reiniciar el juego.

4️⃣ Reiniciar el juego
Presiona el botón "Reiniciar" para generar un nuevo número secreto y volver a jugar.

### 📂 Cómo descargar solo la carpeta `4Day`

Si solo necesitas la carpeta `4Day` sin clonar todo el repositorio, aquí tienes algunas opciones:

### 🚀 **Opción 1: Usar `git sparse-checkout` (Recomendado)**
Si quieres descargar solo esta carpeta usando Git:

```bash
git clone --no-checkout --filter=blob:none --sparse https://github.com/OctavioPinoRosas/7DaysofCode.git
cd 7DaysofCode
git sparse-checkout set 4Day
git checkout
```

Esto descargará únicamente la carpeta `4Day` sin los demás archivos del repositorio.

---

### 🛠 **Opción 2: Usar `svn` (Alternativa sin Git)**
Si tienes `svn` instalado, puedes descargar solo la carpeta con:

```bash
svn checkout https://github.com/OctavioPinoRosas/7DaysofCode/trunk/4Day
```

Esto funciona porque GitHub permite acceso vía **Subversion (`svn`)** a los repositorios.

---

### 📥 **Opción 3: Descargar manualmente los archivos**
Si solo necesitas algunos archivos dentro de `4Day`, puedes:
1. Ir a [4Day en GitHub](https://github.com/OctavioPinoRosas/7DaysofCode/tree/94abfeac10e96388c154dc181cd60c01b4539578/4Day).
2. Hacer clic en cada archivo individualmente y luego en el botón **"Download"**.

---

💡 **Nota:**
- La opción **1 (`git sparse-checkout`)** es ideal si trabajas con Git.
- La opción **2 (`svn checkout`)** es útil si no quieres clonar todo el repositorio.
- La opción **3 (descarga manual)** es la más sencilla si solo necesitas unos pocos archivos.

🚀 ¡Elige la opción que mejor te funcione!
