let velocidadeAtual = document.getElementById('velocidade').innerHTML;

document.getElementById('ligar').addEventListener('click', ()=>{
    
    document.getElementById('ligar').style.display='none';
    document.getElementById('desligar').style.display='inline';
    document.getElementById('acelerar').style.display='inline';
    document.getElementById('frear').style.display='inline';
    document.getElementById('status').innerHTML= 'Ligado';
    
    document.getElementById('carro').classList.add('ligado');
    
});


document.getElementById('desligar').addEventListener('click', ()=>{
    
    document.getElementById('desligar').style.display='none';
    document.getElementById('ligar').style.display='inline';
    document.getElementById('status').innerHTML= 'Desligado';
    document.getElementById('carro').classList.remove('ligado');
});
document.getElementById('acelerar').addEventListener('click', ()=>{
    
    clearInterval(velocidadeAtual);
    
    let velocidadeAtual = document.getElementById('velocidade').innerHTML;
    
    if(velocidadeAtual<160){  
        
    document.getElementById('velocidade').innerHTML = parseInt(velocidadeAtual) +10;
    }
});

document.getElementById('frear').addEventListener('click', ()=>{
    velocidadeAtual = document.getElementById('velocidade').innerHTML;
    
    setInterval(()=>{
        velocidadeAtual -= 10;
        if(velocidadeAtual < 0){
            clearInterval();
            return;
        }
    document.getElementById('velocidade').innerHTML =velocidadeAtual;
 },200);
});

