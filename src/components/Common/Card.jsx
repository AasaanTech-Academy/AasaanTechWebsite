import { motion } from 'framer-motion';
import './Card.css';

const Card = ({
  children,
  className = '',
  hover = true,
  onClick,
  ...props
}) => {
  return (
    <motion.div
      className={`card ${className}`}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;

