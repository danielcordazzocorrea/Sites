function clicar(){
    if (botao.innerHTML == 'Inicie'){
    botao.innerHTML = 'Pare'
    let cont = 0
    intervalo = setInterval(() =>{
    cont ++
    contador.innerHTML = cont
    if (cont == 5){
    clearInterval(intervalo)
    botao.innerHTML = 'Inicie'
    qcliques.innerHTML = 0
    contador.innerHTML = 0
}
}, 1000)
    }else{
        botao.innerHTML = 'Inicie'
        clearInterval(intervalo)
    }

    
}
function contar(){
    if (botao.innerHTML == 'Pare'){
        cliques = Number(qcliques.innerHTML)
        cliques += 1
        qcliques.innerHTML = cliques 
    }
}