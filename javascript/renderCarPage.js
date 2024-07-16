let selectedCar;
let applicationCloser;
let pageHTML;
let applicationHTML;
const selectedCarName = JSON.parse(localStorage.getItem('car'));

cars.forEach((car) => {
    if (car.name === selectedCarName) {
        selectedCar = car;
    }
});

pageHTML = `
    <div class="images">
        <img class="image-main" id="main-image" src="${selectedCar.firstImage}">
        <div class="image-subs">
            <img class="image-sub" src="${selectedCar.firstImage}">
            <img class="image-sub" src="${selectedCar.secondImage}">
            <img class="image-sub" src="${selectedCar.thirdImage}">
            <img class="image-sub" src="${selectedCar.forthImage}">
            <img class="image-sub" src="${selectedCar.fifthImage}">
        </div>
    </div>
    <div class="info">
        <div class="car-name">${selectedCar.name}</div>
        <div class="price">₴${selectedCar.price}</div>
        <p class="description-title">Опис</p>
        <div class="description">
            <span>Тип автомобіля</span> <span>-</span> <span>${selectedCar.description.type}</span>
            <span>Коробка передач</span> <span>-</span> <span>${selectedCar.description.transmission}</span>
            <span>Привід </span><span>-</span> <span>${selectedCar.description.drive}</span>
            <span>Об'єм двигуна</span> <span>-</span> <span>${selectedCar.description.engineVolume}</span>
            <span>Кількість місць</span> <span>-</span> <span>${selectedCar.description.numberOfSits}</span>
            <span>Тип палива </span><span>-</span> <span>${selectedCar.description.fuelType}</span>
            <span>Контроль температури</span> <span>-</span> <span>${selectedCar.description.temperatureControl}</span>
            <span>Витрати палива</span> <span>-</span> <span>${selectedCar.description.fuelConsumption}</span>
        </div>
        <button class="buy">Орендувати</button>
    </div>
`;

applicationHTML = `
    <div class="application-header">
        <div class="application-name">Оренда авто</div>
        <button class="application-closer">X</button>
    </div>
    <div class="rent-info">
        <img class="rent-image" src="${selectedCar.mainImage}">
        <div class="rent-car-name">${selectedCar.name}</div>
        <div class="rent-price"><p>Ціна за день: ${selectedCar.price} грн</p></div>
        <div class="rent-count-text">Дні оренди:</div>
        <div class="rent-count">
            <button class="rent-button-revers" onclick="decrement()">-</button>
            <input class="rent-count-button" type="number" id="rent-count-input" value="1" readonly>
            <button class="rent-button-revers" onclick="increment()">+</button>
        </div>
    </div>
    <p></p>
    <div class="rent-total-price" id="rent-total-price">Загально: ${selectedCar.price} грн</div>
    <div class="client-info">
        <div class="client-name"><p><span class="red-star">*</span>ПІБ: <input class="client-name-input has-to-be-filled" type="text" placeholder=" Введіть ваше ім'я"></p></div>
        <div class="client-phone"><p><span class="red-star">*</span>Номер телефону: <input class="client-phone-input has-to-be-filled" type="text" placeholder=" Введіть ваш номер телефону"></p></div>
        <div class="client-data"><p><span class="red-star">*</span>Дата оренди: <input class="client-data-input has-to-be-filled" type="date"></p></div>
        <div class="client-place"><p><span class="red-star">*</span>Адреса: <input class="client-place-input has-to-be-filled" type="text" placeholder=" Куди вам доставити автомобіль?"></p></div>
        <div class="client-checkout"><p><span class="red-star">*</span>Тип оплати: <select class="client-checkout-input">
            <option>Термінал</option>
            <option>Готівка</option>
        </select></p></div>
        <div class="client-comment"><p>Коментарі: <input class="client-comment-input" placeholder=" Введіть додаткову інформацію"></input></p></div>
    </div>
    <div class="order-container">
        <button class="client-button-rent">Орендувати</button>
        <p class="error"></p>
    </div>
`;

applicationCloser = `
    <div class="client-closer-page">
        <div class="client-closer" >
            <button class="client-closer-button" id="closeButton">X</button>
            <div class="client-closer-text">Дякуємо за ваше оформлення!</div>
            <div class="client-closer-text">Ми скоро з вами зв'яжемося</div>
        </div>
    </div> 
`;

function closeApplication() {
    document.querySelector('.application').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.all-info').style.filter = 'none';
    document.querySelector('.header').style.filter = 'none';
    document.querySelector('.all-info').style.pointerEvents = 'auto';
    document.querySelector('.header').style.pointerEvents = 'auto';
}

function sendApplication() {
    document.querySelector('.application').innerHTML = applicationCloser;
    document.getElementById('closeButton').addEventListener('click', function() {
        closeApplication();
        renderApplication();

        document.querySelector('.application-closer').addEventListener('click', closeApplication)
    });
}

function renderApplication() {
    document.querySelector('.application').innerHTML = applicationHTML;
    document.querySelector('.client-button-rent').addEventListener('click', () => {   
        const hasToBeFilled = document.querySelectorAll('.has-to-be-filled');
        let filled = 0;

        hasToBeFilled.forEach((input) => {
            if (input.value === '') {
                document.querySelector('.error').innerHTML = "Ви маєте заповнити всі поля з зірочками";
            } else {
                filled++;
            }
        });
        if (filled === 4) {
            sendApplication();
            document.querySelector('.error').innerHTML = "";
        }
    });
}

document.querySelector('.all-info').innerHTML = pageHTML;
renderApplication();