document.write('<select>');
let option = 1;
while (option <= 10) {
  document.write(`<option>${option}</option>`);
  option++;
}
document.write('</select><br><br>');




let contador = 1;
while (contador <= 10) {
  document.write(`Javascript ${contador}<br>`);
  //contador = contador + 1;
  //contador += 1;
  contador++;
}

let numero = 100;
while (numero >= 1) {
  if (numero % 2 === 0) {
    document.write(`Javascript ${numero}<br>`);
  }

  numero-=2;
}
