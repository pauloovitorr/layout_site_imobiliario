// Função para animar os links
let opcoes_menu = document.querySelectorAll('.item')


function anima_links(anima){

    anima.forEach((item, index)=>{
       
        setTimeout(() => {

        item.style = 'top:0'

        }, 250  * index );
    })
}

anima_links(opcoes_menu)


// Função para vizualizar mais filtros

document.querySelector('.btn_filtros').addEventListener('click', () => {
    filtros_extras('extra');
});





function filtros_extras(classe){

    let filtros_extras = document.querySelectorAll(`.${classe}`)

    filtros_extras.forEach((item)=>{
        item.classList.toggle(`exibir`)
    })
}


// Função carrossel destaque

let container_destaque = document.querySelector('.imoveis_destaque')
let cards_imoveis = document.querySelectorAll('.imoveis_destaque a .imovel_destaque')
let container_radio = document.querySelector('.radio_carrossel')


let largura = 0
// let contador = 0

function carrossel(){

    container_destaque.style.transform = `translateX(-${largura}px)`
}



// Função radio carrosesel

function criar_radio(){

    let qtd = cards_imoveis.length - 1

    if(qtd <= 1){
        return
    }
    else if(qtd > 1){
       
        for(let i = 1; i<= qtd; i++){
            let input_radio = document.createElement('input')
            input_radio.type = 'radio'
            input_radio.classList.add('btn_carrossel')
            input_radio.value = i
            input_radio.name = "carrossel"
            
            if(i == 1){
                input_radio.checked = true
            }

            container_radio.append(input_radio)

        }
    }

}

criar_radio()

let radios = document.querySelectorAll('.btn_carrossel')

radios.forEach((item)=>{
    item.addEventListener('change', (evento)=>{

        let checkedRadio = evento.target.value


        if(checkedRadio == 1){
            
            largura = 0
        }
        else if( checkedRadio == 2 ){
            
            largura = cards_imoveis[0].offsetWidth + 45;


        }
        else{

            largura = 0

            for(let i = 0; i < checkedRadio - 1; i++){
                largura += cards_imoveis[i].offsetWidth + 45;
           }


        }

        carrossel()

    })
})


// Carrossel Destaque venda

let container_venda = document.querySelector('.imoveis_carrossel_destaque')
let imoveis_venda = document.querySelectorAll('.imoveis_carrossel_destaque a .item_imovel')
let container_radio_venda = document.querySelector('.radio_carrossel_venda')
let largura_imoveis_venda = 0 // 425

function carrossel_venda(){
    
    container_venda.style.transform = `translateX(-${largura_imoveis_venda}px)`
}



// Paulo

// Cria os Radios do destaque Venda
function criar_radio_venda(){

    let qtd_venda = imoveis_venda.length - 1


    if(qtd_venda <= 1){
        return
    }
    else if(qtd_venda > 1){
       
        for(let i = 1; i<= qtd_venda + 1; i++){
            let input_radio = document.createElement('input')
            input_radio.type = 'radio'
            input_radio.classList.add('radio_destaque_venda')
            input_radio.value = i
            input_radio.name = "destaque_venda"
            
            if(i == 1){
                input_radio.checked = true
            }

            container_radio_venda.append(input_radio)

        }
    }
}

criar_radio_venda()

// Calcula o espaço a ser percorrido
let radio_carrossel_venda = document.querySelectorAll('.radio_destaque_venda')


radio_carrossel_venda.forEach((radio)=>{
    radio.addEventListener('change', (event)=>{
        let valor = event.target.value

        if(valor == 1){
            largura_imoveis_venda = 0
        }
        else if( valor == 2 ){

            largura_imoveis_venda = imoveis_venda[0].offsetWidth + 25;
            
            // largura_imoveis_venda = 430 
        }
        else{

            largura_imoveis_venda = 0

            for(let i = 0; i < valor - 1; i++){
                largura_imoveis_venda += imoveis_venda[i].offsetWidth + 25;
           }
            
            // largura_imoveis_venda = 430 * (valor - 1)
        }

        carrossel_venda()

    })
})

// Função do auto player

function auto_player_venda(){
    if(radio_carrossel_venda.length > 1){

        for(let i = 0; i<radio_carrossel_venda.length; i++){

            if(radio_carrossel_venda[i].checked == true){

                if(radio_carrossel_venda[i].value == 1){
                    // largura_imoveis_venda = 430
                    radio_carrossel_venda[i + 1].click()
                    return
                }
                else if( radio_carrossel_venda[i].value > 1 ){
                    
                    // largura_imoveis_venda = 430 * (radio_carrossel_venda[i].value - 1)

                    if(radio_carrossel_venda.length-1 == i){
                        radio_carrossel_venda[0].click()
                    }else{
                        radio_carrossel_venda[i + 1].click()
                    }

                    return

                }

                carrossel_venda()

            }
        }
    }
}



let isMouseOver = false;

imoveis_venda.forEach((imovel) => {
    imovel.addEventListener('mouseover', () => {
        isMouseOver = true;
    });

    imovel.addEventListener('mouseout', () => {
        isMouseOver = false;
    });
});

function controla_auto_player() {
    if (!isMouseOver) {
        auto_player_venda();
    }
}

setInterval(controla_auto_player, 5000);



// Carrossel Locação
let container_locacao = document.querySelector('.imoveis_carrossel_destaque_locacao')
let imoveis_locacao = document.querySelectorAll('.imoveis_carrossel_destaque_locacao a .item_imovel_locacao')
let container_radio_locacao = document.querySelector('.radio_carrossel_locacao')
let largura_imoveis_locacao = 0 // 430


function carrossel_locacao(){

    

   
    container_locacao.style.transform = `translateX(-${largura_imoveis_locacao}px)`
}

// setInterval(carrossel_locacao, 3000)


// Cria os Radios do destaque Locação
function criar_radio_locacao(){

    let qtd_locacao = imoveis_locacao.length - 1



    if(qtd_locacao <= 1){
        return
    }
    else if(qtd_locacao > 1){
       
        for(let i = 1; i<= qtd_locacao + 1; i++){
            let input_radio = document.createElement('input')
            input_radio.type = 'radio'
            input_radio.classList.add('radio_locacao')
            input_radio.value = i
            input_radio.name = "destaque_locacao"
            
            if(i == 1){
                input_radio.checked = true
            }

            container_radio_locacao.append(input_radio)

        }
    }
}

criar_radio_locacao()


// Calcula o espaço a ser percorrido
let radio_carrossel_locacao = document.querySelectorAll('.radio_locacao')


radio_carrossel_locacao.forEach((radio)=>{
    radio.addEventListener('change', (event)=>{
        let valor = event.target.value

        if(valor == 1){
            largura_imoveis_locacao = 0
        }
        else if( valor == 2 ){

            largura_imoveis_locacao = imoveis_locacao[0].offsetWidth + 25;
            
            // largura_imoveis_locacao = 425 
        }
        else{

            largura_imoveis_locacao = 0

            for(let i = 0; i < valor - 1; i++){
                largura_imoveis_locacao += imoveis_locacao[i].offsetWidth + 25;
           }
            
            // largura_imoveis_locacao = 425 * (valor - 1)
        }

        carrossel_locacao()

    })
})



// Função do auto player

function auto_player_locacao(){
    if(radio_carrossel_locacao.length > 1){

        for(let i = 0; i<radio_carrossel_locacao.length; i++){

            if(radio_carrossel_locacao[i].checked == true){

                if(radio_carrossel_locacao[i].value == 1){
                  
                    radio_carrossel_locacao[i + 1].click()
                    return
                }
                else if( radio_carrossel_locacao[i].value > 1 ){


                    if(radio_carrossel_locacao.length-1 == i){

                        radio_carrossel_locacao[0].click()

                    }else{
                        radio_carrossel_locacao[i + 1].click()
                    }

                    return

                }


                carrossel_locacao()

            }
        }
    }
}

// Auto player locação
let isMouseOverLocacao = false;

imoveis_locacao.forEach((imovel) => {
    imovel.addEventListener('mouseover', () => {
        isMouseOverLocacao = true;
    });

    imovel.addEventListener('mouseout', () => {
        isMouseOverLocacao = false;
    });
});



function controla_auto_player_locacao() {
    if (!isMouseOverLocacao) {
        auto_player_locacao();
    }
}

setInterval(controla_auto_player_locacao, 5000);



// Carrossel atualizados

let container_atualizados = document.querySelector('.carrossel_atualizados')
let imoveis_atualizados = document.querySelectorAll('.carrossel_atualizados a .item_imovel_atualizados')
let container_radio_atualizados = document.querySelector('.radio_carrossel_atualizados')
let largura_imoveis_atualizados = 0 // 425


function carrossel_atualizados(){
   
    container_atualizados.style.transform = `translateX(-${largura_imoveis_atualizados}px)`
}

// setInterval(carrossel_atualizados,3500)

// carrossel_atualizados()

function criar_radio_atualizados(){

    let qtd_atualizados = imoveis_atualizados.length - 1


    if(qtd_atualizados <= 1){
        return
    }
    else if(qtd_atualizados > 1){
       
        for(let i = 1; i<= qtd_atualizados + 1; i++){
            let input_radio = document.createElement('input')
            input_radio.type = 'radio'
            input_radio.classList.add('radio_imoveis_atualizados')
            input_radio.value = i
            input_radio.name = "imoveis_atualizados"
            
            if(i == 1){
                input_radio.checked = true
            }

            container_radio_atualizados.append(input_radio)

        }
    }
}

criar_radio_atualizados()


// Calcula o espaço a ser percorrido
let radio_atualizados = document.querySelectorAll('.radio_imoveis_atualizados')


radio_atualizados.forEach((radio)=>{
    radio.addEventListener('change', (event)=>{
        let valor = event.target.value

        if(valor == 1){
            largura_imoveis_atualizados = 0
        }
        else if( valor == 2 ){
            
            largura_imoveis_atualizados = imoveis_atualizados[0].offsetWidth + 25;
        }
        else{
            
            largura_imoveis_atualizados = 0

            for(let i = 0; i < valor - 1; i++){
                largura_imoveis_atualizados += imoveis_atualizados[i].offsetWidth + 25;
           }
        }

        carrossel_atualizados()

    })
})


// Função do auto player atualizados

function auto_player_atualizados(){
    if(radio_atualizados.length > 1){

        for(let i = 0; i<radio_atualizados.length; i++){

            if(radio_atualizados[i].checked == true){

                if(radio_atualizados[i].value == 1){
                    // largura_imoveis_atualizados = 425
                    radio_atualizados[i + 1].click()
                    return
                }
                else if( radio_atualizados[i].value > 1 ){


                    // largura_imoveis_atualizados = 425 * (radio_atualizados[i].value - 1)


                    if(radio_atualizados.length-1 == i){

                        radio_atualizados[0].click()

                    }else{
                        radio_atualizados[i + 1].click()
                    }

                    return

                }


                carrossel_atualizados()

            }
        }
    }
}


// Controle Auto player atualizados
let isMouseOverAtualizados = false;

imoveis_atualizados.forEach((imovel) => {
    imovel.addEventListener('mouseover', () => {
        isMouseOverAtualizados = true;
    });

    imovel.addEventListener('mouseout', () => {
        isMouseOverAtualizados = false;
    });
});



function controla_auto_player_atualizados() {
    if (!isMouseOverAtualizados) {
        auto_player_atualizados();
    }
}

setInterval(controla_auto_player_atualizados, 5000);