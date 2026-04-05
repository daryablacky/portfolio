// UI Component: PowerCard
// Figma instance: Powers Container — карточка «суперсилы»
// Состав: иконка/изображение + название + описание

interface PowerCardProps {
  id: string
  title: string
  description: string
  iconSrc?: string
}

const PowerCard = ({ title, description, iconSrc }: PowerCardProps) => {
  return (
    <div>
      {/* TODO: implement */}
    </div>
  )
}

export default PowerCard
