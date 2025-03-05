res = document.getElementById('resposta')
botao = document.getElementById('botao')
cliques = 0
function clicar(){
    if (botao.innerHTML == 'Inicie'){
        qcliques.innerHTML = 0
        botao.innerHTML = 'Clique o máximo'
        let cont = 0
        intervalo = setInterval(() =>{
        cont ++
        contador.innerHTML = cont
        if (cont == 10){
            clearInterval(intervalo)
            botao.innerHTML = 'Acabou o tempo'
            contador.innerHTML = 0
            cliques = 0
            tentar_novamente.innerHTML = 'Tentar Novamente'
            tentar_novamente.className = 'botao_tentar'
            quantidade_cliques = Number(qcliques.innerHTML)
            imagens.innerHTML = '<img id="res_imagem" src="imagens/cara bombado.avif" alt=""></img>'
            if (quantidade_cliques >= 1 && quantidade_cliques <= 10){
                res.innerHTML = 'Tu tá mal em'
                imagens.innerHTML = '<img id="res_imagem" src="imagens/Tu é lento.webp" alt=""></img>'
            }else if(quantidade_cliques > 10 && quantidade_cliques <= 20){
                res.innerHTML = 'Tá lentinho'
                imagens.innerHTML = '<img id="res_imagem" src="imagens/lento.png" alt=""></img>'
            }else if(quantidade_cliques > 20 && quantidade_cliques <= 30){
                res.innerHTML = 'Ta normal ai'
                imagens.innerHTML = '<img id="res_imagem" src="imagens/pessoa normal.jpg" alt=""></img>'
            }else if(quantidade_cliques > 30 && quantidade_cliques < 40){
                res.innerHTML = 'Ta legalzin'
                imagens.innerHTML = '<img id="res_imagem" src="imagens/feliz.jpg" alt=""></img>'
            }else if(quantidade_cliques >= 40 && quantidade_cliques < 60){
                res.innerHTML = 'Po maluco ta bom d+ da conta'
                imagens.innerHTML = '<img id="res_imagem" src="imagens/cara bombado.avif" alt=""></img>'
            }else if(quantidade_cliques >= 60 && quantidade_cliques < 69){
                res.innerHTML = 'HACKER'
                imagens.innerHTML = '<img id="res_imagem" src="imagens/hacker.webp" alt=""></img>'
            }else if (quantidade_cliques == 69){
                res.innerHTML = 'VOCÊ GOSTA DE HOMENS'
                res.style.color = 'purple'
                imagens.innerHTML = '<img id="res_imagem" src="imagens/entao ele é.jpg" alt=""></img>'
            }else if(quantidade_cliques > 69 && quantidade_cliques < 80){
                res.innerHTML = 'De tanto apertar esse mouse tu vai ficar calvo'
                imagens.innerHTML = '<img id="res_imagem" src="imagens/calvo.jpeg" alt=""></img>'
            }else if(quantidade_cliques >= 80 && quantidade_cliques < 90){
                res.innerHTML = 'VC É NIVEL NEGÃO'
                imagens.innerHTML = '<img id="res_imagem" src="imagens/bombado.webp" alt=""></img>'
            }else if(quantidade_cliques >= 90 && quantidade_cliques < 100){
                res.innerHTML = 'Po tu é rapido pra degraça'
                imagens.innerHTML = '<img id="res_imagem" src="imagens/sonic.png" alt=""></img>'

            }else if(quantidade_cliques >= 100 && quantidade_cliques < 110){
                res.innerHTML = 'AGORA VOCÊ É NIVEL LUQUETS BOMBADO'
                imagens.innerHTML = '<img id="res_imagem" src="imagens/luquets.jpg" alt=""></img>'
            }else if(quantidade_cliques >= 110){
                res.innerHTML = 'LELECO POR FAVOR CONTENHA-SE'
                imagens.innerHTML = '<img id="res_imagem" src="imagens/leleco.jpg" alt=""></img>'
                res.style.color = 'red'
            }   
            else{
                imagens.innerHTML = '<img id="res_imagem" src="imagens/sem clicar.avif" alt=""></img>'
                res.innerHTML = 'CLICA AI MEU'
                res.style.color = 'red'
            }
            

}
}, 1000)
    }else{
        if(botao.innerHTML == 'Clique o máximo'){
            cliques += 1
            qcliques.innerHTML = cliques
        }
    }

}
function tentar(){
    if(tentar_novamente.innerHTML = 'Tentar Novamente'){
        botao.innerHTML = 'Inicie'
        tentar_novamente.innerHTML = ''
        res.innerHTML = ''
        tentar_novamente.className = ''
        imagens.innerHTML = ''
    }
}