// UI Component: CircleDecor
// Figma: hero-repit-ellipse, Circle Container — орнаментальный круг с dot-маркерами на осях
// Используется в hero-section, flowwow-section, publications-section

interface CircleDecorProps {
  size?: number
  children?: React.ReactNode
}

const CircleDecor = ({ size = 512, children }: CircleDecorProps) => {
  return (
    <div style={{ width: size, height: size, position: 'relative' }}>
      {/* TODO: SVG circle + dot markers */}
      {children}
    </div>
  )
}

export default CircleDecor
