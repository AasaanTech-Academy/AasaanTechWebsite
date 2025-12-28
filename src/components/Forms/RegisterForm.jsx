import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../Common/Button';
import { validateEmail } from '../../utils/helpers';
import './AuthForm.css';

const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const password = watch('password');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      await registerUser(data);
      navigate('/');
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="name">Full Name *</label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })}
          className={errors.name ? 'error' : ''}
          placeholder="Enter your full name"
        />
        {errors.name && <span className="error-message">{errors.name.message}</span>}
      </div>

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
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Password must be at least 6 characters' }
          })}
          className={errors.password ? 'error' : ''}
          placeholder="Create a password"
        />
        {errors.password && <span className="error-message">{errors.password.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password *</label>
        <input
          id="confirmPassword"
          type="password"
          {...register('confirmPassword', {
            required: 'Please confirm your password',
            validate: (value) => value === password || 'Passwords do not match'
          })}
          className={errors.confirmPassword ? 'error' : ''}
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword.message}</span>}
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
        Sign Up
      </Button>

      <p className="form-footer">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </form>
  );
};

export default RegisterForm;

