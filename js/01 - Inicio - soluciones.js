// EJERCICIOS DE INICIO EN JAVASCRIPT
// Temas: comentarios, consola, variables y tipos de datos.
// Trabaja debajo de cada enunciado. Los ejemplos son pistas, no soluciones.
// Intenta predecir lo que saldrá antes de ejecutar cada bloque.


// ============================================================
// 00. PRIMEROS MENSAJES EN LA CONSOLA
// ============================================================

// Mini ejemplo: estas dos instrucciones no muestran lo mismo.
// console.log("6 + 2"); // Muestra el texto 6 + 2.
// console.log(6 + 2);   // Calcula la suma y muestra 8.


// Ejercicio 1. Escribe un comentario de una línea que indique qué
// aplicación estás preparando. Después escribe un comentario de varias
// líneas que explique qué vas a practicar en este archivo.
// Tu código:
// Proyecto: aplicación de gestión de un centro.
/* Practicaré mensajes de consola,
   variables y operaciones básicas. */

// Ejercicio 2. Muestra en la consola el nombre de tu aplicación.
// En otra línea, muestra el número 15. Por último, muestra el texto
// literal "15". Observa si los dos últimos valores tienen el mismo tipo.
// Tu código:
console.log("Centro Activo");
console.log(15);
console.log("15"); // Mismo aspecto, distinto tipo: number y string.

// Ejercicio 3. Una actividad cuesta 18 euros por persona y se apuntan
// 4 personas. Muestra el importe total con una operación escrita dentro
// de console.log. Después muestra el texto literal "18 * 4".
// Antes de ejecutar, anota qué esperas ver en cada línea.
// Tu código:
console.log(18 * 4); // 72
console.log("18 * 4"); // Texto literal.

// Ejercicio 4. Prueba con los números 17 y 5: una suma, una resta,
// una multiplicación, una división y el resto de la división (%).
// Muestra cada resultado en la consola y comprueba tus predicciones.
// Tu código:
console.log(17 + 5);
console.log(17 - 5);
console.log(17 * 5);
console.log(17 / 5);
console.log(17 % 5); // Sobran 2.

// ============================================================
// 01. VARIABLES Y CONSTANTES
// ============================================================

// Mini ejemplo: let permite guardar un valor nuevo en la misma variable.
// let plazasLibres = 10;
// plazasLibres = 9;
// console.log(plazasLibres); // Muestra 10: la asignación a 9 está comentada.


// Ejercicio 5. Crea una variable con let para las reservas del día.
// Empieza en 2, muestra su valor, guarda un valor nuevo de 3 y vuelve
// a mostrarlo. Explica con un comentario cuál de las dos líneas cambia
// el dato guardado.
// Tu código:
let reservasE5 = 2;
console.log(reservasE5);
reservasE5 = 3; // Esta asignación cambia el valor guardado.
console.log(reservasE5);

// Ejercicio 6. Crea una constante con el nombre de una sala y muéstrala.
// Debajo, escribe una línea que intente cambiar el nombre. Antes de
// ejecutarla, predice el error. Déjala comentada para que el resto del
// archivo pueda seguir funcionando.
// Tu código:
const salaE6 = "Sala Este";
console.log(salaE6);
// salaE6 = "Sala Oeste"; // Error: una constante no se reasigna.

// Ejercicio 7. JavaScript también permite declarar variables con var.
// Declara con var el nombre de una persona, muéstralo, asígnale otro
// nombre y vuelve a mostrarlo. Después haz lo mismo con let.
// Para el código nuevo de la aplicación utilizaremos normalmente
// const si el nombre no se reasigna y let si se va a reasignar.
// Tu código:
var monitorE7 = "Eva";
console.log(monitorE7);
monitorE7 = "Sergio";
console.log(monitorE7);
let monitorNuevoE7 = "Lara";
console.log(monitorNuevoE7);
monitorNuevoE7 = "Tomás";
console.log(monitorNuevoE7);

// ============================================================
// 02. TIPOS DE DATOS
// ============================================================

// Mini ejemplo: typeof indica el tipo del valor que recibe.
// const precioEjemplo = 12;
// console.log(typeof precioEjemplo); // Muestra "number".

// Ejercicio 8. Declara valores relacionados con tu aplicación:
// un texto (string), un número entero, un número decimal y un
// booleano (true o false). Muestra cada valor y, en otra línea,
// su tipo con typeof.
// Tu código:
const deporteE8 = "Tenis";
const plazasE8 = 12;
const costeE8 = 8.5;
const abiertaE8 = true;
console.log(deporteE8, typeof deporteE8);
console.log(plazasE8, typeof plazasE8);
console.log(costeE8, typeof costeE8);
console.log(abiertaE8, typeof abiertaE8);

// Ejercicio 9. Declara una variable sin darle valor y otra con null.
// Muestra ambas y comprueba sus tipos con typeof. El resultado de
// typeof null puede sorprenderte: anota en un comentario qué aparece.
// Tu código:
let pendienteE9;
const ausenciaE9 = null;
console.log(pendienteE9, typeof pendienteE9); // undefined
console.log(ausenciaE9, typeof ausenciaE9); // null y "object" (rareza histórica).

// Ejercicio 10. Crea un Symbol con una descripción relacionada con tu
// proyecto y un BigInt terminado en n. Muestra el tipo de ambos.
// Mini pista: Symbol("registro") y 12345678901234567890n son ejemplos
// de cómo se escriben, pero elige otros valores.
// Tu código:
const claveE10 = Symbol("cliente");
const numeroE10 = 12345678901234567890n;
console.log(typeof claveE10); // symbol
console.log(typeof numeroE10); // bigint

// ============================================================
// 03. REPASO DE LOS PRIMEROS PASOS
// ============================================================

// Mini ejemplo: el valor puede cambiar de tipo si la variable es let.
// let datoEjemplo = 7;
// datoEjemplo = "siete";
// console.log(typeof datoEjemplo); // Muestra "string".

// Ejercicio 11. Crea con let una variable que guarde la cantidad 20.
// Muestra el valor y su tipo. Después asígnale otro número y repite
// las dos comprobaciones. Finalmente asígnale un texto y comprueba
// de nuevo el valor y el tipo. ¿Qué ha cambiado en cada paso?
// Tu código:
let datoE11 = 20;
console.log(datoE11, typeof datoE11);
datoE11 = 25;
console.log(datoE11, typeof datoE11); // Cambió el valor, no el tipo.
datoE11 = "veinticinco";
console.log(datoE11, typeof datoE11); // Ahora el tipo es string.

// ============================================================
// 04 Y 05. OPERADORES
// ============================================================
// Continúa aquí tus soluciones. Usa console.log para comprobarlas.
// Por ahora no necesitas if, funciones, arrays ni elementos del HTML.

// Mini ejemplo: primero se multiplica; los paréntesis cambian el orden.
// console.log(2 + 3 * 4);   // 14
// console.log((2 + 3) * 4); // 20

// La numeración del archivo original pasa del 11 al 14.
// Ejercicio 14. Una clase cuesta 12 euros y se apuntan 6 personas.
// Guarda precio y participantes en variables. Calcula y muestra el
// ingreso total. Después resta 15 euros de gastos y muestra lo que queda.
// Antes de ejecutar, predice ambos resultados.
// Tu código:
const precioE14 = 12;
const participantesE14 = 6;
const ingresoE14 = precioE14 * participantesE14;
console.log("Ingreso total: " + ingresoE14); // 72
console.log("Después de gastos: " + (ingresoE14 - 15)); // 57

// Ejercicio 15. Hay 23 pelotas y quieres guardarlas en cajas de 5.
// Muestra el resultado de dividir 23 entre 5 y el resto con %.
// Explica en un comentario qué te indica el resto en este caso.
// Tu código:
const pelotasE15 = 23;
const capacidadE15 = 5;
console.log(pelotasE15 / capacidadE15); // 4,6
console.log(pelotasE15 % capacidadE15); // Sobran 3 pelotas tras llenar 4 cajas.

// Ejercicio 16. Escribe dos operaciones con los números 4, 2 y 3:
// una sin paréntesis y otra con paréntesis, de modo que den resultados
// diferentes. Después calcula 3 elevado a 4 con **. Predice los tres
// resultados antes de mostrarlos en la consola.
// Tu código:
console.log(4 + 2 * 3); // 10
console.log((4 + 2) * 3); // 18
console.log(3 ** 4); // 81

// Mini ejemplo: += guarda el resultado en la misma variable.
// let puntosEjemplo = 5;
// puntosEjemplo += 2; // Equivale a puntosEjemplo = puntosEjemplo + 2.
// console.log(puntosEjemplo); // 7


// Ejercicio 17. Empieza con 8 reservas. Añade una con ++, quita otra
// con -- y muestra el valor después de cada cambio. ¿Qué valor queda
// finalmente? Escribe una explicación breve en un comentario.
// Tu código:
let reservasE17 = 8;
reservasE17++;
console.log(reservasE17); // 9
reservasE17--;
console.log(reservasE17); // 8: vuelve al valor inicial.

// Ejercicio 18. Una caja contiene 10 unidades. Usa una variable let
// y aplica, en este orden: += 5, -= 3, *= 2 y /= 4. Muestra la
// cantidad después de cada operación. No vuelvas a declarar la variable.
// Tu código:
let unidadesE18 = 10;
unidadesE18 += 5;
console.log(unidadesE18); // 15
unidadesE18 -= 3;
console.log(unidadesE18); // 12
unidadesE18 *= 2;
console.log(unidadesE18); // 24
unidadesE18 /= 4;
console.log(unidadesE18); // 6

// Mini ejemplo: una comparación produce true o false.
// const aforoEjemplo = 15;
// console.log(aforoEjemplo >= 15); // true


// Ejercicio 19. Una actividad exige tener al menos 18 años.
// Guarda una edad de 18 y el mínimo. Muestra los resultados de
// edad > minimo, edad >= minimo y edad < minimo. Explica cuál de
// esas comparaciones sirve para incluir a quien tenga exactamente 18.
// Tu código:
const edadE19 = 18;
const minimoE19 = 18;
console.log(edadE19 > minimoE19);  // false
console.log(edadE19 >= minimoE19); // true: incluye los 18.
console.log(edadE19 < minimoE19);  // false

// Ejercicio 20. Compara el número 12 con el texto "12" usando ==,
// ===, != y !==. Predice los cuatro resultados y compruébalos.
// Escribe un comentario sobre la diferencia entre comparar solo el
// valor y comparar también el tipo.
// Tu código:
const numeroE20 = 12;
const textoE20 = "12";
console.log(numeroE20 == textoE20);  // true: convierte tipos.
console.log(numeroE20 === textoE20); // false: tipos distintos.
console.log(numeroE20 != textoE20);  // false
console.log(numeroE20 !== textoE20); // true

// Mini ejemplo: && exige que se cumplan las dos condiciones.
// const pagadoEjemplo = true;
// const haySitioEjemplo = false;
// console.log(pagadoEjemplo && haySitioEjemplo); // false

// Ejercicio 21. Para entrar a una clase hace falta tener reserva Y
// haber pagado. Guarda ambos datos como booleanos y muestra con &&
// si se cumplen las dos condiciones. Cambia uno de los valores y
// comprueba cómo cambia el resultado.
// Tu código:
const reservaE21 = true;
let pagadoE21 = false;
console.log(reservaE21 && pagadoE21); // false
pagadoE21 = true;
console.log(reservaE21 && pagadoE21); // true

// Ejercicio 22. Una persona puede entrar si tiene una invitación O
// una cuota activa. Comprueba las cuatro combinaciones posibles de
// true y false con ||. Anota cuál es la única que no permite entrar.
// Tu código:
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false: única combinación que impide entrar.

// Ejercicio 23. Usa ! para mostrar lo contrario de true y de false.
// Después predice y comprueba el resultado de !0, !"" y !"hola".
// Relaciónalo en un comentario con los valores falsy y truthy del curso.
// Tu código:
console.log(!true);   // false
console.log(!false);  // true
console.log(!0);      // true: 0 es falsy.
console.log(!"");     // true: texto vacío es falsy.
console.log(!"hola"); // false: texto no vacío es truthy.

// Mini ejemplo: el ternario elige uno de dos resultados.
// const abiertoEjemplo = true;
// console.log(abiertoEjemplo ? "Abierto" : "Cerrado");


// Ejercicio 24. Guarda en una variable si una sala está ocupada.
// Usa el operador ternario para mostrar "No disponible" cuando lo
// esté y "Disponible" cuando no. Cambia el valor y prueba de nuevo.
// Tu código:
let ocupadaE24 = true;
console.log(ocupadaE24 ? "No disponible" : "Disponible");
ocupadaE24 = false;
console.log(ocupadaE24 ? "No disponible" : "Disponible");

// ============================================================
// RETOS FINALES. 
// ============================================================

// Ejercicio 25. Una clase tiene 15 plazas, 13 personas inscritas y
// llegan 2 solicitudes nuevas. Cada plaza cuesta 9 euros.
// a) Calcula el total de personas si aceptas las dos solicitudes.
// b) Comprueba con <= si caben sin superar el aforo.
// c) Añade una variable booleana que indique si han pagado y usa &&
//    para comprobar que caben Y que han pagado.
// d) Usa un ternario para mostrar "Reserva posible" o "No se puede
//    reservar" según el resultado anterior.
// e) Calcula cuánto se ingresaría por las dos plazas. Cambia las
//    solicitudes a 3 y comprueba qué resultados cambian.
// Tu código:
const aforoE25 = 15;
const inscritasE25 = 13;
let solicitudesE25 = 2;
const precioE25 = 9;
const pagadasE25 = true; // Booleano independiente del aforo.
let totalE25 = inscritasE25 + solicitudesE25;
let cabenE25 = totalE25 <= aforoE25;
let posibleE25 = cabenE25 && pagadasE25;
console.log(totalE25, cabenE25);
console.log(posibleE25 ? "Reserva posible" : "No se puede reservar");
console.log("Ingreso: " + (posibleE25 ? solicitudesE25 * precioE25 : 0));
solicitudesE25 = 3;
totalE25 = inscritasE25 + solicitudesE25;
cabenE25 = totalE25 <= aforoE25;
posibleE25 = cabenE25 && pagadasE25;
console.log(totalE25, cabenE25); // 16, false.
console.log(posibleE25 ? "Reserva posible" : "No se puede reservar");
console.log("Ingreso: " + (posibleE25 ? solicitudesE25 * precioE25 : 0));

// Ejercicio 26. Un centro permite el acceso si la cuota está activa
// Y la persona es mayor de edad O tiene autorización. Trabaja con
// estas variables: cuotaActiva = true, edad = 16 y autorizacion = true.
// a) Escribe la condición con &&, || y paréntesis para que la cuota
//    activa sea obligatoria en ambos casos.
// b) Muestra el resultado booleano y un mensaje con un ternario.
// c) Prueba cambiando autorizacion a false y luego edad a 18.
// d) Prueba también con cuotaActiva = false. Explica por qué no puede
//    entrar aunque cumpla la condición de edad o autorización.
// Tu código:
let cuotaActivaE26 = true;
let edadE26 = 16;
let autorizacionE26 = true;
let accesoE26 = cuotaActivaE26 && (edadE26 >= 18 || autorizacionE26);
console.log(accesoE26, accesoE26 ? "Puede entrar" : "No puede entrar");
autorizacionE26 = false;
accesoE26 = cuotaActivaE26 && (edadE26 >= 18 || autorizacionE26);
console.log(accesoE26); // false
edadE26 = 18;
accesoE26 = cuotaActivaE26 && (edadE26 >= 18 || autorizacionE26);
console.log(accesoE26); // true
cuotaActivaE26 = false;
accesoE26 = cuotaActivaE26 && (edadE26 >= 18 || autorizacionE26);
console.log(accesoE26); // false: la cuota es obligatoria.
