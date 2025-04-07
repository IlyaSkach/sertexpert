document.addEventListener("DOMContentLoaded", () => {
  // Переключение цветовых схем
  const themeButtons = document.querySelectorAll(".theme-btn");
  const html = document.documentElement;

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Удаляем активный класс у всех кнопок
      themeButtons.forEach((btn) => btn.classList.remove("active"));
      // Добавляем активный класс нажатой кнопке
      button.classList.add("active");
      // Устанавливаем тему
      const theme = button.getAttribute("data-theme");
      html.setAttribute("data-theme", theme);
    });
  });

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
});
