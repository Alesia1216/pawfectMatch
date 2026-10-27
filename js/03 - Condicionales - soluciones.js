// 03 - CONDICIONALES: SOLUCIONES
// Son posibles otras respuestas si cumplen los requisitos.
// Cambia los datos iniciales para comprobar los casos propuestos.


// 1. Acceso a un taller
const nombreOriginalE1 = "  ana  ";
const nombreE1 = nombreOriginalE1.trim().toUpperCase();
const edadE1 = 17;
let autorizacionE1 = true;
const pagadoE1 = true;

// Los paréntesis hacen que pagar sea obligatorio en los dos casos.
if (pagadoE1 && (edadE1 >= 18 || autorizacionE1)) {
  console.log(`${nombreE1}: acceso permitido`);
} else {
  console.log(`${nombreE1}: acceso denegado`);
}
// Prueba: cambia autorizacionE1 a false y ejecuta de nuevo.


// 2. Precio final de un envío
const precioUnidadE2 = 24;
let unidadesE2 = 2;
let modoE2 = "express";
let costeEnvioE2 = null;

switch (modoE2) {
  case "normal":
    costeEnvioE2 = 4;
    break;
  case "express":
    costeEnvioE2 = 8;
    break;
  case "recogida":
    costeEnvioE2 = 0;
    break;
  default:
    console.log("Modo no válido");
}

// null indica que switch no encontró un modo válido.
if (costeEnvioE2 !== null) {
  const subtotalE2 = precioUnidadE2 * unidadesE2;
  if (subtotalE2 >= 60) {
    costeEnvioE2 = 0;
  }
  const totalE2 = subtotalE2 + costeEnvioE2;
  console.log(`Subtotal: ${subtotalE2} €. Envío: ${costeEnvioE2} €. Total: ${totalE2} €.`);
}
// Prueba: unidadesE2 = 3. El envío pasará a 0 €.


// 3. Nivel según la puntuación
let puntuacionE3 = 82;
let nivelE3;

// La validez se comprueba antes de clasificar la puntuación.
if (puntuacionE3 < 0 || puntuacionE3 > 100) {
  nivelE3 = "Puntuación no válida";
} else if (puntuacionE3 < 50) {
  nivelE3 = "Inicial";
} else if (puntuacionE3 < 80) {
  nivelE3 = "Intermedio";
} else {
  nivelE3 = "Avanzado";
}

const certificadoE3 =
  puntuacionE3 >= 0 && puntuacionE3 <= 100 && puntuacionE3 >= 80
    ? "Certificado"
    : "Sin certificado";
console.log(`${nivelE3}. ${certificadoE3}.`);


// 4. Comprobar un código
let codigoOriginalE4 = "  vip-2026  ";
const codigoLimpioE4 = codigoOriginalE4.trim().toUpperCase();
const prefijoCorrectoE4 = codigoLimpioE4.slice(0, 3) === "VIP";
const anioCorrectoE4 = codigoLimpioE4.includes("2026");

if (prefijoCorrectoE4 && anioCorrectoE4) {
  console.log(`${codigoLimpioE4}: código aceptado`);
} else {
  console.log(`${codigoLimpioE4}: código rechazado`);
}


// 5. Estado de un pedido
let estadoE5 = "preparando";
let mensajeE5;
let horasE5 = null;

switch (estadoE5) {
  case "pendiente":
    mensajeE5 = "Aún no ha empezado";
    horasE5 = 24;
    break;
  case "preparando":
    mensajeE5 = "Se está preparando";
    horasE5 = 12;
    break;
  case "enviado":
    mensajeE5 = "Va de camino";
    horasE5 = 2;
    break;
  case "entregado":
    mensajeE5 = "Ya se ha entregado";
    horasE5 = 0;
    break;
  default:
    mensajeE5 = "Estado desconocido";
}

if (horasE5 === null) {
  console.log(mensajeE5);
} else {
  const faseE5 = horasE5 > 0 ? "En curso" : "Finalizado";
  console.log(`${mensajeE5}. ${horasE5} horas. ${faseE5}.`);
}


// 6. Descuento de una compra
const precioE6 = 12;
const cantidadE6 = 4;
let socioE6 = true;
let cuponOriginalE6 = "  otoño10  ";
const cuponE6 = cuponOriginalE6.trim().toUpperCase();
const subtotalE6 = precioE6 * cantidadE6;
let descuentoE6 = 0;

// else if impide acumular el cupón y el descuento de socio.
if (cuponE6 === "OTOÑO10") {
  descuentoE6 = 10;
} else if (socioE6) {
  descuentoE6 = 5;
}

const totalE6 = subtotalE6 * (1 - descuentoE6 / 100);
console.log(`Subtotal: ${subtotalE6} €. Descuento: ${descuentoE6} %. Total: ${totalE6} €.`);


// 7. Reto: inscripción a una actividad
const actividadOriginalE7 = "  escalada  ";
const actividadE7 = actividadOriginalE7.trim().toUpperCase();
let turnoE7 = "tarde";
const inscritosE7 = 13;
let solicitudesE7 = 2;
const precioPlazaE7 = 11;
let pagadasE7 = true;
const edadE7 = 16;
const autorizacionE7 = true;
let aforoE7 = null;

switch (turnoE7) {
  case "mañana":
    aforoE7 = 12;
    break;
  case "tarde":
    aforoE7 = 15;
    break;
  case "noche":
    aforoE7 = 10;
    break;
}

const turnoValidoE7 = aforoE7 !== null;
const totalPersonasE7 = inscritosE7 + solicitudesE7;
const cabenE7 = turnoValidoE7 && totalPersonasE7 <= aforoE7;
const edadPermitidaE7 = edadE7 >= 18 || autorizacionE7;
const aceptadaE7 = turnoValidoE7 && cabenE7 && pagadasE7 && edadPermitidaE7;
const ingresoE7 = aceptadaE7 ? solicitudesE7 * precioPlazaE7 : 0;

// El orden de los motivos coincide con el orden de las validaciones.
if (!turnoValidoE7) {
  console.log("Turno inválido");
} else if (!cabenE7) {
  console.log("Faltan plazas");
} else if (!pagadasE7) {
  console.log("Pago pendiente");
} else if (!edadPermitidaE7) {
  console.log("Edad sin autorización");
} else {
  console.log(`${actividadE7}: inscripción aceptada en turno de ${turnoE7}`);
}
console.log(`Ingreso de esta inscripción: ${ingresoE7} €`);


// 8. Reto: venta con stock y presupuesto
const productoOriginalE8 = "  mochila  ";
const productoE8 = productoOriginalE8.trim().toLowerCase();
const cuponOriginalE8 = "  OFERTA5  ";
const cuponE8 = cuponOriginalE8.trim().toUpperCase();
let cantidadE8 = 2;
let presupuestoE8 = 50;
const socioE8 = true;
let precioE8 = null;
let stockE8 = null;

switch (productoE8) {
  case "libro":
    precioE8 = 15;
    stockE8 = 8;
    break;
  case "cuaderno":
    precioE8 = 4;
    stockE8 = 20;
    break;
  case "mochila":
    precioE8 = 28;
    stockE8 = 3;
    break;
}

if (precioE8 === null) {
  console.log("Producto desconocido");
} else {
  const subtotalE8 = precioE8 * cantidadE8;
  let totalE8 = subtotalE8;

  if (socioE8) {
    totalE8 = totalE8 * 0.9; // Descuento del 10 %.
  }
  if (cuponE8 === "OFERTA5" && subtotalE8 >= 50) {
    totalE8 = totalE8 - 5; // Se aplica después del descuento de socio.
  }

  if (cantidadE8 > stockE8) {
    console.log("Stock insuficiente");
  } else if (totalE8 > presupuestoE8) {
    console.log(`Presupuesto insuficiente: faltan ${totalE8 - presupuestoE8} €`);
  } else {
    stockE8 = stockE8 - cantidadE8; // Solo ahora se confirma la venta.
    const textoStockE8 = stockE8 === 1 ? "Queda 1 unidad" : `Quedan ${stockE8} unidades`;
    console.log(`Venta confirmada. Total: ${totalE8} €. ${textoStockE8}.`);
  }
}
