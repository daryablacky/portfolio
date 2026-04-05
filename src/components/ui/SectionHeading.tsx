// UI Component: SectionHeading
// Figma: Section Heading text — заголовок секции (примерно 29px высотой)
// Используется во всех основных секциях

interface SectionHeadingProps {
  children: React.ReactNode
  id?: string
}

const SectionHeading = ({ children, id }: SectionHeadingProps) => {
  return (
    <h2 id={id}>
      {children}
    </h2>
  )
}

export default SectionHeading
