const buyTicket = document.getElementById('buy-tickets');

buyTicket.addEventListener('click', function (event) {  

    const mainSection = document.getElementById('main-section');
    mainSection.classList.remove('hidden');

    window.scrollTo({
        top:1100,
        behavior: "smooth" 
    });


});

let isClicked = false;
function handleSeatClick(seatId, seatClass, seatPrice) {
    const seatElement = document.getElementById(seatId);

    if (!isClicked) {
        seatElement.style.backgroundColor = '#1DD100';
        const sitLeftElement = document.getElementById('sit-left');
        const sitCountElement = document.getElementById('seat-count');
        const sitLeftValue = parseInt(sitLeftElement.innerText);
        sitLeftElement.innerText = sitLeftValue - 1;
        const sitCountValue = parseInt(sitCountElement.innerText);
        sitCountElement.innerText = sitCountValue + 1;

        const priceDiv = document.getElementById('price-div');
        priceDiv.innerHTML = `
            <p>${seatId}</p>
            <p>${seatClass}</p>
            <p>${seatPrice}</p>
        `;

        const totalPrice = document.getElementById('tot-price');
        totalPrice.innerText = parseInt(seatPrice).toString();

        isClicked = true;
    } else {
        // Handle the case when the seat is already clicked
    }
}

// Usage example
const a1 = document.getElementById('A1');
a1.addEventListener('click', function() {
    handleSeatClick('A1', 'Economy', 550);
});

// Repeat the pattern for other seat elements (a3, a4, b1, b2, etc.)
