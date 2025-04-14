// Скрипт для отметки активного пункта меню
document.addEventListener("DOMContentLoaded", function () {
  // Используем Intersection Observer для наблюдения за секциями
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  // Определяем текущий путь
  const currentPath = window.location.pathname;

  // Если мы не на главной странице, активируем соответствующую ссылку
  if (
    !currentPath.includes("index.html") &&
    !currentPath.endsWith("/") &&
    !currentPath.endsWith("/sertexpert/")
  ) {
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (currentPath.includes("services.html") && href === "services.html") {
        link.classList.add("active");
      } else if (
        currentPath.includes("vacancies.html") &&
        href === "vacancies.html"
      ) {
        link.classList.add("active");
      }
    });
  } else {
    // Мы на главной странице

    // Если есть хэш в URL, активируем соответствующую ссылку
    const hash = window.location.hash;
    if (hash) {
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === hash) {
          link.classList.add("active");
        }
      });

      // Скроллим к элементу с якорем, если он есть
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    } else {
      // Активируем ссылку "Главная" если нет хэша
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === "index.html") {
          link.classList.add("active");
        }
      });
    }

    // Создаем Intersection Observer для наблюдения за секциями
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -300px 0px", // Отступы для корректировки точки пересечения
      threshold: 0.2, // Процент видимости элемента
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Если секция видима
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");

          // Убираем класс active со всех ссылок
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });

          // Добавляем класс active к соответствующей ссылке
          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${id}`) {
              link.classList.add("active");

              // Обновляем URL без перезагрузки страницы
              history.replaceState(null, null, `#${id}`);
            }
          });
        }
      });
    }, observerOptions);

    // Начинаем наблюдение за всеми секциями с id
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Обрабатываем клики по якорным ссылкам для плавного скролла
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        if (href.startsWith("#")) {
          e.preventDefault();

          const targetSection = document.querySelector(href);
          if (targetSection) {
            // Убираем класс active со всех ссылок
            navLinks.forEach((link) => {
              link.classList.remove("active");
            });

            // Добавляем класс active на текущую ссылку
            this.classList.add("active");

            // Плавный скролл к секции
            targetSection.scrollIntoView({ behavior: "smooth" });

            // Обновляем URL без перезагрузки страницы
            history.pushState(null, null, href);
          }
        }
      });
    });
  }
});
