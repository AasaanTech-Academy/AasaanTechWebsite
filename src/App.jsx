import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CourseProvider } from './context/CourseContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Instructors from './pages/Instructors';
import CollegeTraining from './pages/CollegeTraining';
import InstitutionalCollaboration from './pages/InstitutionalCollaboration';
import AskIba from './components/UI/AskIba';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <CourseProvider>
        <Router>
          <div className="App">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:id" element={<CourseDetail />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/instructors" element={<Instructors />} />
                <Route path="/college-training" element={<CollegeTraining />} />
                <Route path="/institutional-collaboration" element={<InstitutionalCollaboration />} />
              </Routes>
            </main>
            <AskIba />
            <Footer />
          </div>
        </Router>
      </CourseProvider>
    </AuthProvider>
  );
}

export default App;

