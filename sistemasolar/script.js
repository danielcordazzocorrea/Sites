 let ativar = document.querySelector('.planeta')
 let p = document.getElementById('eixo')
ativar.addEventListener("mouseenter", () => {
    ativar.classList.remove('imagem_inativa')
    ativar.classList.add('imagem_ativa')
    p.classList.remove('inativa')
    p.classList.add('ativa')
    p.style.color = 'white'
})
ativar.addEventListener("mouseleave", () => {
    p.classList.remove('ativa')
    p.classList.add('inativa')
    ativar.classList.remove('imagem_ativa')
    ativar.classList.add('imagem_inativa')
    p.style.color = 'black'
})