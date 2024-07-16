let images = document.querySelectorAll('.image-sub');
images.forEach((image) => {
    image.addEventListener('click', () => {
        let mainImage = document.getElementById('main-image');
        mainImage.src = image.src;
    });
});

document.querySelector('.buy').addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.application').style.display = 'block';
    document.querySelector('.all-info').style.filter = 'blur(5px)';
    document.querySelector('.header').style.filter = 'blur(5px)';
    document.querySelector('.all-info').style.pointerEvents = 'none';
    document.querySelector('.header').style.pointerEvents = 'none';
    document.querySelector('.application').style.pointerEvents = 'auto';
});

document.querySelector('.application-closer').addEventListener('click', closeApplication);

const unitPrice = selectedCar.price;

function increment() {
    const input = document.getElementById('rent-count-input');
    input.value = parseInt(input.value) + 1;
    updateTotalPrice();
}

function decrement() {
    const input = document.getElementById('rent-count-input');
    if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
        updateTotalPrice();
    }
}

function updateTotalPrice() {
    const input = document.getElementById('rent-count-input');
    const totalPriceElement = document.getElementById('rent-total-price');
    const totalPrice = unitPrice * parseInt(input.value);
    totalPriceElement.innerText = `Загально: ${totalPrice.toLocaleString()} грн`;
}