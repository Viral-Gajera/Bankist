let links = document.querySelectorAll('.links ul li');

function initialSetting(){

    // highlighting "open account"
    links[ links.length - 1 ].classList.add('active');
}

initialSetting();

for( let i=0; i<links.length; i++ ){
    links[i].addEventListener('click', function(){
        for(let j=0; j<links.length; j++){
            links[j].classList.remove('active')
        }
        this.classList.add('active')
    })
}