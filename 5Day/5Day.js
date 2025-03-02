let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let respuesta1 = 1;

while(respuesta1 == 1){
let respuesta1 = prompt("¿Desea agregar un alimento a ti lista de compras? 1 = Si, 2 = No");
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
}
alert(`Frutas:${frutas}` + `\nLacteos:${lacteos}` + `\nCongelados:${congelados}` + `\nDulces:${dulces}`);