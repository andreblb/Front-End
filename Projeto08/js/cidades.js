let estados = [
  {
    uf: 'Ceará',
    cidades: ['Fortaleza', 'Caucaia', 'Parambu'],
  },
  {
    uf: 'Pernambuco',
    cidades: ['Recife', 'Olinda'],
  },
  {
    uf: 'Bahia',
    cidades: ['Salvador', 'Feira de Santana'],
  },
  {
    uf: 'Maranhão',
    cidades: ['São Luiz'],
  },
];

estados.map((cadaEstado) => {
  document.getElementById('estados')
  .innerHTML += `<option>${cadaEstado.uf}</option>`;
});

document.getElementById('estados').addEventListener('change', () => {
  let options = document.getElementById('estados').options;
  let uf = options[options.selectedIndex].text;

  document.getElementById('cidades').innerHTML = '';

  estados.map((cadaEstado) => {
    if (cadaEstado.uf === uf) {
      cadaEstado.cidades.map((cadaCidade) => {
        document.getElementById('cidades').innerHTML += `<option>${cadaCidade}</option>`;
      });
    }
  })

});
