# Дизайн-концепции для сайта Arseniy Kim Courses

## Контекст
Сайт продажи видеокурсов по спорту и саморазвитию. Ориентир — arseniykim.ru/formula: тёмная тема, неоновые акценты (cyan/blue + purple/magenta), современный минимализм.

---

<response>
## Идея 1: «Neon Brutalism»

<idea>

**Design Movement:** Neo-Brutalism с неоновыми акцентами — сочетание грубой, честной типографики с яркими свечениями и контрастными блоками.

**Core Principles:**
1. Жёсткие контрасты: чёрный фон + яркие неоновые элементы без полутонов
2. Крупная, агрессивная типографика с variable weight
3. Асимметричные сетки с перекрывающимися элементами
4. Функциональная грубость: видимые границы, чёткие разделители

**Color Philosophy:** Глубокий чёрный (#0A0A0A) как холст, на котором «горят» неоновые элементы. Cyan (#00F0FF) — основной акцент для CTA и интерактивных элементов. Magenta (#FF00E5) — вторичный акцент для выделения цен и бейджей. Белый (#F0F0F0) — текст. Эмоция: энергия, дерзость, технологичность.

**Layout Paradigm:** Broken grid — карточки курсов разного размера, перекрывающие друг друга. Hero-секция на всю ширину с диагональными разрезами. Навигация — горизонтальная полоса с glitch-эффектом при hover.

**Signature Elements:**
1. Неоновые glow-тени на ключевых элементах (box-shadow с blur)
2. Диагональные разрезы секций через clip-path
3. Glitch-анимация на заголовках при hover

**Interaction Philosophy:** Агрессивные, быстрые переходы. Элементы «вспыхивают» при наведении. Кнопки имеют пульсирующий glow. Скролл-анимации резкие, с эффектом «snap».

**Animation:** Быстрые transitions (150ms). Glow-пульсация на CTA (infinite). Glitch-эффект на заголовках. Параллакс на hero-изображениях. Карточки появляются с scale(0.95) → scale(1).

**Typography System:** Display: «Space Grotesk» (Bold 700-800) для заголовков — геометрический, технологичный. Body: «DM Sans» (Regular 400, Medium 500) — чистый, читабельный. Размеры: H1 — 4rem, H2 — 2.5rem, body — 1rem. Letter-spacing: -0.02em для заголовков.

</idea>
<probability>0.06</probability>
</response>

---

<response>
## Идея 2: «Dark Luxe Gradient»

<idea>

**Design Movement:** Dark Luxury Minimalism — элегантный тёмный интерфейс с плавными градиентами и утончёнными деталями, вдохновлённый premium SaaS и fashion-tech.

**Core Principles:**
1. Глубина через слои: полупрозрачные карточки на градиентном фоне
2. Плавность и текучесть: все переходы мягкие, органические
3. Иерархия через свет: важные элементы «светятся», второстепенные приглушены
4. Пространство как роскошь: щедрые отступы, воздух между элементами

**Color Philosophy:** Фон — глубокий тёмно-синий (#0B0E17) с едва заметным градиентом в фиолетовый. Акцент 1: электрик-голубой (#3B82F6 → #06B6D4 gradient) для CTA и ключевых элементов. Акцент 2: пурпурный (#8B5CF6 → #EC4899 gradient) для бейджей и декоративных элементов. Текст: белый (#F8FAFC) с приглушённым серым (#94A3B8) для вторичного. Эмоция: премиальность, доверие, амбициозность.

**Layout Paradigm:** Full-width секции с центрированным контентом (max-w-6xl). Hero — split layout: текст слева, визуал справа с floating элементами. Каталог — responsive grid 1/2/3 колонки. Страница курса — wide hero + sidebar с ценой (sticky). Обильное использование backdrop-blur на карточках.

**Signature Elements:**
1. Glassmorphism карточки (backdrop-blur + полупрозрачный фон + тонкая border с gradient)
2. Gradient mesh фоны секций (радиальные градиенты cyan/purple с низкой opacity)
3. Светящиеся accent-линии как разделители секций

**Interaction Philosophy:** Плавные, элегантные переходы. Карточки при hover приподнимаются с усилением glow. Кнопки имеют gradient shift при hover. Всё ощущается как premium-продукт. Микро-анимации на иконках.

**Animation:** Transitions 300-400ms с ease-out. Карточки: translateY(-4px) + усиление shadow при hover. Hero-элементы появляются с fade-in + slide-up (staggered). Gradient фоны медленно анимируются (background-position shift). Smooth scroll между секциями. Кнопки: gradient-position shift при hover.

**Typography System:** Display: «Outfit» (SemiBold 600, Bold 700) — современный geometric sans с мягкими формами. Body: «Plus Jakarta Sans» (Regular 400, Medium 500) — элегантный, отличная читаемость. Размеры: H1 — 3.5rem (desktop) / 2.25rem (mobile), H2 — 2rem, body — 1rem/1.125rem. Line-height: 1.2 для заголовков, 1.6 для текста.

</idea>
<probability>0.08</probability>
</response>

---

<response>
## Идея 3: «Kinetic Sport»

<idea>

**Design Movement:** Sport-Tech Dynamism — энергичный, спортивный дизайн с кинетическими элементами, вдохновлённый Nike Training Club и Peloton.

**Core Principles:**
1. Движение как метафора: всё на сайте «двигается» — от анимаций до диагональных линий
2. Контраст масштабов: огромные числа/заголовки рядом с мелким текстом
3. Фотография как центр: крупные, атмосферные фото Арсения в действии
4. Энергия цвета: яркие акценты на тёмном фоне как вспышки энергии

**Color Philosophy:** Фон: угольно-чёрный (#111111) с тёплым подтоном. Акцент: electric lime (#CCFF00) — энергия, спорт, действие. Вторичный: ice blue (#00D4FF) — технологичность, прохлада. Текст: чистый белый (#FFFFFF) + тёплый серый (#9CA3AF). Эмоция: мотивация, действие, результат.

**Layout Paradigm:** Full-bleed фотографии с overlay текстом. Диагональные секции (skew transforms). Карточки курсов — горизонтальные на десктопе, вертикальные на мобильных. Hero — полноэкранное видео/фото с parallax. Числовые метрики крупным планом.

**Signature Elements:**
1. Диагональные полосы и skewed секции
2. Крупные числа-метрики (цена, длительность) как визуальные якоря
3. Progress-bar элементы как декоративные линии

**Interaction Philosophy:** Энергичные, быстрые анимации. Элементы «влетают» в viewport. Hover-эффекты с scale и rotation. Кнопки с «пружинным» эффектом. Ощущение движения и прогресса.

**Animation:** Spring-based transitions (200ms). Scroll-triggered entrance: slide from left/right alternating. Числа — count-up анимация при появлении. Карточки — tilt effect при hover (perspective transform). Progress bars — fill animation. Hero — ken burns effect на фоновом изображении.

**Typography System:** Display: «Bebas Neue» или «Oswald» (Bold) — condensed, спортивный, мощный. Body: «Source Sans 3» (Regular 400, SemiBold 600) — нейтральный, читабельный. Размеры: H1 — 5rem (uppercase), H2 — 2.5rem, body — 1rem. Letter-spacing: 0.05em для заголовков (uppercase), normal для текста.

</idea>
<probability>0.04</probability>
</response>
