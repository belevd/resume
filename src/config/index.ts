export const STACK = [
  {
    title: 'React',
  }, {
    title: 'NextJS',
  }, {
    title: 'Redux',
  }, {
    title: 'MobX',
  }, {
    title: 'TypeScript'
  }, {
    title: 'CSS'
  }, {
    title: 'Tailwind CSS'
  }, {
    title: 'NodeJS',
  }, {
    title: 'NestJS'
  }, {
    title: 'PostgreSQL'
  }, {
    title: 'Docker'
  }, {
    title: 'Gitlab CI'
  }
];

export const PROJECTS = [
  {
    name: 'AntiAge Expert',
    stack: [
      {
        title: 'React 15',
      }, {
        title: 'Redux'
      }, {
        title: 'React-router-dom',
      }, {
        title: 'React-hook-form',
      }, {
        title: 'Classnames',
      }, {
        title: 'CSS Modules'
      }, {
        title: 'Webpack'
      }
    ],
    description_en: 'An educational website for doctors, which includes training videos, a payment system, an integrated online store on Bitrix and an affiliate system (invite a friend – get a bonus).',
    description_ru: 'Образовательный сайт для врачей, который включает в себя обучающие видео, систему платежей, интегрированный интернет-магазин на Bitrix и партнерскую-систему (пригласи друга – получи бонус).',
    tasks_en: 'Support, revision, development of new functions, refactoring of old code, updating the build to the latest versions of libraries (there was a very old legacy).',
    tasks_ru: 'Поддержка, доработка, разработка новых функций, рефакторинг старого кода, обновление сборки до актуальных версий библиотек (было очень старое легаси).',
    duration: {
      from: '2020-10-01',
      to: '2021-05-01',
    },
  }, {
    name: 'AntiAge Expert Clinic',
    stack: [
      {
        title: 'React 17',
      }, {
        title: 'React-router-dom',
      }, {
        title: 'React-query',
      }, {
        title: 'React-hook-form',
      }, {
        title: 'Classnames',
      }, {
        title: 'CSS Modules'
      }, {
        title: 'Jest',
      }, {
        title: 'React Testing library',
      }, {
        title: 'Gitlab-CI'
      }
    ],
    description_en: 'Online clinic for doctors and patients. Various calendars, appointments on an interactive schedule, consultations (large forms), cross-platform chats on a separate microservice, authorization service, analysis schedules.',
    description_ru: 'Онлайн-клиника для врачей и пациентов. Различные календари, записи на прием по интерактивному расписанию, консультации (большие формы), кросс-платформенные чаты на отдельном микросервисе, сервис авторизации, графики анализов.',
    tasks_en: 'Starting a project from scratch, building an architecture, managing processes, integrating new developers, developing new functions.',
    tasks_ru: 'Запуск проекта с нуля, построение архитектуры, управление процессами, интеграция новых разработчиков, разработка новых функций.',
    duration: {
      from: '2021-05-01',
      to: '2023-06-01',
    },
  }, {
    name: 'FlyCode HRM',
    stack: [
      {
        title: 'TypeScript',
      }, {
        title: 'React 18',
      }, {
        title: 'React-hook-form',
      }, {
        title: 'Ant Design',
      }, {
        title: 'NestJS',
      }, {
        title: 'PostgreSQL',
      }, {
        title: 'Python Telegram Bot'
      }, {
        title: 'Docker',
      }, {
        title: 'Gitlab CI',
      }
    ],
    description_en: 'Internal HRM system for the company to maintain and record employees and candidates after the interview. In addition to the system, a telegram bot was created, which writes weekly birthdays of employees to the company\'s chat, and additionally informs about a specific birthday the day before.',
    description_ru: 'Внутренняя HRM система для компании для ведения и учета сотрудников и кандидатов после собеседования. В дополнение к системе был создан телеграмм бот, который еженедельно пишет в чат компании дни рождения сотрудников, и дополнительно информирует о конкретном дне рождения накануне.',
    tasks_en: 'Developing a project from scratch, collecting requirements, developing a backend, interface, bot. Deployment, CI/CD, hosting.',
    tasks_ru: 'Разработка проекта с нуля, сбор требований, разработка backend, frontend, бота. Deploy, CI/CD, hosting.',
    duration: {
      from: '2022-03-01',
      to: '2022-06-01',
    }
  }, {
    name: 'Punk City',
    stack: [
      {
        title: 'TypeScript',
      }, {
        title: 'React 18',
      }, {
        title: 'Classnames',
      }
    ],
    description_en: 'Telegram is a game in which there are fights between users, trading items, getting them from loot boxes.',
    description_ru: 'Телеграм игра, в которой происходят бои между пользователями, торговля предметами, получение их из лутбоксов.',
    tasks_en: 'Development of multiple interfaces with animations. The main goal: to make the build lightweight and adaptive layout for any screen size.',
    tasks_ru: 'Разработка нескольких интерфейсов с анимациями. Основная цель: сделать билд легковесным и адаптивную верстку под любой размер экрана.',
    duration: {
      from: '2022-12-25',
      to: new Date().toDateString(),
    }
  },
  {
    name: 'FlyCode Scrum Bot',
    stack: [
      {
        title: 'Python',
      }, {
        title: 'Aiogram',
      }, {
        title: 'Docker',
      }, {
        title: 'Gitlab CI',
      }
    ],
    description_en: 'Telegram bot helper for SCRUM-master and team',
    description_ru: 'Телеграм бот для помощи SCRUM-мастеру и командам',
    tasks_en: 'Developing a project from scratch, collecting requirements, market research, developing a bot. Deployment, CI/CD, hosting.',
    tasks_ru: 'Разработка проекта с нуля, сбор требований, изучение рынка, разработка бота. Deploy, CI/CD, hosting.',
    duration: {
      from: '2022-10-21',
      to: '2023-06-01',
    }
  },
  {
    name: 'Yandex Robolavka',
    stack: [
      {
        title: 'NextJS',
      }, {
        title: 'TypeScript',
      }, {
        title: 'MobX-state-tree',
      }, {
        title: 'RXJS',
      }
    ],
    description_en: 'Interfaces for remote control of the robot and monitoring the state of the warehouse and processes taking place on it',
    description_ru: 'Интерфейсы для телеуправления роботом и мониторинг состояния склада и процессов происходящих на нем',
    tasks_en: 'Development of adaptive interfaces adapted for mobile tablets. Robot operation protocols, interaction with the backend, display of the robot\'s state in the interface.',
    tasks_ru: 'Разработка адаптивных интерфейсов, адаптированных под мобильные планшеты. Протоколы работы с роботом, взаимодействие с бекендом, отображение состояния робота в интерфейсе.',
    duration: {
      from: '2023-06-01',
      to: '2023-12-01',
    }
  },
  {
    name: 'Yandex Robotics',
    stack: [
      {
        title: 'NextJS',
      }, {
        title: 'TypeScript',
      }, {
        title: 'Redux Saga',
      }
    ],
    description_ru: 'Интерфейсы для отслеживания состояния роботов, управление их конфигурацией, обновление прошивок, отображение данных, собранных роботами',
    description_en: 'Interfaces for tracking the status of robots, managing their configuration, updating firmware, displaying data collected by robots',
    tasks_ru: 'Разработка стандартизированных интрефейсов, взаимодействие с множеством бекендов через серверную часть приложения, отображение данных, собранных роботами',
    tasks_en: 'Development of standardized interfaces, interaction with many backends through the server part of the application, display of data collected by robots',
    duration: {
      from: '2023-12-01',
      to: new Date().toDateString(),
    }
  }
]
