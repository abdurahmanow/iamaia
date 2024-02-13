// Функция для проверки даты
function checkPassword() {
    var inputDate = document.getElementById("birthdate").value; // Получаем значение из поля ввода

    // Проверяем, если поле ввода не пустое
    if (inputDate) {
        var correctDate = "2005-05-22"; // Укажем правильную дату для доступа

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
