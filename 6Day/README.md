# Día 6: Remoción de arrays - Lista de Supermercado 🛒

¡Bienvenido al Día 6 del desafío **#7DaysOfCode**! 🚀  

Hoy trabajé con **Arrays** en **JavaScript** para crear una lista de compras interactiva, permitiendo **agregar y eliminar** productos por categorías.  

---

## 📌 Descripción del Desafío  
El objetivo del reto es mejorar el programa de lista de compras del reto pasado del dia 5, añadiendo la funcionalidad de **eliminar elementos** de la lista.  
Por lo cual el programa debe de pregunte al usuario si desea agregar un alimento a la lista de compras, despues solicite el nombre del producto. Pedir que se asigne el alimento a una categoría predefinida (Frutas, Lácteos, Congelados, Dulces, etc.). Permita agregar múltiples elementos hasta que el usuario decida finalizar. y por ultimo, al terminar, que muestre la lista de compras con los elementos agrupados por categoría.  

---

## 🛠️ Tecnologías Utilizadas  
✅ **JavaScript** para la lógica del programa.  
✅ **Arrays** para gestionar la lista de compras.  
✅ **Métodos de Arrays** como `.push()` y `.splice()` para agregar y eliminar elementos.  
✅ **prompt()** y **alert()** para interactuar con el usuario.  
✅ **switch** y **bucles** para controlar el flujo del programa.  

---

## Funcionalidad del programa:  
1. Pregunta al usuario si desea **agregar** un producto de a lista.  
2. Si elige agregar, solicita el **nombre** del producto y su **categoría**.
3. Regresa a la primer pregunta, pero ahora incluyedo la opcion de eliminar un producto de la lista.
4. Si elige eliminar, muestra los productos actuales en cada categoria correspondiente. Permite seleccionar la categoria en la cuál se encuentra el producto a eliminar.
5. Muestra los productos de esta ctegoria y te permite seleccionar que producto eliminar.
6. Vuelve al inicio, ya sea para agregar o eliminar productos. Si seleccionas no agregar, Finaliza las preguntas.  
5. Al finalizar, imprime la lista con los productos agrupados por categorías.  

---

### 🚀 Ejemplo de Funcionamiento  
Si el usuario agrega y elimina los siguientes elementos:  

🔹 **Agrega**:  
- 🍌 Banana (Frutas)  
- 🥛 Leche en polvo (Lácteos)  
- 🍅 Tomate (Frutas)  
- 🥑 Aguacate (Frutas)  
- 🍬 Chicle (Dulces)  

🔹 **Elimina**:  
- 🍬 Chicle (Dulces)  

🔹 **Resultado Final**:  
Lista de compras:
Frutas: Banana, Tomate, Aguacate  
Lácteos: Leche en polvo  
Dulces:  
Congelados:

## 💻 Cómo Usarlo
1️⃣ Clonar el repositorio:  
`git clone https://github.com/OctavioPinoRosas/7DaysOfCode.git`

2️⃣ Abrir el archivo en el navegador:  
Abre index.html en cualquier navegador para ejecutar el programa.

3️⃣ Interactuar con el programa:  
Responde si deseas agregar (1), no agregar (2) o eliminar (3) un producto.
Si agregas, introduce el nombre y elige la categoría.
Si eliminas, selecciona la categoría y el producto a eliminar.
Cuando termines (selecionas 2 = no agregar), el programa mostrará la lista final de compras.

### 📂 Cómo descargar solo la carpeta `6Day`

Si solo necesitas la carpeta `6Day` sin clonar todo el repositorio, aquí tienes algunas opciones:

### 🚀 **Opción 1: Usar `git sparse-checkout` (Recomendado)**
Si quieres descargar solo esta carpeta usando Git:

```bash
git clone --no-checkout --filter=blob:none --sparse https://github.com/OctavioPinoRosas/7DaysofCode.git
cd 7DaysofCode
git sparse-checkout set 6Day
git checkout
```

Esto descargará únicamente la carpeta `6Day` sin los demás archivos del repositorio.

---

### 🛠 **Opción 2: Usar `svn` (Alternativa sin Git)**
Si tienes `svn` instalado, puedes descargar solo la carpeta con:

```bash
svn checkout https://github.com/OctavioPinoRosas/7DaysofCode/trunk/6Day
```

Esto funciona porque GitHub permite acceso vía **Subversion (`svn`)** a los repositorios.

---

### 📥 **Opción 3: Descargar manualmente los archivos**
Si solo necesitas algunos archivos dentro de `6Day`, puedes:
1. Ir a **6Day en GitHub**.
2. Hacer clic en cada archivo individualmente y luego en el botón **"Download"**.

---

💡 **Nota:**
- La opción **1 (`git sparse-checkout`)** es ideal si trabajas con Git.
- La opción **2 (`svn checkout`)** es útil si no quieres clonar todo el repositorio.
- La opción **3 (descarga manual)** es la más sencilla si solo necesitas unos pocos archivos.