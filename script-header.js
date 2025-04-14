// Скрипт для уменьшения хедера при скроллинге
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  let lastScrollY = 0;

  // Функция для проверки мобильного устройства
  function isMobileDevice() {
    return window.innerWidth <= 991;
  }

  // Функция для обработки события скроллинга
  function handleScroll() {
    // Если это мобильное устройство, не меняем хедер
    if (isMobileDevice()) {
      header.classList.remove("scrolled");
      return;
    }

    const scrollY = window.scrollY;

    // Если скролл больше 100px, добавляем класс scrolled
    if (scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    lastScrollY = scrollY;
  }

  // Добавляем обработчик события прокрутки
  window.addEventListener("scroll", handleScroll);

  // Добавляем обработчик изменения размера окна
  window.addEventListener("resize", handleScroll);

  // Вызываем обработчик при загрузке страницы
  handleScroll();
});
