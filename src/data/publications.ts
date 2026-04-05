// Data: Publications / Public Trail
// Figma: publications-section — публикации, подкасты, видео

export type PublicationType = 'Публикации в медиа' | 'Подкасты и видео'

export interface Publication {
  id: string
  title: string
  type: PublicationType
  year: string
  href: string
  imageSrc: string
  imageAlt: string
}

export const publications: Publication[] = [
  {
    id: '1',
    title: '↗ Как получить нулевую текучку за 2 года на примере отдела дизайна?',
    type: 'Публикации в медиа',
    year: '2024',
    href: '#',
    imageSrc: '/images/publications/publication-1.jpg',
    imageAlt: 'Публикация в медиа',
  },
  {
    id: '2',
    title: '↗ Маркировка. Даша Бучакова — Design Director Flowwow',
    type: 'Подкасты и видео',
    year: '2025',
    href: '#',
    imageSrc: '/images/publications/publication-2.jpg',
    imageAlt: 'Подкаст',
  },
  {
    id: '3',
    title: '↗ BBE х Эйч: профессия граф. дизайнер',
    type: 'Подкасты и видео',
    year: '2025',
    href: '#',
    imageSrc: '/images/publications/publication-3.jpg',
    imageAlt: 'Подкаст BBE',
  },
  {
    id: '4',
    title: '↗ Всепроникающий дизайн: как Flowwow интегрирует дизайн в бизнес-модели и образ жизни потребителей',
    type: 'Публикации в медиа',
    year: '2025',
    href: '#',
    imageSrc: '/images/publications/publication-4.jpg',
    imageAlt: 'Публикация Всепроникающий дизайн',
  },
  {
    id: '5',
    title: '↗ Ребрендинг в e-com: кейс маркетплейса Flowwow',
    type: 'Публикации в медиа',
    year: '2024',
    href: '#',
    imageSrc: '/images/publications/publication-5.jpg',
    imageAlt: 'Ребрендинг e-com',
  },
]
