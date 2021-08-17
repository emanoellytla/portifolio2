

var el = document.querySelector('.menu-icon');


el.addEventListener('click',()=>{
    var menuLinks = document.querySelector('.menu_links');
    if(menuLinks.classList.contains('show')){ 
        menuLinks.classList.add('hidder');
        menuLinks.classList.remove('show');
    }
    else{
        menuLinks.classList.add('show'); 
        menuLinks.classList.remove('hidder');
        }

});

/*

function typeWrite (elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 80 * i);
    });
}

const titulo = document.getElementById('anima1');
typeWrite(titulo);
*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
});



var texto1 = document.querySelector('.mudarTextoDescricao')

    document.querySelector('.html').addEventListener('mouseover', function (){
        texto1.innerHTML = 'HTML "Linguagem de Marcação de Hipertexto" é uma linguagem de marcação utilizada na construção de páginas na Web.'
    })

    document.querySelector('.css').addEventListener('mouseover', function (){
        texto1.innerHTML = 'CSS "folha de estilo" composta por “camadas” e utilizada para definir a aparência em páginas da internet.'
    })

    document.querySelector('.js').addEventListener('mouseover', function (){
        texto1.innerHTML = 'JavaScript é uma linguagem de programação interpretada estruturada.'
    })


    var sairCaixa = document.getElementsByClassName('sairCaixa')

    for (i = 0; i < sairCaixa.length; i++) {
      sairCaixa[i].addEventListener('mouseout', function mudarTextoNormal(){
        texto1.innerHTML = `<br>Web Site de um jeito diferente.`
      })
    };

    sr.reveal('.sociais',{delay: 200});
    sr.reveal('.sociais2',{delay: 200});
    sr.reveal('.icon',{delay: 200});
