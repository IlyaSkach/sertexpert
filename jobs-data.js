// Данные о вакансиях
const jobsData = {
  "Эксперт по сертификации": {
    id: "expert-cert",
    title: "Эксперт по сертификации",
    location: "Москва",
    experience: "от 1 года",
    salary: "от 80 000 ₽",
    benefits: [
      "Официальное трудоустройство по ТК РФ",
      "Сокращенный рабочий день: 5/2 с 10.00 до 18.00 (обед имеется)",
      "Комфортный офис в пешей доступности от м. Войковская",
      "Работа в дружном молодом коллективе",
      "Возможность профессионального и материального развития",
      "Уровень заработной платы обсуждается на собеседовании с успешным кандидатом",
    ],
    responsibilities: [
      "Проведение экспертизы документации на соответствие техническим регламентам",
      "Консультирование клиентов по вопросам сертификации продукции",
      "Подготовка заключений и сертификационных документов",
      "Взаимодействие с испытательными лабораториями",
      "Участие в оформлении сертификатов и деклараций соответствия",
      "Проведение анализа состояния производства",
    ],
    requirements: [
      "Высшее образование (техническое, сертификация, управление качеством)",
      "Опыт работы от 1 года в области сертификации",
      "Знание технических регламентов ТР ТС/ЕАЭС",
      "Внимательность к деталям и ответственность",
      "Уверенное владение MS Office",
      "Стрессоустойчивость и высокая работоспособность",
    ],
  },
  "Менеджер по работе с клиентами и развитию партнерской сети в сфере сертификации":
    {
      id: "manager-clients",
      title:
        "Менеджер по работе с клиентами и развитию партнерской сети в сфере сертификации",
      location: "Москва",
      experience: "от 1 года",
      salary: "от 70 000 ₽",
      benefits: [
        "Официальное трудоустройство по ТК РФ",
        "График работы 5/2 с 10.00 до 18.00",
        "Комфортный офис рядом с м. Петровско-Разумовская",
        "Дружный коллектив профессионалов",
        "Корпоративное обучение и тренинги",
        "Возможность карьерного роста",
        "Премии по результатам работы",
      ],
      responsibilities: [
        "Консультирование клиентов по вопросам сертификации и оформления разрешительной документации",
        "Развитие партнерской сети и поиск новых клиентов",
        "Подготовка коммерческих предложений",
        "Сопровождение сделок от первого звонка до выдачи сертификатов",
        "Работа с CRM-системой",
        "Выполнение плановых показателей",
        "Участие в мероприятиях по продвижению компании",
      ],
      requirements: [
        "Опыт в продажах B2B от 1 года",
        "Отличные навыки ведения переговоров",
        "Грамотная устная и письменная речь",
        "Умение работать с возражениями",
        "Знание основ сертификации (преимущество)",
        "Высокая клиентоориентированность",
        "Активная жизненная позиция",
      ],
    },
  "Специалист испытательной лаборатории": {
    id: "lab-specialist",
    title: "Специалист испытательной лаборатории",
    location: "Санкт-Петербург",
    experience: "от 2 лет",
    salary: "от 90 000 ₽",
    benefits: [
      "Официальное трудоустройство по ТК РФ",
      "График работы 5/2 с 9.00 до 18.00",
      "Современная лаборатория с новейшим оборудованием",
      "Профессиональное развитие и обучение",
      "Корпоративные мероприятия",
      "ДМС после испытательного срока",
      "Компенсация проезда и мобильной связи",
    ],
    responsibilities: [
      "Проведение испытаний продукции согласно методикам",
      "Подготовка протоколов испытаний",
      "Калибровка и обслуживание лабораторного оборудования",
      "Контроль качества проводимых испытаний",
      "Разработка и актуализация методик испытаний",
      "Ведение лабораторных журналов",
      "Участие в процедурах аудита и аккредитации лаборатории",
    ],
    requirements: [
      "Высшее техническое образование",
      "Опыт работы в испытательной лаборатории от 2 лет",
      "Знание методик испытаний",
      "Опыт работы с лабораторным оборудованием",
      "Знание ГОСТ ISO/IEC 17025-2019",
      "Аккуратность и внимательность к деталям",
      "Знание нормативной документации в области испытаний",
    ],
  },
  "Ведущий инженер по техническому регулированию и стандартизации продукции": {
    id: "lead-engineer",
    title:
      "Ведущий инженер по техническому регулированию и стандартизации продукции",
    location: "Москва",
    experience: "от 3 лет",
    salary: "от 120 000 ₽",
    benefits: [
      "Официальное трудоустройство по ТК РФ",
      "Сокращенный рабочий день: 5/2 с 10.00 до 18.00 (обед имеется)",
      "Комфортный офис в пешей доступности от МЦК Коптево (7 минут), либо м. Петровско-Разумовская, Войковская",
      "Работа в дружном молодом коллективе",
      "Возможность профессионального и материального развития",
      "Уровень заработной платы обсуждается на собеседовании с успешным кандидатом",
      "Оставляйте свой отклик, и мы предложим проекты, от которых не захочется отказаться!",
    ],
    responsibilities: [
      "Актуализация документов СМК",
      "Разработка новых процедур/документов СМК для испытательного центра, органов по сертификации в соответствии с ГОСТ ISO/IEC 17025-2019, ГОСТ ISO/IEC 17065-2012",
      "Проведение аудитов в испытательном центре, органах по сертификации в соответствии с СМК, выявление отклонений от системы менеджмента (от процедур), разработка корректирующих мероприятий",
      "Прохождение проверок (ПК, расширение)",
      "Взаимодействие с экспертами по аккредитации, ФСА",
      "Подача документов для проведения проверок",
    ],
    requirements: [
      "Высшее образование сертификация, управление качеством, техническое образование",
      "Опыт работы в аналогичной должности от 3 лет",
      "Опыт работы в прохождении проверок, в разработке документов СМК",
      "Владение MS Word, Excel",
      "Знание нормативных документов. Знание ГОСТ ISO 17025 и критериев аккредитации (Приказ МЭР № 707 от 26.10.2020 г.)",
    ],
  },
};

// Экспортируем данные
