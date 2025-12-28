import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../Common/Button';
import { validateEmail } from '../../utils/helpers';
import './AuthForm.css';

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      await login(data.email, data.password);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            validate: (value) => validateEmail(value) || 'Invalid email address'
          })}
          className={errors.email ? 'error' : ''}
          placeholder="Enter your email"
        />
        {errors.email && <span className="error-message">{errors.email.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password *</label>
        <input
          id="password"
          type="password"
          {...register('password', { required: 'Password is required' })}
          className={errors.password ? 'error' : ''}
          placeholder="Enter your password"
        />
        {errors.password && <span className="error-message">{errors.password.message}</span>}
      </div>

      <div className="form-options">
        <label className="checkbox-label">
          <input type="checkbox" {...register('remember')} />
          <span>Remember me</span>
        </label>
        <Link to="/contact" className="forgot-password">
          Forgot password?
        </Link>
      </div>

      {error && (
        <div className="error-message">{error}</div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={isSubmitting}
        className="submit-button"
      >
        Sign In
      </Button>

      <p className="form-footer">
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </form>
  );
};

export default LoginForm;

