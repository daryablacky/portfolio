// Data: Experience
// Design: experience-section — 3 записи опыта работы

export interface ExperienceEntry {
  id: string
  number: string
  jobTitle: string
  company: string
  dates: string
  descriptionLeft: string
  descriptionRight: string
}

export const experience: ExperienceEntry[] = [
  {
    id: '1',
    number: '01',
    jobTitle: 'TODO: Должность',
    company: 'TODO: Компания',
    dates: 'TODO: Даты',
    descriptionLeft: 'TODO: описание левая колонка',
    descriptionRight: 'TODO: описание правая колонка',
  },
  {
    id: '2',
    number: '02',
    jobTitle: 'TODO: Должность',
    company: 'TODO: Компания',
    dates: 'TODO: Даты',
    descriptionLeft: 'TODO: описание',
    descriptionRight: 'TODO: описание',
  },
  {
    id: '3',
    number: '03',
    jobTitle: 'TODO: Должность',
    company: 'TODO: Компания',
    dates: 'TODO: Даты',
    descriptionLeft: 'TODO: описание',
    descriptionRight: 'TODO: описание',
  },
]
