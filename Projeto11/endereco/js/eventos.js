document.getElementById('cep').addEventListener('blur', ()=>{
    let cep = document.getElementById('cep').value;
   let request = new XMLHttpRequest();
    request.open('GET', `http://viacep.com.br/ws/${cep}/json/`);
    request.responseType = 'json';
    request.onload = ()=>{
        document.getElementById('log').value = request.response.logradouro;
        document.getElementById('bairro').value = request.response.bairro;
        document.getElementById('cidade').value = request.response.localidade;
        document.getElementById('uf').value = request.response.uf;
        
    };
    request.send();
});