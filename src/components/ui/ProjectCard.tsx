// UI Component: ProjectCard
// Design instance: Project Item (4020:493) — карточка работы
// Состав: изображение + caption (заголовок) + description (тип/год)

interface ProjectCardProps {
  id: string
  title: string
  description: string
  type: string
  year: string
  imageSrc: string
  imageAlt: string
}

const ProjectCard = ({ title, description, type, year, imageSrc, imageAlt }: ProjectCardProps) => {
  return (
    <article>
      {/* TODO: implement */}
    </article>
  )
}

export default ProjectCard
