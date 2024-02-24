function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    // Проверяем пароль
    if (isValidPassword(password)) {
        // Если пароль верный, перенаправляем на future_wife_page.html
        window.location.href = "heart_page.html";
    } else {
        // Если пароль неверный, выводим сообщение об ошибке
        document.getElementById("message").innerHTML = "Incorrect password. Please try again.";
    }
}

function isValidPassword(password) {
    // Регулярное выражение для проверки пароля в форматах YYYY.MM.DD, DD.MM.YYYY и YYYY,MM,DD
    var passwordPattern = /^(?:(?:\d{4}[.,\/]\d{2}[.,\/]\d{2})|(?:\d{2}[.,\/]\d{2}[.,\/]\d{4}))$/;
    return password === "22.05.2005";
}

// Добавляем обработчик события submit для формы
document.querySelector('.form').addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
    checkPassword(); // Вызываем функцию проверки пароля
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
} else if (currentPath === 'heart_page.html') {
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
