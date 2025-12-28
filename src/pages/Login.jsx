import { Link } from 'react-router-dom';
import AnimatedSection from '../components/Common/AnimatedSection';
import LoginForm from '../components/Forms/LoginForm';
import Card from '../components/Common/Card';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-hero section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="page-header">
              <h1 className="page-title">
                Welcome <span className="text-gradient">Back</span>
              </h1>
              <p className="page-description">
                Sign in to continue your learning journey
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="auth-content section">
        <div className="container">
          <div className="auth-container">
            <AnimatedSection direction="up">
              <Card className="auth-card">
                <h2>Sign In</h2>
                <LoginForm />
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

