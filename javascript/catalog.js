const classCategory = document.querySelectorAll('.class-category');

window.onload = () => {
    document.querySelector('.economical-class').click();
}

let carHTML = '';

classCategory.forEach((category) => {
    category.addEventListener('click', () => {
        classCategory.forEach((category) => {
            category.classList.remove('category-button-pressed');
        });
        category.classList.add('category-button-pressed');

        carHTML = '';
        cars.forEach((car) => {
            if (category.value === car.class) {
                carHTML += `
                    <div class="car-container">
                        <img class="car-photo" src="${car.mainImage}">

                        <div class="car-name">
                            <p><a>${car.name}</a></p>
                        </div>

                        <div class="car-description">               
                                <span class="description-type">Коробка передач</span> <span>-</span> <span>${car.description.transmission}</span>

                                <span class="description-type">Привід</span> <span>-</span> <span>${car.description.drive}</span>

                                <span class="description-type">Тип палива</span> <span>-</span> <span>${car.description.fuelType}</span>

                                <span class="description-type">Витрати палива</span> <span>-</span>  <span>${car.description.fuelConsumption}</span>
                        </div>

                        <div class="rent-price">
                            <p>₴${car.price}</p>
                        </div>

                        <a class="anchor-rent-button" href="car-page.html"><button value="${car.name}" class="rent-button">Орендувати</button></a>
                    </div>
                `;
            }
        });

        document.querySelector('.cars-grid').innerHTML = carHTML;

        const rentButtons = document.querySelectorAll('.rent-button');
        rentButtons.forEach((button) => {
            button.addEventListener('click', () => {
                localStorage.setItem('car', JSON.stringify(button.value))
            });
        });      
    });
});
