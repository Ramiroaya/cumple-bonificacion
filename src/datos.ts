let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let precioUnitario: number;
let cantidad: number;
let mesCumple: string = "octubre";
let compraTotal: number;

//sigue el codigo
btnEnviar.addEventListener("click", () => {
  let mesIngresado = prompt("Ingrese mes del Cumpleaños");
  let precioUnitario = Number(prompt("Ingrese Precio Unitario"));
  let cantidad = Number(prompt("Ingrese la Cantidad"));
  compraTotal = precioUnitario * cantidad;
  if (mesIngresado === mesCumple) {
    compraTotal = compraTotal * 0.85;
    console.log("El Total de su Compra es:" + compraTotal);
  } else {
    console.log("El Total de su Compra es:" + compraTotal);
  }
});
