export interface Product {
  id: string;
  slug: string;
  title_en: string;
  title_ru: string;
  shortDescription_en: string;
  shortDescription_ru: string;
  fullDescription_en: string;
  fullDescription_ru: string;
  price: number;
  currency: string;
  coverImage: string;
  tags: string[];
  includes: string[];
  includes_ru: string[];
  duration: string;
  level: string;
}

const defaultProducts: Product[] = [
  {
    id: "cc673a47-556f-48c0-b1d3-184c4b728ead",
    slug: "digital-freedom",
    title_en: "Digital Freedom",
    title_ru: "Цифровая свобода",
    shortDescription_en: "A course for those who want to control technology, not live by its rules.",
    shortDescription_ru: "Курс для тех, кто хочет управлять технологиями, а не жить по их правилам.",
    fullDescription_en: "Your smartphone should help you live, not steal your attention, sleep, and energy. The **Digital Freedom** course is a practical system that helps you break free from constant notifications, anxiety, and distraction — without giving up technology entirely.\n\nYou'll understand why your phone pulls you in, which habits control you automatically, and how to regain control without stress or radical restrictions.",
    fullDescription_ru: "Смартфон должен помогать жить, а не забирать внимание, сон и энергию. Курс **«Цифровая Свобода»** — это практичная система, которая помогает выйти из режима постоянных уведомлений, тревоги и расфокуса, не отказываясь от технологий полностью.\n\nВы разберётесь, почему телефон тянет к себе, какие привычки управляют вами автоматически, и как вернуть контроль без стресса и радикальных ограничений.",
    price: 2499,
    currency: "RUB",
    coverImage: "https://api.lava.top/cs/products/cc673a47-556f-48c0-b1d3-184c4b728ead/thumbnail/cbd51217-1cb7-4d47-81d0-dd8d6281b1c5",
    tags: ["self-development", "digital-detox", "productivity"],
    includes: [
      "Digital habit diagnostics",
      "Full smartphone checkup",
      "Notification setup & Silence Mode",
      "Environment impact on focus",
      "Asynchronous communication guide",
      "Healthy sleep restoration",
      "Morning without phone routine",
      "Phone-free zones creation",
      "Digital etiquette guide",
      "Day without gadgets experiment"
    ],
    includes_ru: [
      "Диагностика цифровых привычек",
      "Полный чекап смартфона",
      "Настройка уведомлений и Silence Mode",
      "Влияние окружения на концентрацию",
      "Асинхронное общение без чувства вины",
      "Восстановление здорового сна",
      "Утро без телефона",
      "Создание бестелефонных зон",
      "Цифровой этикет",
      "Эксперимент «день без гаджетов»"
    ],
    duration: "Self-paced",
    level: "All levels"
  },
  {
    id: "38d42513-97db-47ea-989c-c5692fa31f22",
    slug: "energy-complex",
    title_en: "Energy Complex",
    title_ru: "Комплекс для энергии",
    shortDescription_en: "Simple yet effective exercises to boost blood circulation and charge your energy for the whole day.",
    shortDescription_ru: "Простые, но максимально эффективные упражнения для запуска циркуляции крови и заряда энергией на весь день.",
    fullDescription_en: "A paradox of physiology — to get energy, you need to move. This complex contains the simplest yet most effective exercises to boost blood circulation throughout your body and charge your energy for the entire day.\n\nYou can use it as a morning workout or as a quick energy break during the day.",
    fullDescription_ru: "Парадокс физиологии — чтобы появилась энергия, нужно подвигаться. И в этом комплексе собраны самые простые, но при этом максимально эффективные упражнения для того, чтобы запустить циркуляцию крови по организму и зарядиться энергией на весь день.\n\nЕго можно выполнять и как утреннюю зарядку, и как разминку в течение дня.",
    price: 2499,
    currency: "RUB",
    coverImage: "https://api.lava.top/cs/products/38d42513-97db-47ea-989c-c5692fa31f22/thumbnail/e84252a2-76c6-45a3-bb10-0327800466f5",
    tags: ["fitness", "energy", "morning-routine"],
    includes: [
      "Morning energy routine",
      "Quick energy break exercises",
      "Blood circulation boost techniques",
      "Video demonstrations"
    ],
    includes_ru: [
      "Утренняя энергетическая зарядка",
      "Быстрые упражнения для перерыва",
      "Техники для улучшения кровообращения",
      "Видео-демонстрации"
    ],
    duration: "Quick sessions",
    level: "Beginner"
  },
  {
    id: "0109f1b3-42a3-42ff-82e2-81510ecb3146",
    slug: "steel-abs-6-minutes",
    title_en: "Steel Abs in 6 Minutes",
    title_ru: "Стальной пресс за 6 минут",
    shortDescription_en: "An exclusive video course to achieve visible abs results with just 6 minutes a day.",
    shortDescription_ru: "Эксклюзивный видео-курс для достижения видимых результатов — всего 6 минут в день.",
    fullDescription_en: "Get steel abs in just 6 minutes a day! This exclusive video course from fitness expert Arseniy Kim is designed for those who want visible results without spending hours in the gym.\n\nThe course consists of two videos: an intensive 6-minute workout with perfect technique demonstration, and a detailed breakdown of the scientific foundations behind the program.",
    fullDescription_ru: "Получите стальной пресс всего за 6 минут в день! Эксклюзивный видео-курс от фитнес-эксперта Арсения Кима разработан специально для тех, кто хочет добиться видимых результатов, не тратя часы в тренажерном зале.\n\nКурс состоит из двух видео: интенсивная 6-минутная тренировка с демонстрацией идеальной техники и подробный разбор научных основ программы.",
    price: 2499,
    currency: "RUB",
    coverImage: "https://api.lava.top/cs/products/0109f1b3-42a3-42ff-82e2-81510ecb3146/thumbnail/2d375db7-2dea-458e-adf8-1e8833709435",
    tags: ["fitness", "abs", "quick-workout"],
    includes: [
      "6-minute intensive ab workout (6:45)",
      "Scientific breakdown video (8:39)",
      "Proper breathing techniques",
      "Injury prevention tips",
      "Progress tracking guide"
    ],
    includes_ru: [
      "6-минутная интенсивная тренировка (6:45)",
      "Научный разбор комплекса (8:39)",
      "Техника правильного дыхания",
      "Советы по предотвращению травм",
      "Руководство по отслеживанию прогресса"
    ],
    duration: "~15 min total",
    level: "All levels"
  },
  {
    id: "5b71620b-c07b-466b-acd8-85d6ea52dc8a",
    slug: "power-of-habit",
    title_en: "Power of Habit",
    title_ru: "Сила привычки",
    shortDescription_en: "A transformational course on understanding and managing the mechanisms that shape your life.",
    shortDescription_ru: "Трансформационный курс о понимании и управлении механизмами, которые формируют вашу жизнь.",
    fullDescription_en: "Discover the **Power of Habit** and transform your life! This transformational video course from self-development expert Arseniy Kim is your key to understanding and managing the mechanisms that shape your life.\n\nThe course consists of three sequential video lessons totaling just over 14 minutes, each revealing fundamental aspects of habit formation.",
    fullDescription_ru: "Раскройте **«Силу привычки»** и трансформируйте свою жизнь! Трансформационный видео-курс от эксперта по саморазвитию Арсения Кима — ваш ключ к пониманию и управлению механизмами, которые формируют вашу жизнь.\n\nКурс состоит из трёх последовательных видео-уроков общей продолжительностью чуть более 14 минут.",
    price: 4999,
    currency: "RUB",
    coverImage: "https://api.lava.top/cs/products/5b71620b-c07b-466b-acd8-85d6ea52dc8a/thumbnail/64029411-2064-4b9f-9177-3907ab2eb8f6",
    tags: ["self-development", "habits", "productivity"],
    includes: [
      "Lesson 1: Foundations (4:08)",
      "Lesson 2: Strategies & Tactics (6:32)",
      "Lesson 3: Locking in Success (3:29)",
      "Practical habit-building tools",
      "Long-term reinforcement techniques"
    ],
    includes_ru: [
      "Урок 1: Основы (4:08)",
      "Урок 2: Стратегии и тактики (6:32)",
      "Урок 3: Закрепление успеха (3:29)",
      "Практические инструменты формирования привычек",
      "Техники долгосрочного закрепления"
    ],
    duration: "~14 min",
    level: "All levels"
  },
  {
    id: "ec46be05-ecc0-4286-842f-8a75d3c17d26",
    slug: "cardio-training",
    title_en: "Cardio Training",
    title_ru: "Кардио-тренировки",
    shortDescription_en: "Learn how to turn your heart into a perpetual engine — scientifically backed cardio methods.",
    shortDescription_ru: "Узнайте, как превратить сердце в вечный двигатель — научно обоснованные методы кардио.",
    fullDescription_en: "Are you sure your cardio workouts are doing more good than harm? Many people, chasing quick results, make mistakes that can cost their health dearly.\n\nThis is a deep dive into the physiology of cardio training. You'll learn the main mistakes 90% of people make, scientifically backed training methods, and how to choose the right individual load.",
    fullDescription_ru: "Вы уверены, что ваши кардиотренировки приносят пользу, а не вред? Многие, в погоне за быстрым результатом, совершают ошибки, которые могут дорого стоить их здоровью.\n\nЭто глубокое погружение в физиологию кардиотренировок. Вы узнаете главные ошибки, которые совершает 90% людей, научно обоснованные методы тренировки и как подобрать индивидуальную нагрузку.",
    price: 7499,
    currency: "RUB",
    coverImage: "https://api.lava.top/cs/products/ec46be05-ecc0-4286-842f-8a75d3c17d26/thumbnail/9b1c5639-7a62-4655-930b-811b9a793b78",
    tags: ["fitness", "cardio", "health"],
    includes: [
      "Common cardio mistakes analysis",
      "Science-based training methods",
      "Individual load selection guide",
      "Practical tips for immediate use",
      "Heart health optimization"
    ],
    includes_ru: [
      "Анализ главных ошибок в кардио",
      "Научно обоснованные методы тренировки",
      "Подбор индивидуальной нагрузки",
      "Практические советы для немедленного применения",
      "Оптимизация здоровья сердца"
    ],
    duration: "Video course",
    level: "Intermediate"
  },
  {
    id: "53350829-b0e4-4ff1-a5eb-f63602238b5f",
    slug: "body-flexibility",
    title_en: "Body Flexibility",
    title_ru: "Гибкость тела",
    shortDescription_en: "A comprehensive program of 8 video lessons to restore your body's natural flexibility.",
    shortDescription_ru: "Комплексная программа из 8 видео-уроков для восстановления природной гибкости тела.",
    fullDescription_en: "Restore your freedom of movement and lightness! This comprehensive video course from movement expert Arseniy Kim is not just a set of exercises — it's a complete system for \"reprogramming\" your body.\n\nThe full program includes 8 video lessons totaling almost 3 hours. Each lesson is a step toward a new sensation of your body.",
    fullDescription_ru: "Верните себе свободу движения и лёгкость! Комплексный видео-курс от эксперта по движению Арсения Кима — это не просто набор упражнений, а целостная система для «перепрошивки» вашего тела.\n\nПолноценная программа из 8 видео-уроков общей продолжительностью почти 3 часа. Каждый урок — это шаг к новому ощущению своего тела.",
    price: 9999,
    currency: "RUB",
    coverImage: "https://api.lava.top/cs/products/53350829-b0e4-4ff1-a5eb-f63602238b5f/thumbnail/5abb0360-e096-40f2-b7c6-bebdd109a311",
    tags: ["fitness", "flexibility", "wellness"],
    includes: [
      "8 comprehensive video lessons",
      "Almost 3 hours of content",
      "Morning practice routines",
      "Deep full-body sessions",
      "Posture improvement exercises",
      "Injury prevention stretches"
    ],
    includes_ru: [
      "8 полноценных видео-уроков",
      "Почти 3 часа контента",
      "Утренние практики",
      "Глубокая проработка всего тела",
      "Упражнения для улучшения осанки",
      "Растяжка для предотвращения травм"
    ],
    duration: "~3 hours",
    level: "All levels"
  }
];

export function getProducts(): Product[] {
  try {
    const stored = localStorage.getItem("arseniy_kim_products");
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {}
  return defaultProducts;
}

export function saveProducts(products: Product[]) {
  localStorage.setItem("arseniy_kim_products", JSON.stringify(products));
}

export function getProductBySlug(slug: string): Product | undefined {
  return getProducts().find(p => p.slug === slug);
}

export const allTags = [
  "fitness", "self-development", "energy", "abs", "quick-workout",
  "habits", "productivity", "cardio", "health", "flexibility",
  "wellness", "digital-detox", "morning-routine"
];
