// Скрипт для обработки откликов на вакансии
document.addEventListener("DOMContentLoaded", function () {
  const detailsButtons = document.querySelectorAll(".details-btn");
  const jobDetailsContainer = document.getElementById("job-details");
  const jobDetailsTitle = document.getElementById("job-details-title");
  const jobDetailsLocation = document.getElementById("job-details-location");
  const jobDetailsExperience = document.getElementById(
    "job-details-experience"
  );
  const jobDetailsSalary = document.getElementById("job-details-salary");
  const benefitsList = document.getElementById("benefits-list");
  const requirementsList = document.getElementById("requirements-list");
  const responsibilitiesList = document.getElementById("responsibilities-list");
  const applyFromDetailsBtn = document.getElementById("apply-from-details");
  const closeDetailsBtn = document.querySelector(".close-details-btn");

  const applicationForm = document.getElementById("application-form");
  const cancelButton = document.querySelector(".cancel-btn");
  const positionInput = document.getElementById("position");
  const resumeInput = document.getElementById("resume");
  const fileNameDisplay = document.getElementById("file-name");

  // Обработка выбора файла резюме
  if (resumeInput) {
    resumeInput.addEventListener("change", function () {
      if (this.files && this.files[0]) {
        fileNameDisplay.textContent = this.files[0].name;
      } else {
        fileNameDisplay.textContent = "Файл не выбран";
      }
    });
  }

  // Функция для заполнения и отображения деталей вакансии
  function showJobDetails(position) {
    const jobData = jobsData[position];

    jobDetailsTitle.textContent = jobData.title;
    jobDetailsLocation.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${jobData.location}`;
    jobDetailsExperience.innerHTML = `<i class="fas fa-briefcase"></i> Опыт работы: ${jobData.experience}`;
    jobDetailsSalary.innerHTML = `<i class="fas fa-ruble-sign"></i> ${jobData.salary}`;

    // Заполняем преимущества
    benefitsList.innerHTML = "";
    jobData.benefits.forEach((benefit) => {
      const li = document.createElement("li");
      li.textContent = benefit;
      benefitsList.appendChild(li);
    });

    // Заполняем обязанности
    responsibilitiesList.innerHTML = "";
    jobData.responsibilities.forEach((resp) => {
      const li = document.createElement("li");
      li.textContent = resp;
      responsibilitiesList.appendChild(li);
    });

    // Заполняем требования
    requirementsList.innerHTML = "";
    jobData.requirements.forEach((req) => {
      const li = document.createElement("li");
      li.textContent = req;
      requirementsList.appendChild(li);
    });

    // Устанавливаем данные для кнопки отклика
    applyFromDetailsBtn.setAttribute("data-position", position);

    // Показываем модальное окно с деталями
    jobDetailsContainer.classList.add("visible");
  }

  // Показать детали при нажатии на кнопку "Подробнее"
  detailsButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const position = this.getAttribute("data-position");
      showJobDetails(position);
    });
  });

  // Закрыть детали при нажатии на кнопку "Закрыть"
  closeDetailsBtn.addEventListener("click", function () {
    jobDetailsContainer.classList.remove("visible");
  });

  // Показать форму отклика при нажатии на кнопку "Откликнуться" из деталей
  applyFromDetailsBtn.addEventListener("click", function () {
    const position = this.getAttribute("data-position");
    positionInput.value = position;
    applicationForm.classList.add("visible");
    jobDetailsContainer.classList.remove("visible");
    applicationForm.scrollIntoView({ behavior: "smooth" });

    // Сбрасываем информацию о выбранном файле
    if (fileNameDisplay) {
      fileNameDisplay.textContent = "Файл не выбран";
    }
  });

  // Скрыть форму при нажатии на кнопку "Отмена"
  cancelButton.addEventListener("click", function () {
    applicationForm.classList.remove("visible");
  });

  // Обработка отправки формы
  document
    .getElementById("job-application")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Проверяем, что пользователь согласился с политикой обработки персональных данных
      const privacyCheckbox = document.getElementById("privacy-agreement");
      if (!privacyCheckbox.checked) {
        alert("Необходимо дать согласие на обработку персональных данных");
        return;
      }

      // Здесь можно добавить код для отправки данных на сервер
      alert(
        "Ваш отклик успешно отправлен! Мы свяжемся с вами в ближайшее время."
      );
      this.reset();
      // Сбрасываем информацию о выбранном файле
      if (fileNameDisplay) {
        fileNameDisplay.textContent = "Файл не выбран";
      }
      applicationForm.classList.remove("visible");
    });
});
