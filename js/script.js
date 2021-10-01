
let regPhobe = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
let regName = /[A-Za-zА-Яа-яЁё]/;
let regMail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

let form = document.querySelector('.form');
let submitText = document.querySelector('.form__submit');
let button = document.querySelector('.form__button');

let inputs = document.querySelectorAll('.form__item');
let errorText = document.querySelectorAll('.error');


button.addEventListener('click', (e) => {
    e.preventDefault();

    form.classList.add('hidden__form');
    console.log(submitText);
    submitText.classList.add('active');
    
});
