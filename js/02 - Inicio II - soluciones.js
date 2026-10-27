// 02 - INICIO (II): CADENAS DE TEXTO
// Ejercicios para practicar cadenas de texto en JavaScript.
// Escribe tus respuestas debajo de "Tu código". Los ejemplos son pistas,
// no soluciones. Antes de ejecutar, intenta predecir el resultado.
// Usa nombres de variables distintos en cada ejercicio para poder ejecutar
// el archivo completo sin errores por repetir un let o un const.


// ============================================================
// 01. UNIR TEXTOS Y MEDIR SU LONGITUD
// ============================================================

// Mini ejemplo: + une textos; length indica cuántos caracteres tienen.
// const saludo = "Hola" + " " + "Ana";
// console.log(saludo);        // Hola Ana
// console.log(saludo.length); // 8: el espacio también cuenta.

// Ejercicio 1. Guarda por separado el nombre de una actividad y el nombre
// de su sala. Muestra una frase con ambos datos, separándolos con " - ".
// Comprueba con typeof que el resultado es un string.
// Tu código:
const actividadE1 = "Escalada";
const salaE1 = "Pabellón";
const fichaE1 = actividadE1 + " - " + salaE1;
console.log(fichaE1, typeof fichaE1);

// Ejercicio 2. Guarda el nombre de tu aplicación en una variable. Muestra
// su longitud. Cambia el nombre por otro que contenga un espacio y observa
// cómo cambia la longitud. ¿El espacio se cuenta como un carácter?
// Tu código:
let nombreAppE2 = "Activa";
console.log(nombreAppE2.length); // 6
nombreAppE2 = "Activa Plus";
console.log(nombreAppE2.length); // 11: el espacio cuenta.

// ============================================================
// 02. CARACTERES Y CAMBIOS DE MAYÚSCULAS
// ============================================================

// Mini ejemplo: los caracteres empiezan en la posición 0.
// const palabra = "Yoga";
// console.log(palabra[0]);                 // Y
// console.log(palabra[palabra.length - 1]); // a

// Ejercicio 3. Guarda el nombre de un monitor. Muestra su primer carácter
// y su último carácter sin escribir a mano la posición del último.
// Cambia el nombre por otro de distinta longitud y comprueba el resultado.
// Tu código:
let monitorE3 = "Nuria";
console.log(monitorE3[0], monitorE3[monitorE3.length - 1]);
monitorE3 = "Alejandro";
console.log(monitorE3[0], monitorE3[monitorE3.length - 1]);

// Ejercicio 4. Guarda un título que mezcle mayúsculas y minúsculas, por
// ejemplo "cLaSe De PiLaTeS". Muéstralo todo en mayúsculas y después todo
// en minúsculas. Muestra también la variable original: ¿ha cambiado?
// Tu código:
const tituloE4 = "cLaSe De PiLaTeS";
console.log(tituloE4.toUpperCase());
console.log(tituloE4.toLowerCase());
console.log(tituloE4); // El texto original no cambia.

// ============================================================
// 03. BUSCAR DENTRO DE UNA CADENA
// ============================================================

// Mini ejemplo: includes responde true/false; indexOf indica la posición.
// const aviso = "Clase de natación";
// console.log(aviso.includes("natación")); // true
// console.log(aviso.indexOf("de"));        // 6

// Ejercicio 5. Guarda "Reserva para pilates a las 18:00". Comprueba si
// contiene "pilates" y luego si contiene "yoga". Explica con un comentario
// qué significan los dos resultados booleanos.
// Tu código:
const reservaE5 = "Reserva para pilates a las 18:00";
console.log(reservaE5.includes("pilates")); // true: aparece.
console.log(reservaE5.includes("yoga")); // false: no aparece.

// Ejercicio 6. Con el mismo texto, averigua en qué posición comienza
// "18:00". Busca también "mañana". ¿Qué devuelve indexOf cuando no la
// encuentra? Muestra ambos resultados.
// Tu código:
const reservaE6 = "Reserva para pilates a las 18:00";
console.log(reservaE6.indexOf("18:00")); // 27
console.log(reservaE6.indexOf("mañana")); // -1: no se encuentra.

// Ejercicio 7. Crea dos nombres de actividades iguales salvo por sus
// mayúsculas, por ejemplo "Yoga" y "yoga". Compara ambos con ===.
// Después compáralos tras convertirlos a minúsculas. ¿Cambia el resultado?
// Tu código:
const actividadA_E7 = "Yoga";
const actividadB_E7 = "yoga";
console.log(actividadA_E7 === actividadB_E7); // false
console.log(actividadA_E7.toLowerCase() === actividadB_E7.toLowerCase()); // true

// ============================================================
// 04. EXTRAER Y SUSTITUIR TEXTO
// ============================================================

// Mini ejemplo: slice(inicio, fin) extrae desde inicio hasta antes de fin.
// const codigo = "ACT-245";
// console.log(codigo.slice(0, 3)); // ACT
// console.log(codigo.slice(4));    // 245

// Ejercicio 8. Guarda el código "SALA-204". Muestra por separado "SALA"
// y "204" usando slice. Haz que la segunda extracción llegue hasta el
// final sin indicar el número de la última posición.
// Tu código:
const codigoE8 = "SALA-204";
console.log(codigoE8.slice(0, 4)); // SALA
console.log(codigoE8.slice(5)); // 204, hasta el final.

// Ejercicio 9. Guarda el aviso "Clase cancelada". Crea y muestra otro
// texto en el que "cancelada" se cambie por "confirmada". Muestra también
// el aviso original para comprobar si replace lo ha modificado.
// Tu código:
const avisoE9 = "Clase cancelada";
const avisoNuevoE9 = avisoE9.replace("cancelada", "confirmada");
console.log(avisoNuevoE9);
console.log(avisoE9); // Sigue siendo "Clase cancelada".

// Ejercicio 10. Guarda "sala norte sala sur". Sustituye todas las apariciones
// de "sala" por "aula". Prueba primero replace y observa qué ocurre;
// después utiliza replaceAll para conseguir el resultado pedido.
// Tu código:
const salasE10 = "sala norte sala sur";
console.log(salasE10.replace("sala", "aula")); // Solo cambia la primera.
console.log(salasE10.replaceAll("sala", "aula")); // Cambian las dos.

// ============================================================
// 05. PLANTILLAS DE TEXTO
// ============================================================

// Mini ejemplo: las comillas invertidas permiten incluir variables con ${}.
// const persona = "Lucía";
// console.log(`Hola, ${persona}.`); // Hola, Lucía.

// Ejercicio 11. Guarda el nombre de una actividad, su precio y el número
// de participantes. Muestra una sola frase con los tres datos usando
// comillas invertidas y ${}. Incluye el importe total calculado.
// Tu código:
const actividadE11 = "Boxeo";
const precioE11 = 8;
const personasE11 = 12;
console.log(`La actividad ${actividadE11} cuesta ${precioE11} € por persona; ${personasE11} participantes aportan ${precioE11 * personasE11} €.`);

// Ejercicio 12. Escribe con comillas invertidas un mensaje de tres líneas:
// actividad, sala y hora. Los valores deben venir de variables. Comprueba
// en la consola que aparecen tres líneas, no el texto "\n".
// Tu código:
const actividadE12 = "Baile";
const salaE12 = "Sala Verde";
const horaE12 = "17:30";
console.log(`Actividad: ${actividadE12}
Sala: ${salaE12}
Hora: ${horaE12}`);

// Ejercicio 13. Guarda dos nombres de salas diferentes. Comprueba con ===
// si los nombres son iguales y si tienen la misma longitud. Muestra una
// frase para cada comprobación con su resultado true o false.
// Tu código:
const salaA_E13 = "Norte";
const salaB_E13 = "Patio";
console.log(`¿Mismo nombre? ${salaA_E13 === salaB_E13}`); // false
console.log(`¿Misma longitud? ${salaA_E13.length === salaB_E13.length}`); // true

// ============================================================
// 06. RETOS MÁS DIFÍCILES: SOLO CADENAS
// ============================================================

// Ejercicio 14. Recibes "   yoga para principiantes   ". Prepara un
// nombre para mostrar en pantalla: quita los espacios de los extremos con
// trim, conviértelo a mayúsculas y cambia "PRINCIPIANTES" por "INICIO".
// Guarda el resultado en otra variable. Muestra el original y el nuevo.
// Pista: puedes encadenar métodos, pero también hacerlo paso a paso.
// Tu código:
const originalE14 = "   yoga para principiantes   ";
const nuevoE14 = originalE14.trim().toUpperCase().replace("PRINCIPIANTES", "INICIO");
console.log(originalE14); // Conserva espacios y minúsculas.
console.log(nuevoE14); // YOGA PARA INICIO

// Ejercicio 15. Tienes "RES-2026-154". Extrae con slice el tipo (RES),
// el año (2026) y el número final (154). Forma este mensaje con una
// plantilla: "Reserva 154 del año 2026 (tipo RES)".
// Después comprueba con includes si el código pertenece a 2026.
// Tu código:
const codigoE15 = "RES-2026-154";
const tipoE15 = codigoE15.slice(0, 3);
const anioE15 = codigoE15.slice(4, 8);
const numeroE15 = codigoE15.slice(9);
console.log(`Reserva ${numeroE15} del año ${anioE15} (tipo ${tipoE15})`);
console.log(codigoE15.includes("2026")); // true

// ============================================================
// 07. RETOS QUE MEZCLAN CONTENIDOS ANTERIORES
// ============================================================

// Ejercicio 16. Una clase admite 15 personas y ya hay 12. Llegan 3
// solicitudes, cada una cuesta 9 euros y todas han pagado.
// a) Calcula cuántas personas habría si se aceptaran.
// b) Usa <= y && para comprobar que caben Y han pagado.
// c) Con un ternario, muestra "Reserva aceptada" o "Sin plazas".
// d) Muestra con una plantilla el ingreso de las solicitudes aceptadas.
//    Si no se aceptan, el ingreso será 0. Cambia solicitudes a 4 y prueba.
// Tu código:
const aforoE16 = 15;
const inscritosE16 = 12;
let solicitudesE16 = 3;
const precioE16 = 9;
const pagadasE16 = true;
let totalE16 = inscritosE16 + solicitudesE16;
let aceptadaE16 = totalE16 <= aforoE16 && pagadasE16;
let ingresoE16 = aceptadaE16 ? solicitudesE16 * precioE16 : 0;
console.log(aceptadaE16 ? "Reserva aceptada" : "Sin plazas");
console.log(`Personas: ${totalE16}. Ingreso: ${ingresoE16} €`);
solicitudesE16 = 4;
totalE16 = inscritosE16 + solicitudesE16;
aceptadaE16 = totalE16 <= aforoE16 && pagadasE16;
ingresoE16 = aceptadaE16 ? solicitudesE16 * precioE16 : 0;
console.log(aceptadaE16 ? "Reserva aceptada" : "Sin plazas");
console.log(`Personas: ${totalE16}. Ingreso: ${ingresoE16} €`);

// Ejercicio 17. Una persona escribe el código "  VIP-12  ". La reserva
// solo se puede aceptar si el código, tras quitar los espacios de los
// extremos, empieza por "VIP" Y quedan al menos 2 plazas libres.
// a) Guarda el código limpio con trim y comprueba el prefijo con slice.
// b) Parte de un aforo de 15 y 13 personas inscritas; calcula plazas libres.
// c) Usa && y un ternario para mostrar "Acceso permitido" o
//    "Acceso denegado". Muestra el código limpio junto al mensaje.
// d) Cambia los inscritos a 14 y observa qué resultado cambia.
// Tu código:
const codigoOriginalE17 = "  VIP-12  ";
const codigoLimpioE17 = codigoOriginalE17.trim();
const prefijoValidoE17 = codigoLimpioE17.slice(0, 3) === "VIP";
const aforoE17 = 15;
let inscritosE17 = 13;
let libresE17 = aforoE17 - inscritosE17;
let accesoE17 = prefijoValidoE17 && libresE17 >= 2;
console.log(`${codigoLimpioE17}: ${accesoE17 ? "Acceso permitido" : "Acceso denegado"}`);
inscritosE17 = 14;
libresE17 = aforoE17 - inscritosE17;
accesoE17 = prefijoValidoE17 && libresE17 >= 2;
console.log(`${codigoLimpioE17}: ${accesoE17 ? "Acceso permitido" : "Acceso denegado"}`);
