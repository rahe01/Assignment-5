const buyTicket = document.getElementById('buy-tickets');

buyTicket.addEventListener('click', function (event) {  

    const mainSection = document.getElementById('main-section');
    mainSection.classList.remove('hidden');

    window.scrollTo({
        top:1100,
        behavior: "smooth" 
    });


});

const a1 = document.getElementById('A1');
const a2 = document.getElementById('A2');
const a3 = document.getElementById('A3');
const a4 = document.getElementById('A4');
const b1 = document.getElementById('B1');
const b2 = document.getElementById('B2');
const b3 = document.getElementById('B3');
const b4 = document.getElementById('B4');


let isClicked = false;

a1.addEventListener('click', function handleClick() {
    if (!isClicked) {
        a1.style.backgroundColor = '#1DD100';
        const sitLeftElement = document.getElementById('sit-left');
        const sitLeftValue = parseInt(sitLeftElement.innerText);
        sitLeftElement.innerText = sitLeftValue - 1;
        isClicked = true; 
         a1.removeEventListener('click', handleClick);


    } 


    else {
    
    }
});


