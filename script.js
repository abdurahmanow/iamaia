// Функция для проверки даты
function checkPassword() {
    var inputDate = document.getElementById("birthdate").value; // Получаем значение из поля ввода

    // Проверяем, если поле ввода не пустое
    if (inputDate) {
        var correctDate = "2024-02-15"; // Укажем правильную дату для доступа

        // Если введенная дата совпадает с правильной датой
        if (moment(inputDate).format("YYYY-MM-DD") === correctDate) {
            window.location.href = "protected_page.html"; // Перенаправляем на защищенную страницу
        } else {
            document.getElementById("message").innerHTML = "Неверная дата рождения!";
        }
    } else {
        document.getElementById("message").innerHTML = "Пожалуйста, введите дату рождения!";
    }
}

// Инициализируем flatpickr для поля ввода
var datepicker = flatpickr("#birthdate", {
    dateFormat: "Y-m-d", // Формат даты
    disableMobile: true // Отключаем мобильную версию
});

// Добавляем обработчик события для кнопки открытия календаря
document.querySelector('.flatpickr-button').addEventListener('click', function() {
    datepicker.open();
});

// Функция для воспроизведения аудиофайла
function playAudio(track) {
    var audio = new Audio(track);
    audio.play();
}

// Функция для переворачивания карточки и воспроизведения аудиофайла
function flipCard(card) {
    // Код для переворачивания карточки
    card.classList.toggle('flipped');

    // Проверяем, показывается ли задняя сторона карточки
    if (card.classList.contains('flipped')) {
        var track = card.querySelector('.card-back').getAttribute('data-track');
        playAudio(track); // Воспроизводим аудиофайл, соответствующий текущей карточке
    }
}

// Получаем ссылки на пункты меню
var greetingLink = document.getElementById('greeting-link');
var futureLink = document.getElementById('future-link');

// Получаем текущий путь страницы, начиная с корня сайта
var currentPath = window.location.pathname.split("/").pop();

// Проверяем текущий путь и добавляем класс "active" соответствующему пункту меню
if (currentPath === '/protected_page.html') {
    greetingLink.classList.add('active');
} else if (currentPath === '/future_wife_page.html') {
    futureLink.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const blocks = document.querySelectorAll('.block');

    blocks.forEach(block => {
        const cardsContainer = block.querySelector('.grid-container');

        // Добавляем обработчик события для переворачивания карточки и воспроизведения аудиофайла
        cardsContainer.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function() {
                flipCard(card);
            });
        });
    });
});
