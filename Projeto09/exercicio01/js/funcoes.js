const estados=[
    {
        estado:'Ceará',
        uf: 'ce',
        cidades: ['Fortaleza']
    },
    {
        estado:'Bahia',
        uf: 'ba',
        cidades:['Salvador',' ilheus']
    },
    {
        estado:'Acre',
        uf: 'ac',
        cidades:['Rio Branco']
    },
    {
        estado:'Paraiba',
        uf:'pa',
        cidades: ['Rio bEanco']
    },
];

let opcoes = '';
estados.map(cadaEstado => {
    
    opcoes += `<option>${cadaEstado.estado}</option>`;
});
document.getElementById('estado').innerHTML += opcoes;

document.getElementById('estado').addEventListener('change', () => {
    let options = document.getElementById('estado').options;
    let estadoSelecionado = options[options.selectedIndex].text;
    
    let resultado = estados.filter((cadaEstado) => {
        
    return cadaEstado.estado === estadoSelecionado;
        
    });
    if(!resultado){
        alert('Escolha um estado válido');
    }
    
    options ='<option> -- Selecione --</option>';
    resultado[0].cidades.map (cadaCidade => {
        options +=`<option>${cadaCidade}</option>`
    });
    document.getElementById('cidade').innerHTML= options;
});

document.getElementById('enviar').addEventListener('click',(evento) =>{
    evento.preventDefault();
    
    document.getElementById('form').style.display='none';
    
    let estado = document.getElementById('estado').value;
    let cidade = document.getElementById('cidade').value;
    let bairro = document.getElementById('bairro').value;
    let logradouro = document.getElementById('logradouro').value;
    
    document.getElementById('resultado_estado').innerHTML = estado;
    
    document.getElementById('resultado_cidade').innerHTML = cidade;
    
    document.getElementById('resultado_bairro').innerHTML = bairro;
    
    document.getElementById('resultado_logradouro').innerHTML = logradouro;
    
    
    document.getElementById('endereco').style.display ='block';
    document.getElementById('endereco').setInteval(10000).style.display='none'
    
    document.getElementById('form').style.display='block';
    
});
