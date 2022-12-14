class Billete {
  constructor(v, c, n) {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;
    this.nombre = n;
    this.imagen.src = imagenes[this.nombre];
  }
  mostrar() {
    document.body.appendChild(this.imagen);
  }
}
let imagenes = [];
imagenes["Cincuenta"] = "vaca.webp";
imagenes["Veinte"] = "pollo.webp";
imagenes["Diez"] = "cerdo.webp";
let caja = [];
caja.push(new Billete(50, 10, "Cincuenta"));
caja.push(new Billete(20, 10, "Veinte"));
caja.push(new Billete(10, 30, "Diez"));

const boton = document.getElementById("extraer");
const resultado = document.getElementById("resultado");
const maximo = document.getElementById("maximo");
const rl = document.getElementById("resultado1");

boton.addEventListener("click", entregarDinero);

let sumamaxima = 0;
for (let q of caja) {
  sumamaxima += (q.valor * q.cantidad);

}
maximo.innerHTML = "Actualmente disponemos de solo $" + sumamaxima + ".";

function entregarDinero() {

  let entregado = [];
  const t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  if (dinero > 0 && dinero <= sumamaxima) {

    for (b of caja) {
      rl.innerHTML = "";
      var div;
      var papeles;
      var sumaentregado = 0;
      div = Math.floor(dinero / b.valor);
      if (div > b.cantidad) {
        papeles = b.cantidad;
      } else {
        papeles = div;
      }
      entregado.push(new Billete(b.valor, papeles, b.nombre));
      dinero = dinero - (b.valor * papeles);
      b.cantidad = b.cantidad - papeles;
    }
    for (var e of entregado) {
      if (e.cantidad > 0) {
        resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br/>";
        for (var i = 0; i < e.cantidad; i++) {
          resultado.appendChild(e.imagen);
          resultado.innerHTML += " " + "</br>";
        }
        sumaentregado += e.valor * e.cantidad;

      }
    }

    sumamaxima = sumamaxima - sumaentregado;
    maximo.innerHTML = "Actualmente disponemos de solo $" + sumamaxima + "." + "<br/>";
    console.log(entregado);

  } else {
    rl.innerHTML = "Introduce una suma igual o menor a " + sumamaxima + "." + "<br/>";
  }
}
