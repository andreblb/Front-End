$('#formCadastro').submit((evento)=>{
    evento.preventDefault();
   
    
    let contato = {
        nome: $('#nome').val(),
        email: $('#email').val(),
        telefone: $('#telefone').val(),
        criado_em: new Date(),
        
    };
    
        let contatos = localStorage.getItem('contatos') || '[]';
    
    contatos = JSON.parse(contatos);
    
    $('tabelaContatos').html('');
    
    contatos.push(contato);
    
    localStorage.setItem('contatos', JSON.stringify(contatos));
    
    atualizarTabela();
    
    $('#formCadastro')[0].reset();
    
    $('#modalCadastro').modal('hide');
});

const atualizarTabela = ()=>{
    let contatos = localStorage.getItem('contatos') ||'[]';
    
    contatos = JSON.parse(contatos);
    contatos.map(cadaContato=>{
        $('#tabelaContatos').append(`
        <tr>
            <td>${cadaContato.nome}</td>
            <td>${cadaContato.email}</td>
            <td>${cadaContato.telefone}</td>
            <td>${cadaContato.criado_em}</td>
            <td>
                <a href="#" class="btn btn-warning">Editar</a>
                <a href="#" class="btn btn-danger">Excluir</a>
            </td>
        </tr>
        `);
    });
    
};

atualizarTabela();