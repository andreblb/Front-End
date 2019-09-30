let estados = [
  'Ceará',
  'São Paulo',
  'Pernambuco',
  'Maranhão',
  'Bahia',
  'Paraíba',
  'Rio Grande do Norte',
  'Alagoas',
];
estados[26] = 'Distrito Federal';

document.write('<select>');

estados.map(function (cadaEstado) {
  document.write(`<option>${cadaEstado}</option>`);
});

estados.map((cadaEstado) => {
  document.write(`<option>${cadaEstado}</option>`);
});

//for (let i = 0; i <= estados.length - 1; i++) {
//  document.write(`<option>${estados[i]}</option>`);
//}
document.write('</select>');
