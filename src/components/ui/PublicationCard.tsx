// UI Component: PublicationCard
// Design: Frame 2147236632 — карточка публикации/подкаста/видео
// Состав: изображение + ↗ заголовок (ссылка) + тип (подкаст / публикация) + год

interface PublicationCardProps {
  id: string
  title: string
  type: string
  year: string
  href: string
  imageSrc: string
  imageAlt: string
}

const PublicationCard = ({ title, type, year, href, imageSrc, imageAlt }: PublicationCardProps) => {
  return (
    <article>
      {/* TODO: implement */}
    </article>
  )
}

export default PublicationCard
