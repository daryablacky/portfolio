## Дарья Бучакова
## Design & Creative Director

## Стек

- **Next.js 15** — App Router, Static Export
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — анимации

## Структура

```
src/
├── app/                  # Роутинг Next.js (layout, page, globals.css)
├── components/
│   ├── sections/         # 1 секция макета = 1 компонент
│   └── ui/               # Переиспользуемые UI-компоненты
├── data/                 # Контент сайта (TypeScript)
├── hooks/                # Кастомные хуки
└── lib/                  # Утилиты
public/
├── fonts/                # Pretendard Variable (.woff2)
├── images/               # Изображения (avatar, works, experience, publications)
└── videos/               # Локальные видео
```

## Секции

| # | Компонент | Design ID |
|---|---|---|
| 0 | `Navbar` | `4026:313` |
| 1 | `HeroSection` | `4015:73` |
| 2 | `SuperpowersSection` | `4018:343` |
| 3 | `FlowwowSection` | `4008:277` |
| 4 | `WorksSection` | `4008:386` |
| 5 | `QuoteSection` | `4008:490` |
| 6 | `ExperienceSection` | `4008:503` |
| 7 | `ServicesSection` | `4008:568` |
| 8 | `PublicationsSection` | `4008:623` |
| 9 | `ContactsSection` | `4008:818` |

## Запуск

```bash
npm install
npm run dev       # localhost:3000
npm run build     # static export → /out
```

## Деплой на GitHub Pages

1. `npm run build` → папка `/out`
2. Настроить GitHub Actions для публикации `/out`
3. В настройках репозитория: Pages → Deploy from branch → `gh-pages`
4. Для root-домена добавить CNAME-запись в DNS

> При деплое в `/repo-name` (не root-домен) раскомментировать `basePath` в `next.config.ts`
