# 🎨 EEBOOK LANDING - ПОЛНЫЙ МУДБОРД

> Серо-изумрудная премиум цветовая схема в стиле Apple для инвестиционной платформы

---

## 🎨 ЦВЕТОВАЯ ПАЛИТРА

### Основные цвета (Light Mode)

**Background (Фоны):**

```
white          #ffffff      - Основной фон
slate-50       #f8fafc      - Альтернативный светлый фон
slate-100      #f1f5f9      - Секции, карточки
slate-900      #0f172a      - Темный текст
```

**Text (Текст):**

```
slate-900      #0f172a      - Заголовки, основной текст
slate-700      #334155      - Вторичный текст
slate-600      #475569      - Описания
slate-500      #64748b      - Приглушенный текст
slate-400      #94a3b8      - Дисейбл, плейсхолдеры
```

**Accent (Акценты):**

```
emerald-600    #059669      - Основной акцент, CTA
emerald-500    #10b981      - Иконки, элементы
emerald-400    #34d399      - Hover состояния
emerald-100    #d1fae5      - Легкие фоны
emerald-50     #ecfdf5      - Бейджи, подсветки

teal-600       #0d9488      - Вторичный акцент
teal-500       #14b8a6      - Элементы
teal-100       #ccfbf1      - Фоны
teal-50        #f0fdfa      - Подсветки
```

**Градиенты:**

```css
/* Основной градиент кнопок и акцентов */
bg-gradient-to-r from-emerald-600 to-teal-600

/* Градиент текста заголовков */
bg-gradient-to-r from-emerald-600 to-teal-600 
+ bg-clip-text text-transparent

/* Градиент фонов карточек */
bg-gradient-to-br from-emerald-50 to-teal-50

/* Hero заголовок градиент */
linear-gradient(135deg, #1e293b 0%, #475569 50%, #64748b 100%)
```

---

### Dark Mode

**Background:**

```
slate-900      #0f172a      - Основной фон
slate-800      #1e293b      - Карточки, секции
slate-700      #334155      - Элементы
```

**Text:**

```
white          #ffffff      - Заголовки
slate-300      #cbd5e1      - Основной текст
slate-400      #94a3b8      - Вторичный текст
```

**Accent:**

```
emerald-400    #34d399      - Акценты (светлее для контраста)
teal-400       #2dd4bf      - Вторичные акценты
```

---

## 📐 ТИПОГРАФИКА

### Шрифты

```
font-family: System UI font stack (default)
- macOS: San Francisco
- Windows: Segoe UI
- Android: Roboto
- Fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

### Размеры текста

**Заголовки страниц (Hero, Sections):**

```
H1: text-6xl md:text-8xl        (3.75rem / 6rem = 60px / 96px)
H2: text-5xl md:text-6xl        (3rem / 3.75rem = 48px / 60px)
H3: text-3xl md:text-4xl        (1.875rem / 2.25rem = 30px / 36px)
```

**Подзаголовки и описания:**

```
text-2xl md:text-4xl            (1.5rem / 2.25rem = 24px / 36px) - Hero subtitle
text-xl                         (1.25rem = 20px) - Section descriptions
text-lg                         (1.125rem = 18px) - Card titles
text-base                       (1rem = 16px) - Body text
text-sm                         (0.875rem = 14px) - Small text, labels
text-xs                         (0.75rem = 12px) - Captions, footnotes
```

**Специальные цифры:**

```
text-7xl                        (4.5rem = 72px) - ROI результаты
text-6xl                        (3.75rem = 60px) - Статистика
text-5xl                        (3rem = 48px) - Метрики
text-3xl                        (1.875rem = 30px) - Карточки статов
text-2xl                        (1.5rem = 24px) - Вторичные цифры
```

### Начертания

```
font-weight-medium: 500         - Заголовки, кнопки, лейблы
font-weight-normal: 400         - Основной текст, параграфы
```

### Line Heights

```
line-height: 1.5                - Везде (из globals.css)
tracking-tight                  - Hero заголовок
tracking-wide                   - Мелкие uppercase лейблы
```

---

## 📦 КОМПОНЕНТЫ И РАЗМЕРНОСТИ

### Кнопки (Button)

**Размеры:**

```
Default:        h-10 px-4 py-2          (40px × auto)
size="sm":      h-9 px-3                (36px)
size="lg":      h-11 px-8               (44px) - Hero CTA
Custom Hero:    px-8 py-6               (32px × 24px padding)
```

**Border Radius:**

```
rounded-xl                              (0.75rem = 12px) - Стандарт
rounded-2xl                             (1rem = 16px) - Hero, крупные
```

**Варианты:**

```
Primary:        bg-gradient-to-r from-emerald-600 to-teal-600
                hover:from-emerald-700 hover:to-teal-700
                
Outline:        border-2 border-slate-200 bg-white/80 backdrop-blur-sm
                hover:border-slate-300
                
Ghost:          bg-transparent hover:bg-slate-100
```

**Тени кнопок:**

```
shadow-lg shadow-emerald-500/25
hover:shadow-xl hover:shadow-emerald-500/30
```

---

### Карточки (Card)

**Padding:**

```
p-6                                     (24px) - Стандартные карточки
p-8                                     (32px) - Средние карточки
p-8 md:p-12                             (32px / 48px) - Крупные блоки
```

**Border Radius:**

```
rounded-2xl                             (1rem = 16px) - Мелкие карточки
rounded-3xl                             (1.5rem = 24px) - Основные карточки
```

**Borders:**

```
border                                  (1px solid)
border-2                                (2px solid)
border-slate-200                        - Light mode
border-slate-700                        - Dark mode
```

**Background:**

```
bg-white                                - Light mode
bg-slate-800                            - Dark mode
bg-gradient-to-br from-white to-slate-50  - Subtle gradient
```

---

### Иконки (Lucide)

**Размеры:**

```
w-3 h-3                                 (12px) - Browser dots
w-4 h-4                                 (16px) - Бейджи, мелкие элементы
w-5 h-5                                 (20px) - Кнопки, метрики
w-6 h-6                                 (24px) - Карточки фич
w-8 h-8                                 (32px) - Сертификаты
w-12 h-12                               (48px) - Главные элементы
```

**Цвета иконок:**

```
text-emerald-600                        - Акцентные иконки
text-slate-600                          - Нейтральные иконки
group-hover:text-emerald-600            - Hover на карточке
```

**Иконки в карточках:**

```
Container: p-3 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100
Icon: w-6 h-6 text-emerald-600
```

---

### Секции (Sections)

**Padding:**

```
py-32                                   (128px) - Основные секции
py-24                                   (96px) - Hero
```

**Container:**

```
max-w-7xl mx-auto px-6                  (1280px max width, 24px padding)
```

**Заголовки секций:**

```
mb-20                                   (80px) - Отступ заголовка от контента
text-center                             - Центрирование
```

---

### Сетки (Grids)

**Features:**

```
grid-cols-1 md:grid-cols-2 lg:grid-cols-4
gap-6                                   (24px)
```

**LandingPricing:**

```
grid-cols-1 md:grid-cols-3
gap-8                                   (32px)
```

**Case Studies:**

```
grid-cols-1 lg:grid-cols-2              (инфо + график)
```

**Gaps:**

```
gap-2                                   (8px) - Мелкие элементы
gap-4                                   (16px) - Средние
gap-6                                   (24px) - Карточки
gap-8                                   (32px) - Крупные блоки
gap-12                                  (48px) - ROI Calculator колонки
```

---

## ✨ HOVER ЭФФЕКТЫ И TRANSITIONS

### Кнопки

**Primary Button:**

```css
/* Градиент */
bg-gradient-to-r from-emerald-600 to-teal-600
hover:from-emerald-700 hover:to-teal-700

/* Тень */
shadow-lg shadow-emerald-500/25
hover:shadow-xl hover:shadow-emerald-500/30

/* Transition */
transition-all duration-300

/* Иконка внутри */
group-hover:translate-x-1 transition-transform
```

**Outline Button:**

```css
border-2 border-slate-200 bg-white/80 backdrop-blur-sm
hover:border-slate-300
transition-colors
```

---

### Карточки Features

**Default state:**

```css
bg-white border-slate-200
```

**Hover state:**

```css
/* Border */
hover:border-emerald-200

/* Shadow */
hover:shadow-xl hover:shadow-emerald-100/50

/* Transform */
hover:-translate-y-1

/* Background */
hover:bg-slate-50

/* Transition */
transition-all duration-300
```

**Градиент оверлей при hover:**

```tsx
<div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
```

**Иконка в карточке:**

```css
/* Container */
bg-gradient-to-br from-slate-100 to-slate-50
group-hover:from-emerald-100 group-hover:to-teal-100
transition-all duration-300

/* Icon */
text-slate-600
group-hover:text-emerald-600
transition-colors duration-300
```

---

### Ссылки в Navbar

```css
text-slate-700
hover:text-slate-900
transition-colors
```

---

### LandingPricing карточки

**Popular plan:**

```css
bg-gradient-to-br from-emerald-50 to-teal-50
border-2 border-emerald-200
shadow-2xl shadow-emerald-100/50
scale-105                                /* Увеличена по умолчанию */
```

**Обычные планы:**

```css
bg-white border-slate-200
hover:border-emerald-200
hover:shadow-xl
hover:-translate-y-1
```

---

## 🌊 OPACITY (ПРОЗРАЧНОСТЬ)

### Фоновые декорации (Blobs)

```css
/* Статичные блобы */
bg-emerald-500/10                       (10% opacity)
bg-emerald-100                          (100% но сам цвет светлый)
blur-3xl                                (48px blur)
opacity-20                              (20% общая прозрачность)
```

**Анимированные блобы:**

```tsx
animate={{
  scale: [1, 1.2, 1],
  opacity: [0.3, 0.5, 0.3]
}}
transition={{
  duration: 8,
  repeat: Infinity,
  ease: "easeInOut"
}}
```

---

### Glassmorphism (Стеклянные эффекты)

**Navbar:**

```css
bg-white/80                             (80% opacity)
backdrop-blur-xl                        (24px blur)
border-b border-slate-200
```

**Бейджи в Hero:**

```css
bg-white/80 backdrop-blur-sm
border border-slate-200
```

**Outline buttons:**

```css
bg-white/80 backdrop-blur-sm
```

---

### Градиент оверлеи на карточках

```css
/* Невидим по умолчанию */
opacity-0
group-hover:opacity-100
transition-opacity duration-300
```

---

### Текст

```css
text-slate-500                          - Приглушенный (средняя важность)
text-slate-400                          - Более приглушенный
text-emerald-100                        - На темном градиенте
```

---

## 🎭 ТЕНИ (SHADOWS)

### Уровни теней

```css
shadow-sm                               - 0 1px 2px
shadow                                  - 0 1px 3px
shadow-md                               - 0 4px 6px
shadow-lg                               - 0 10px 15px     [Карточки при hover]
shadow-xl                               - 0 20px 25px     [Активные элементы]
shadow-2xl                              - 0 25px 50px     [Dashboard, Comparison]
```

### Цветные тен��

**Emerald (зеленые):**

```css
shadow-emerald-500/25                   - Кнопки CTA
shadow-emerald-500/30                   - Hover на кнопках
shadow-emerald-100/50                   - Карточки hover (light)
shadow-emerald-900/50                   - Карточки hover (dark)
```

**Teal (бирюзовые):**

```css
shadow-teal-100/50                      - Вторичные карточки
```

**Slate (серые):**

```css
shadow-slate-100/50                     - Нейтральные карточки
```

### Где используются

```
Кнопки CTA:        shadow-lg shadow-emerald-500/25
Карточки hover:    hover:shadow-xl hover:shadow-emerald-100/50
Dashboard mockup:  shadow-2xl
Comparison table:  shadow-2xl
ROI результаты:    shadow-2xl shadow-emerald-500/50
```

---

## 🎬 АНИМАЦИИ (MOTION)

### Появление блоков (Scroll-triggered)

```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

**Варианты:**

- `y: 30` - появление снизу (основной)
- `y: -20` - появление сверху (мобильное меню)
- `x: -30` / `x: 30` - появление слева/справа (ROI calculator)
- `scale: 0.9` - увеличение (сертифик��ты)

### Timing

```
duration: 0.3                           - Быстрые (hover, интерактив)
duration: 0.4-0.5                       - Средние (карточки)
duration: 0.6                           - Основные блоки
duration: 0.8                           - Крупные блоки (Dashboard)

delay: index * 0.05                     - Sequential быстрая
delay: index * 0.1                      - Sequential средняя
delay: 0.1, 0.2, 0.3, 0.4              - Фиксированные задержки
```

### Sequential анимации (списки)

```tsx
{items.map((item, index) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
  >
    {/* Контент */}
  </motion.div>
))}
```

---

### Бесконечные анимации

**Фоновые блобы (Hero, Dashboard):**

```tsx
animate={{
  scale: [1, 1.2, 1],
  opacity: [0.3, 0.5, 0.3]
}}
transition={{
  duration: 8,                          // Медленная анимация
  repeat: Infinity,
  ease: "easeInOut"
}}
```

**Scroll indicator (Hero):**

```tsx
// Контейнер
animate={{ y: [0, 10, 0] }}
transition={{ duration: 2, repeat: Infinity }}

// Точка внутри
animate={{ y: [0, 12, 0] }}
transition={{ duration: 2, repeat: Infinity }}
```

---

### Hover transitions

**Универсальный:**

```css
transition-all duration-300
```

**Специфичные:**

```css
transition-colors                       - Цвета
transition-transform                    - Трансформации
transition-opacity                      - Прозрачность
transition-shadow                       - Тени
```

---

### Интерактивные элементы

**ROI Calculator - анимация результата:**

```tsx
<motion.div
  key={totalYearlySavings}              // Re-mount при изменении
  initial={{ scale: 1.1, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  {totalYearlySavings} ₽
</motion.div>
```

---

### Navbar появление

```tsx
initial={{ y: -100 }}
animate={{ y: 0 }}
transition={{ duration: 0.6 }}
```

---

## 🎨 СПЕЦИАЛЬНЫЕ ЭФФЕКТЫ

### Градиентный текст

**CSS inline:**

```tsx
style={{
  background: "linear-gradient(135deg, #1e293b 0%, #475569 50%, #64748b 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}}
```

**Tailwind:**

```css
bg-gradient-to-r from-emerald-600 to-teal-600 
bg-clip-text text-transparent
```

---

### Backdrop Blur (размытие фона)

```css
backdrop-blur-sm                        (4px blur)
backdrop-blur                           (8px blur)
backdrop-blur-xl                        (24px blur)
```

**Использование:**

- Navbar: `backdrop-blur-xl`
- Бейджи: `backdrop-blur-sm`
- Кнопки outline: `backdrop-blur-sm`

---

### Radial Gradient overlay

**На градиентных карточках:**

```tsx
<div className="absolute inset-0 
                bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)]" />
```

Создает эффект освещения сверху-слева.

---

### Browser Chrome Mockup

```tsx
{/* Dots */}
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>

{/* Background */}
bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900
rounded-t-3xl p-3
```

---

### Floating elements (Dashboard)

```tsx
absolute -right-8 top-1/4                    // Позиционирование
bg-white p-6 rounded-2xl                     // Стиль
shadow-2xl border border-slate-200           // Глубина

initial={{ opacity: 0, x: 20 }}              // Анимация
whileInView={{ opacity: 1, x: 0 }}
```

---

## 📊 CHARTS (RECHARTS)

### Colors

```tsx
// Area chart gradient
<linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
</linearGradient>

// Line colors
stroke="#10b981"                        - emerald-500 (основная линия)
stroke="#94a3b8"                        - slate-400 (сравнение)
strokeWidth={3}                         - Толщина основной
strokeWidth={2}                         - Толщина вторичной
strokeDasharray="5 5"                   - Пунктир для сравнения
```

### Grid & Axes

```tsx
<CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
<XAxis stroke="#94a3b8" style={{ fontSize: "14px" }} />
<YAxis stroke="#94a3b8" style={{ fontSize: "14px" }} />
```

### Tooltip

```tsx
contentStyle={{
  backgroundColor: "white",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  padding: "12px",
}}
```

### Pie Chart Colors

```tsx
const assetsData = [
  { name: "Акции", value: 45, color: "#10b981" },      // emerald-500
  { name: "Облигации", value: 30, color: "#14b8a6" },  // teal-500
  { name: "ETF", value: 25, color: "#64748b" },        // slate-500
];
```

---

## 🎯 БЕЙДЖИ И ЛЕЙБЛЫ

### Small badges

```css
px-4 py-2                               - Padding
bg-emerald-50 border border-emerald-100 - Light background
rounded-full                            - Полностью скругленные
text-sm text-emerald-700                - Текст
```

**С иконкой:**

```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 ...">
  <Sparkles className="w-4 h-4 text-emerald-600" />
  <span className="text-sm">Текст</span>
</div>
```

### Status badges (сертификаты)

```css
inline-flex px-3 py-1
bg-emerald-100 text-emerald-700
text-xs rounded-full
```

### Popular badge (LandingPricing)

```css
px-4 py-1
bg-gradient-to-r from-emerald-500 to-teal-500
text-white text-sm
rounded-full shadow-lg
```

---

## 🔘 СПЕЦИАЛЬНЫЕ ЭЛЕМЕНТЫ

### Слайдеры (Slider)

```css
/* Кастомные классы для градиента */
[&_[data-slot=slider-range]]:bg-gradient-to-r 
[&_[data-slot=slider-range]]:from-emerald-500 
[&_[data-slot=slider-range]]:to-teal-500

/* Thumb */
[&_[data-slot=slider-thumb]]:border-emerald-500
[&_[data-slot=slider-thumb]]:w-5
[&_[data-slot=slider-thumb]]:h-5
```

### Comparison Table

**Header columns:**

```css
/* eebook column */
bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500
+ radial-gradient overlay

/* Others column */
bg-slate-50 border-l border-slate-200
```

**Feature rows:**

```css
hover:bg-slate-50/50 transition-colors      - Hover на строках

/* Icons */
- Check (emerald): Полная поддержка
- Check (amber): Частичная поддержка  
- X (slate): Не поддерживается
```

---

## 📐 SPACING SYSTEM

### Padding/Margin scale

```
p-1    0.25rem    4px
p-2    0.5rem     8px
p-3    0.75rem    12px
p-4    1rem       16px
p-5    1.25rem    20px
p-6    1.5rem     24px    ← Стандартные карточки
p-8    2rem       32px    ← Средние карточки
p-10   2.5rem     40px
p-12   3rem       48px    ← Крупные блоки
p-16   4rem       64px
p-20   5rem       80px
p-24   6rem       96px    ← Hero padding
p-32   8rem       128px   ← Section padding
```

### Gaps

```
gap-2     8px      - Мелкие элементы (иконка + текст)
gap-4     16px     - Средние (форма поля)
gap-6     24px     - Карточки в grid
gap-8     32px     - Крупные блоки
gap-12    48px     - Основные колонки
```

### Margins

```
mb-1     4px      - Мелкие отступы
mb-2     8px      - Маленькие
mb-4     16px     - Средние
mb-6     24px     - Стандарт между элементами
mb-8     32px     - Между блоками
mb-12    48px     - Крупные
mb-20    80px     - Отступ заголовка от контента
```

---

## 🎪 LAYOUT PATTERNS

### Section Template

```tsx
<section className="py-32 bg-white dark:bg-slate-900">
  <div className="max-w-7xl mx-auto px-6">
    {/* Header */}
    <motion.div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl mb-6">Заголовок</h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">Описание</p>
    </motion.div>
    
    {/* Content */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Карточки */}
    </div>
  </div>
</section>
```

### Card Template

```tsx
<Card className="group p-8 bg-white border-slate-200 rounded-3xl
                 hover:border-emerald-200 hover:shadow-xl 
                 hover:-translate-y-1 transition-all duration-300">
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 
                  opacity-0 group-hover:opacity-100 transition-opacity" />
  
  {/* Content */}
  <div className="relative">
    <div className="icon-container mb-6">
      <Icon className="w-6 h-6 text-emerald-600" />
    </div>
    <h3 className="text-xl mb-3">Заголовок</h3>
    <p className="text-slate-600">Описание</p>
  </div>
</Card>
```

---

## 💎 КЛЮЧЕВЫЕ ПРИНЦИПЫ ДИЗАЙНА

### 1. Сдержанность и премиальность

- Много белого пространства (`py-32`, `mb-20`)
- Крупные заголовки (`text-6xl`)
- Минимализм в цветах (серый + изумруд)

### 2. Микро-интерактивность

- Hover на всех элементах
- Плавные transitions (`duration-300`)
- Subtle градиенты

### 3. Доверие через детали

- Rounded corners (`rounded-3xl`)
- Soft shadows (`shadow-xl shadow-emerald-100/50`)
- Glassmorphism (`backdrop-blur-xl`)

### 4. Финансовая серьезность

- Нет ярких кислотных цветов
- Приглушенные emerald вместо bright green
- Профессиональные графики

### 5. Apple-like polish

- System fonts
- Precise spacing (8px grid)
- Smooth animations
- Attention to detail

---

## 📱 RESPONSIVE BREAKPOINTS

```
sm:   640px
md:   768px    ← Tablet
lg:   1024px   ← Desktop
xl:   1280px
2xl:  1536px
```

**Типичные паттерны:**

```css
text-5xl md:text-6xl                    - Больше на десктопе
grid-cols-1 md:grid-cols-2 lg:grid-cols-4  - Адаптивная сетка
p-8 md:p-12                             - Больше padding на десктопе
hidden md:flex                          - Показать на десктопе
flex md:hidden                          - Скрыть на десктопе
```

---

## 🎨 ИТОГОВАЯ ПАЛИТРА ДЛЯ ДИЗАЙНЕРОВ

```
PRIMARY COLORS:
#059669  emerald-600  (Кнопки, акценты)
#0d9488  teal-600     (Градиенты)

NEUTRALS:
#0f172a  slate-900    (Текст заголовков)
#475569  slate-600    (Текст описаний)
#94a3b8  slate-400    (Приглушенный текст)
#f8fafc  slate-50     (Светлый фон)

SURFACES:
#ffffff  white        (Карточки)
#f1f5f9  slate-100    (Альтернативный фон)

GRADIENTS:
linear-gradient(90deg, #059669 0%, #0d9488 100%)  - Кнопки
linear-gradient(135deg, #ecfdf5 0%, #f0fdfa 100%) - Фоны карточек
```

---

**Этот мудборд покрывает все аспекты дизайна eebook landing page! 🚀**
