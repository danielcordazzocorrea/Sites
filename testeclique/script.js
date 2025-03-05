function clicar(){
    mensagem.innerHTML = ''
    if (botao.innerHTML == 'Inicie'){
    qcliques.innerHTML = 0
    botao.innerHTML = 'Pare'
    let cont = 0
    intervalo = setInterval(() =>{
    cont ++
    contador.innerHTML = cont
    if (cont == 5){
    clearInterval(intervalo)
    botao.innerHTML = 'Inicie'
    contador.innerHTML = 0
}
}, 1000)
    }else{
        contador.innerHTML = 0
        botao.innerHTML = 'Inicie'
        clearInterval(intervalo)
    }

    
}
function contar(){
    if (botao.innerHTML == 'Pare'){
        cliques = Number(qcliques.innerHTML)
        cliques += 1
        qcliques.innerHTML = cliques
        let quantidade_cliques = cliques 
    }else{
        mensagem.innerHTML = 'Aperte para iniciar primeiro'
    }
}