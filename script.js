let links = document.querySelectorAll('.links ul li');

function initialSetting(){

    // highlighting "open account"
    links[ links.length - 1 ].classList.add('active');
}
initialSetting();


// navigation-bar 'activation' and 'deactivation'
for(let link of links ){
    link.addEventListener('click', function(){
        for(let l of links ){
            l.classList.remove('active');
        }
        this.classList.add('active');
    })
}


// Showing Cookie message
let cookieMessage = document.createElement('div');

cookieMessage.classList.add('cookieMessage');
cookieMessage.innerHTML = `Accept cookie to improve performence <button class="cookie-button">Got it</button>`;

document.body.appendChild(cookieMessage);

document.querySelector('.cookie-button').addEventListener('click', function(){
    cookieMessage.remove();
})

