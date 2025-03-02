# Día 5 - Arrays y colecciones - Lista de supermercado

¡Un día más y un nuevo desafío en #7DaysOfCode! 🚀

Hoy trabaje con **listas y categorías**, creando una **lista de compras con ordenamiento por categorias** en JavaScript. 🛒

## 📌 Descripción del Desafío

El reto de hoy consistió en desarrollar un programa que:

1. Pregunte al usuario si desea agregar un alimento a la lista de compras.
2. Solicite el nombre del alimento.
3. Pida que se asigne el alimento a una categoría predefinida (Frutas, Lácteos, Congelados, Dulces, etc.).
4. Permita agregar múltiples elementos hasta que el usuario decida finalizar.
5. Al terminar, muestre la lista de compras con los elementos agrupados por categoría.

## 🛠️ Tecnologías Utilizadas

- **JavaScript** para la lógica del programa.
- Uso de **Arrays** para gestionar los elementos de la lista.
- Método `push()` para manejar y agregar los datos a cada array.
- Funcion `prompt()` para entrada de datos.
- Funcion `alert()` para mostrar los datos.
- Estructura de control de flujo `switch`.

## 🚀 Ejemplo de Funcionamiento

Si el usuario agrega los siguientes elementos:

```
banana (Frutas), leche en polvo (Lácteos), tomate (Frutas), leche vegetal (Lácteos),
chicle (Dulces), gominola (Dulces), manzana (Frutas), uva (Frutas),
aguacate (Frutas), leche de vaca (Lácteos)
```

El programa debería imprimir:

```
Lista de compras:
Frutas: banana, tomate, manzana, uva, aguacate
Lácteos: leche vegetal, leche de vaca, leche en polvo
Congelados:
Dulces: chicle y gominola
```
---

## 🛠️ Cómo Usarlo
1️⃣ Clonar el repositorio
Si aún no tienes el código en tu máquina local, clónalo con:
```
git clone https://github.com/OctavioPinoRosas/7DaysOfCode.git
```
2️⃣ Abrir el archivo en el navegador.  
Abre el archivo index.html en cualquier navegador para iniciar el programa.

3️⃣ Interactuar con el programa.
- El programa pregunta al usuario si desea agregar un alimento a la lista de compras (1 = Si, 2 = No). 
- Escriba el nombre del producto.
- Asigne el alimento a una categoría predefinida (1 = Frutas, 2 = Lácteos, 3 = Congelados, 4 = Dulces).
- El programa se repetira la primer pregunta permitiendo agregar múltiples elementos hasta que el usuario decida finalizar seleccionando No (2).
- Al terminar, muestra la lista de compras con los elementos agrupados por categoría.

### 📂 Cómo descargar solo la carpeta `5Day`

Si solo necesitas la carpeta `5Day` sin clonar todo el repositorio, aquí tienes algunas opciones:

### 🚀 **Opción 1: Usar `git sparse-checkout` (Recomendado)**
Si quieres descargar solo esta carpeta usando Git:

```bash
git clone --no-checkout --filter=blob:none --sparse https://github.com/OctavioPinoRosas/7DaysofCode.git
cd 7DaysofCode
git sparse-checkout set 5Day
git checkout
```

Esto descargará únicamente la carpeta `5Day` sin los demás archivos del repositorio.

---

### 🛠 **Opción 2: Usar `svn` (Alternativa sin Git)**
Si tienes `svn` instalado, puedes descargar solo la carpeta con:

```bash
svn checkout https://github.com/OctavioPinoRosas/7DaysofCode/trunk/5Day
```

Esto funciona porque GitHub permite acceso vía **Subversion (`svn`)** a los repositorios.

---

### 📥 **Opción 3: Descargar manualmente los archivos**
Si solo necesitas algunos archivos dentro de `5Day`, puedes:
1. Ir a [5Day en GitHub](https://github.com/OctavioPinoRosas/7DaysofCode/tree/a0b286b6a44969e83a5344e3b9c2967387bca445/5Day).
2. Hacer clic en cada archivo individualmente y luego en el botón **"Download"**.

---

💡 **Nota:**
- La opción **1 (`git sparse-checkout`)** es ideal si trabajas con Git.
- La opción **2 (`svn checkout`)** es útil si no quieres clonar todo el repositorio.
- La opción **3 (descarga manual)** es la más sencilla si solo necesitas unos pocos archivos.

🚀 ¡Elige la opción que mejor te funcione!