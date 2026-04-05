// UI Component: ServiceItem
// Design: Service Item — элемент секции «Как со мной работают»
// Состав: номер + описание услуги + изображение (слайдер) + DotPagination

import DotPagination from './DotPagination'

interface ServiceItemProps {
  id: string
  number: string
  description: string
  images: string[]
}

const ServiceItem = ({ number, description, images }: ServiceItemProps) => {
  return (
    <div>
      {/* TODO: implement */}
    </div>
  )
}

export default ServiceItem
