console.log("Hola, este es un mensaje de repaso en JavaScript.");
console.log(1+1);
console.log("1+1");
console.log(2);
console.log("2");

/* Variables */

var antigua = "var - no se usa"; //desuso
let nueva = "let - puede cambiar y se usa";
const constante = "const - no cambia";

console.log(antigua);
console.log(nueva);
console.log(constante);

nueva = "nuevo valor";
console.log(nueva);

const monitor = "Carla";
const precio = 7;
const precio2 = 7.5;
const aprobado = true;
const precio3 = "7";

console.log(monitor, typeof monitor);
console.log(precio, typeof precio);
console.log(precio2, typeof precio2);
console.log(aprobado, typeof aprobado);
console.log(precio3, typeof precio3);

let nodato;
console.log(nodato, typeof nodato); //undefined
let nodato2 = null;
console.log(nodato2, typeof nodato2); //object

let saldo = 100;
console.log(saldo, typeof saldo);
console.log(100 === "100"); //false === compara valor y tipo de dato
console.log(100 !== "100"); //true !== compara valor y tipo de dato

console.log(100 == "100"); //true == compara solo valor
console.log(100 != "100"); //false != compara solo valor

const articulo = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
const cantidadMonitor = 10;
console.log(articulo.nombre + " " + cantidadMonitor + " disponible a" + articulo.precio + "€");
console.log(`El articulo ${articulo.nombre} tiene un precio de ${articulo.precio}€ y hay ${cantidadMonitor} unidades disponibles`);

const etiqueta = "sillablanca DE MADERA";
console.log(etiqueta.length);
console.log(etiqueta[etiqueta.length - 1]);
console.log(etiqueta[0]);
console.log(etiqueta.toUpperCase());
console.log(etiqueta.toLowerCase());

const avisoEntrega = "Paquete listo para recoger";
console.log(avisoEntrega.includes("listo"));
console.log(avisoEntrega.includes("animal"));
console.log(avisoEntrega.startsWith("Paquete"));
console.log(avisoEntrega.endsWith("recoger"));
console.log(avisoEntrega.indexOf("listo"));
console.log(avisoEntrega.indexOf("animal"));
console.log(avisoEntrega.slice(0, 7));

const codigo = "  EQ-47C3    ";
console.log(codigo.trim());
console.log(codigo.trimStart());
console.log(codigo.trimEnd());

console.log(codigo.trim().slice(0, 5).toLowerCase());


const notas = "pendiente, aprobado, sobresaliente";
console.log(notas.split(","));
console.log(notas.replace("sobresaliente", "NOTABLE"));

const documento = true;
if(documento){
    console.log("El documento es verdadero");
}else{
    console.log("El documento es falso");
}
const validado = documento ? "El documento es verdadero" : "El documento es falso";
console.log(validado);