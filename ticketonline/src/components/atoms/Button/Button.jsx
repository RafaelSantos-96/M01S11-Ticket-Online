import './Button.css'

const Button = ({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  size = 'medium',
  onClick,
  disabled = false,
  ...props 
}) => {
  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button