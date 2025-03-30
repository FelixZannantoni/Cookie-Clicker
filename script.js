let cookieCount = 0;

const cookieButton = document.getElementById('cookie');
const cookieCountDisplay = document.getElementById('cookie-count');

function incrementCookies() {
    cookieCount++;
    cookieCountDisplay.textContent = cookieCount;
}

cookieButton.addEventListener('click', incrementCookies);