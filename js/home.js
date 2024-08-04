let opcoes = document.querySelectorAll('.opcoes_buscas ul li')

opcoes.forEach((item)=>{
    item.addEventListener('click', function(e){

        for(let i = 0; i< opcoes.length; i++){
            opcoes[i].classList.remove('selecionado')
        }

        item.classList.add('selecionado')
    })
})