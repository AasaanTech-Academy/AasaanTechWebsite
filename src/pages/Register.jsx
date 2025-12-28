import AnimatedSection from '../components/Common/AnimatedSection';
import RegisterForm from '../components/Forms/RegisterForm';
import Card from '../components/Common/Card';
import './Auth.css';

const Register = () => {
  return (
    <div className="auth-page">
      <div className="auth-hero section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="page-header">
              <h1 className="page-title">
                Join <span className="text-gradient">AasaanTech</span>
              </h1>
              <p className="page-description">
                Create your account and start learning today
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
                <h2>Sign Up</h2>
                <RegisterForm />
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

