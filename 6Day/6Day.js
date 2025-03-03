let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let respuesta1 = 1;
let cantidadRespuestas = 0;

while(respuesta1 == 1 || respuesta1 == 3){
    let respuesta1 = prompt(`¿Desea agregar un alimento a ti lista de compras${(cantidadRespuestas === 0) ? '?' : ' o eliminar un elemento?'} 1 = Agregar, 2 = No agregar${(cantidadRespuestas === 0) ? '' : ' 3 = Eliminar un producto'}`);
    cantidadRespuestas = 1;
    if(respuesta1 == 1){
        let producto = prompt("Escriba el nombre del producto:");
        let categoria = prompt("¿En que categoria le gustaria agregar el producto? 1.Frutas. 2.Lacteos. 3.Congelados. 4.Dulces.");
        switch(categoria){
            case "1":
                frutas.push(" " + producto);
                break;
            case "2":
                lacteos.push(" " + producto);
                break;
            case "3":
                congelados.push(" " + producto);
                break;
            case "4":
                dulces.push(" " + producto);
                break;
        }
    }
    else if(respuesta1==2){
        break;
    }
    else if(respuesta1==3){
        let categoriaEliminar = prompt(`Selecione la categoria de la cual desea eliminar un producto: \n1. Frutas:${frutas} \n2. Lacteos:${lacteos} \n3. Congelados:${congelados} \n4. Dulces:${dulces}`);
        let productoEliminar;
        switch (categoriaEliminar){
            case "1":
                productoEliminar = prompt(`selecione el numero del producto a elimnar${elemtoEliminar(frutas)}`);
                frutas.splice(productoEliminar-1,1);
                break;
            case "2":
                productoEliminar = prompt(`selecione el numero del producto a elimnar${elemtoEliminar(lacteos)}`);
                lacteos.splice(productoEliminar-1,1);
                break;
            case "3":
                productoEliminar = prompt(`selecione el numero del producto a elimnar${elemtoEliminar(congelados)}`);
                congelados.splice(productoEliminar-1,1);
                break;
            case "4":
                productoEliminar = prompt(`selecione el numero del producto a elimnar${elemtoEliminar(dulces)}`);
                dulces.splice(productoEliminar-1,1);
                break;
        }
    }
}

alert(`Lista de compras final:
    \nFrutas:${frutas} \nLacteos:${lacteos} \nCongelados:${congelados} \nDulces:${dulces}`);

function elemtoEliminar (categoria){
    let lista = "";
    for (let i = 0; i < categoria.length; i++){
        lista += `\n${i + 1}. ${categoria[i]}`
    }
    return lista;
}