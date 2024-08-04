let compartilhar_imovel_pp = document.querySelector('body > main > section.section_banner > div.caminho_navegacao > div > ul > li')
let compartilhar_imovel_redes = document.querySelector('body > main > section.section_banner > div.caminho_navegacao > div > ul > li > div')

compartilhar_imovel_pp.addEventListener('click', function(){

    compartilhar_imovel_redes.classList.toggle('hidden')
    
})


// Logica para compartilhar imóvel similar
let compartilhar_similar = document.querySelectorAll('body > main > section.imoveis_similares > div > div > div > div.btns_similar > span')

compartilhar_similar.forEach((item)=>{

    item.addEventListener('click', function(){
        
        let pai_btn_similar = item.closest('.btns_similar')

        let compartilhar_similar_icons = pai_btn_similar.querySelector('.shareon');


        compartilhar_similar_icons.classList.toggle('hidden')


    })

})


// Fechar menu lat

let icone_fechar = document.querySelector('body > div.nav_lat > div.fechar_menu > i')
let nav_lat = document.querySelector('.nav_lat')
let open_nav_lat = document.querySelector('.icone_menu')

let opcoes = document.querySelectorAll('.opcoes_lat ul li a')

icone_fechar.addEventListener('click', function(){
    nav_lat.classList.remove('nav_lat_open')


})

open_nav_lat.addEventListener('click', function(){
    nav_lat.classList.add('nav_lat_open')


})

document.addEventListener('click', function(event) {

    if(!nav_lat.contains(event.target) && !open_nav_lat.contains(event.target) ){
        nav_lat.classList.remove('nav_lat_open')

    }

  })


  
  let pai_banner = document.querySelector('.pai_banners');



  let imagens_secundarias = document.querySelectorAll('.imagens_banners a img');
  let largura_pai = pai_banner.offsetWidth;

 




document.addEventListener('DOMContentLoaded', function() {
   
    if (window.innerWidth <= 800) {  
        
        imagens_secundarias.forEach((img) => {
            img.style.width = `${largura_pai}px`;
        });
    }
});





let voltar = document.querySelector('.voltar')
let passar = document.querySelector('.passar')

let qtd_imagem = document.querySelectorAll('.pai_banners img')

let deslocamento = 0
let indice = 0


function passar_carrossel(){

    deslocamento = 0
    indice += 1

    

    if(indice > 0){

        if(indice < qtd_imagem.length){
            pai_banner.style.transform = `translateX(-${largura_pai * indice}px)`
        }
        else{
            pai_banner.style.transform = `translateX(0px)`
            indice = 0
        }        
    }
    
}


function voltar_carrossel(){

    deslocamento = 0
    indice -= 1

    

    if(indice >= 0){


        if(indice < qtd_imagem.length){
            pai_banner.style.transform = `translateX(-${largura_pai * indice}px)`
        }
        else{
            indice = 0
            pai_banner.style.transform = `translateX(0px)`
            
        }
    }

    else{
        indice = qtd_imagem.length - 1
        pai_banner.style.transform = `translateX(-${largura_pai * indice}px)`
        
    }


}


passar.addEventListener('click', function(){
    passar_carrossel()
})

voltar.addEventListener('click', function(){
    voltar_carrossel()
})


    
    let close_lista = document.querySelector('body > section.lista-img-container > button')
    let container_lista = document.querySelector('.lista-img-container')

    let imagens_primarioo = document.querySelectorAll('.pai_imagens_carrossel img')



    let imagens_modal_mobile = document.querySelectorAll('.lista-img img')



    document.addEventListener('DOMContentLoaded', function() {
      container_lista.classList.add('remover')
      container_lista.classList.remove('exibir')

      
    })

    let body = document.querySelector('body')

    close_lista.addEventListener('click', function() {
      container_lista.classList.remove('exibir')
      container_lista.classList.add('remover')
      body.classList.remove('lb-disable-scrolling')
    })


    

    let imagens_total = document.querySelectorAll('.pai_banners a img')
    

    setTimeout(() => {


        imagens_total.forEach((img) => {


        img.addEventListener('click', function() {

          let pop_up = document.querySelector('#lightboxOverlay')
          let elementos = document.querySelector('#lightbox')

          if (window.innerWidth <= 800) {

            pop_up.classList.add('remover')
            elementos.classList.add('remover')

            

            container_lista.classList.add('exibir')
            container_lista.classList.remove('remover')

            

            
          } else {

            pop_up.classList.remove('remover')
            elementos.classList.remove('remover')

          }

        })


      })

    }, 400)




let container_primario = document.querySelector('.banners')

let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;
let isDown = false;
const threshold = 50; 
const verticalThreshold = 90; 


container_primario.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX;
    startY = e.touches[0].pageY;
}, { passive: true });

container_primario.addEventListener('touchend', (e) => {
    if (!isDown) return;
    isDown = false;
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    
    if (Math.abs(deltaX) > threshold && Math.abs(deltaY) < verticalThreshold) {
        if (deltaX > 0) {
            voltar.click();
        } else {
            passar.click(); 
        }
    }
}, { passive: true });

container_primario.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    endX = e.touches[0].pageX;
    endY = e.touches[0].pageY;
    
    const deltaX = Math.abs(endX - startX);
    const deltaY = Math.abs(endY - startY);

    
    if (deltaY > verticalThreshold && deltaY > deltaX) {
        return; 
    }
    
    e.preventDefault(); 
}, { passive: false });




document.getElementById('tel_form1').addEventListener('keyup', function(){
    mTel()
  })
  document.getElementById('tel_form2').addEventListener('keyup', function(){
    mTel()
  })

  document.getElementById('numberInput').addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');
});


  function mTel () {
    var tel = event.target.value;
    tel = tel.replace(/\D/g, "")
    tel = tel.replace(/^(\d)/, "($1")
    tel = tel.replace(/(.{3})(\d)/, "$1)$2")
    if (tel.length == 9) {
       tel = tel.replace(/(.{1})$/, "-$1")
    } else if (tel.length == 10) {
       tel = tel.replace(/(.{2})$/, "-$1")
    } else if (tel.length == 11) {
       tel = tel.replace(/(.{3})$/, "-$1")
    } else if (tel.length == 12) {
       tel = tel.replace(/(.{4})$/, "-$1")
    } else if (tel.length > 12) {
       tel = tel.replace(/(.{4})$/, "-$1")
    }
    event.target.value = tel;
 }

  