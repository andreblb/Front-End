let request = new XMLHttpRequest();
request.open('GET', 'https://servicodados.ibge.gov.br/api/v1/localidades/estados');
request.responseType = 'json';
request.onload=()=>{
    let estados = request.response.sort((estado1, estado2)=>{
        if(estado1.nome > estado2.nome){
            return 1;
        }
        if(estado1.nome < estado2.nome){
           return -1;
        }
        return 0;
    });
    estados.map((estado)=>{
        document.getElementById('estado').innerHTML += `<option value=${estado.id}>${estado.nome}</option>`
        
    });

    
};
request.send();



document.getElementById('estado').addEventListener('change', ()=>{
    let id = document.getElementById('estado').value;
    
    document.getElementById('cidade').innerHTML='';
    
    let request = new XMLHttpRequest();
    request.open('GET', `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`);
    request.responseType = 'json';
    request.onload = ()=>{
        request.response.map(cidade=>{
            document.getElementById('cidade').innerHTML +=`<option>${cidade.nome}</option>`
        });
        
    };
    
    request.send();
    
});