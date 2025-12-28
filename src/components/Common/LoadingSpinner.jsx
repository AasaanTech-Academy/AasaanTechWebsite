import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'md', className = '' }) => {
  return (
    <div className={`loading-spinner spinner-${size} ${className}`}>
      <div className="spinner-ring"></div>
      <div className="spinner-ring"></div>
      <div className="spinner-ring"></div>
    </div>
  );
};

export default LoadingSpinner;

