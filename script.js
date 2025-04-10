document.addEventListener("DOMContentLoaded", () => {
  // Плавная прокрутка для навигационных ссылок
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Анимация появления элементов при прокрутке
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document
    .querySelectorAll(".hero-content")
    .forEach((el) => observer.observe(el));

  // Обработка кнопки CTA
  const ctaButton = document.querySelector(".cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("click", () => {
      // Здесь можно добавить логику обработки нажатия кнопки
      console.log("Кнопка CTA нажата");
    });
  }

  // Анимация счетчиков для секции "Мы в цифрах"
  const statisticsSection = document.querySelector(".statistics-section");
  const statisticNumbers = document.querySelectorAll(".statistic-number");

  function animateCounter(element, target, duration) {
    const start = 0;
    const increment = target / (duration / 16); // 16ms — примерно время одного кадра (60 fps)
    let current = start;

    function updateCounter() {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    }

    requestAnimationFrame(updateCounter);
  }

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Запускаем анимацию для всех счетчиков
        statisticNumbers.forEach((number) => {
          const target = parseInt(
            number.getAttribute("data-target") || number.textContent,
            10
          );
          animateCounter(number, target, 2000);
        });

        // Отключаем наблюдение после первой анимации
        observer.unobserve(entry.target);
      }
    });
  }

  // Используем IntersectionObserver для запуска анимации при появлении секции в видимой области
  if (statisticsSection && "IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.3, // Запускаем анимацию, когда 30% секции видно
    });

    counterObserver.observe(statisticsSection);
  } else {
    // Для браузеров без поддержки IntersectionObserver или если секция не найдена
    statisticNumbers.forEach((number) => {
      const target = parseInt(
        number.getAttribute("data-target") || number.textContent,
        10
      );
      animateCounter(number, target, 2000);
    });
  }

  // Бургер-меню
  const burgerMenu = document.querySelector(".burger-menu");
  const header = document.querySelector(".header");
  const navLinks = document.querySelectorAll(".nav-links a");

  // Открытие/закрытие меню при клике на бургер
  burgerMenu.addEventListener("click", function () {
    this.classList.toggle("active");
    header.classList.toggle("active");

    // Блокировка скролла при открытом меню
    if (header.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Закрытие меню при клике на ссылку
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      burgerMenu.classList.remove("active");
      header.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Закрытие меню при изменении размера окна
  window.addEventListener("resize", function () {
    if (window.innerWidth > 991 && header.classList.contains("active")) {
      burgerMenu.classList.remove("active");
      header.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Анимация при скролле
  const animatedElements = document.querySelectorAll(
    ".team-img, .service-image"
  );

  // Функция для проверки видимости элемента
  const isElementInViewport = function (el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  };

  // Функция для добавления класса visible
  const handleScroll = function () {
    animatedElements.forEach((el) => {
      if (isElementInViewport(el)) {
        el.classList.add("visible");
      }
    });
  };

  // Запускаем функцию при скролле
  window.addEventListener("scroll", handleScroll);

  // Запускаем функцию при загрузке страницы
  handleScroll();

  // Дополнительно запускаем через небольшую задержку для уверенности
  setTimeout(handleScroll, 500);
});
