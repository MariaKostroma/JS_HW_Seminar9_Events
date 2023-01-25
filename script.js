// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”


// const formEl = document.querySelector('.form');
// const inputEl = document.querySelector('.check');
// inputEl.addEventListener('click', function (e) {
//     const target = e.target;
//     console.log(target.checked);
// });
// formEl.addEventListener('submit', function (e) {
//     if (inputEl.checked) {
//         alert("Вы согласились с условиями");
//     } else {
//         alert("Необходимо согласие с условиями");
//         e.preventDefault();
//     }
// })

// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

// const radioBut = document.querySelector('.radioBut');
// radioBut.addEventListener('submit', function (e) {
//     if (radioBut.elements['tea-coffe'].value === 'tea') {
//         alert('Чай закончился');
//         e.preventDefault();
//     } else {
//         alert('Кофе закончился');
//         e.preventDefault();
//     }
// });

// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

// const formPas = document.querySelector('.password');
// const inputPas = document.querySelector('.pass');
// const divEl = document.querySelector('.text');
// const error = document.createElement('p');
// error.textContent = 'Пароль не верный';

// formPas.addEventListener('submit', function (e) {

//     if (inputPas.value !== "123") {
//         inputPas.style.border = '3px solid red';
//         divEl.appendChild(error);
//         e.preventDefault();
//     } else {
//         inputPas.style.background = 'green';
//         inputPas.style.border = '1px solid #000';
//         e.preventDefault();
//         error.remove();
//     }
// })

// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в
// поле ввода

// const changeEl = document.querySelector('.change');
// const changeTitle = changeEl.nextElementSibling;
// changeEl.addEventListener('input', () => {
//     changeTitle.textContent = changeEl.value;
// });

// Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не
// стирать, код с решением задачи пишем под комментарием.

/*
1. При изменении значения в input с id="from", значение содержащееся в нем
должно моментально отображаться в span. То есть при печати в input'е тег span
также должен меняться.
*/

const from = document.getElementById('from');
const span = from.nextElementSibling;
from.addEventListener('input', () => {
    span.textContent = from.value;
});

/*
2. При клике на кнопку с классом messageBtn необходимо элементу с классом
message:
1) добавить два класса: animate_animated и animate_fadeInLeftBig
2) поставить данному элементу стиль visibility в значение 'visible'.
*/

const messageBtn = document.querySelector('.messageBtn');
const message = document.querySelector('.message');
messageBtn.addEventListener('click', () => {
    message.classList.add('animate_animated', 'animate_fadeInLeftBig');
    message.style.visibility = 'visible';
});

/*
3. Необходимо при отправке формы проверить, заполнены ли все поля в этой
форме. Если какое-либо поле не заполнено, форма не должна отправляться, также
должны быть подсвечены незаполненные поля (необходимо поставить класс error
незаполненным полям).
Как только пользователь начинает заполнять какое-либо поле, необходимо,
при вводе в данное поле, произвести проверку:
Если поле пустое, необходимо данное поле подсветить (поставить класс error
данному полю).
Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
*/

const form = document.querySelector('form');
const formArray = document.querySelectorAll("input, select");
form.addEventListener("submit", (e) => {
    formArray.forEach((element) => {
        if (element.value === "") {
            element.style.border = '3px solid red';
            e.preventDefault();
        } else element.style.border = '1px solid black';
    });
});

formArray.forEach((element) => {
    element.addEventListener("input", (e) => {
        if (e.target.value === "") {
            e.target.style.border = '3px solid red';
        } else e.target.style.border = '1px solid black';
    });
});
