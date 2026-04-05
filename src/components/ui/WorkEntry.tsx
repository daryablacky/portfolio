// UI Component: WorkEntry
// Figma: Work Entry Container — строка опыта работы
// Состав: номер (слева) / должность + компания + даты / описание (2 колонки текста)

interface WorkEntryProps {
  id: string
  number: string
  jobTitle: string
  company: string
  dates: string
  descriptionLeft: string
  descriptionRight: string
}

const WorkEntry = ({ number, jobTitle, company, dates, descriptionLeft, descriptionRight }: WorkEntryProps) => {
  return (
    <article>
      {/* TODO: implement */}
    </article>
  )
}

export default WorkEntry
