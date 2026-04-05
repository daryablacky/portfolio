// Data: Works / Projects
// Design: works-section — масонри-галерея проектных работ

export interface Work {
  id: string
  title: string
  description: string
  type: string
  year: string
  imageSrc: string
  imageAlt: string
}

export const works: Work[] = [
  {
    id: '1',
    title: 'Ребрендинг Flowwow',
    description: 'Арт-дирекшен. Flowwow, 2024',
    type: 'Брендинг',
    year: '2024',
    imageSrc: '/images/works/flowwow-rebrand.jpg',
    imageAlt: 'Ребрендинг Flowwow',
  },
  // TODO: добавить остальные работы
]
