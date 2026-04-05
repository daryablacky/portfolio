// UI Component: Button
// Figma instances: Button-black (hero), Button (contacts)

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'black' | 'white'
  href?: string
}

const Button = ({ children, onClick, variant = 'black', href }: ButtonProps) => {
  // TODO: implement styled button
  if (href) {
    return <a href={href}>{children}</a>
  }
  return <button onClick={onClick}>{children}</button>
}

export default Button
