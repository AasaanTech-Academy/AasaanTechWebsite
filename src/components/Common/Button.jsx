import { motion } from 'framer-motion';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  className = '',
  ...props
}) => {
  const baseClass = `btn btn-${variant} btn-${size} ${className}`;

  return (
    <motion.button
      className={baseClass}
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.05, y: -2 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.95 } : {}}
      {...props}
    >
      {loading ? (
        <span className="btn-loading">
          <span className="spinner"></span>
          Loading...
        </span>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default Button;

