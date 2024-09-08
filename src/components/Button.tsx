
const Button: React.FC<{ children: React.ReactNode; onClick?: () => void; variant?: string }> = ({ children, onClick, variant }) => {
  return (
   <button onClick={onClick} className= {`${variant}`}>{children}</button>
  )
}
   

export default Button
