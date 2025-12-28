import { testimonials } from '../../data/testimonials';
import Carousel from '../UI/Carousel';
import Card from '../Common/Card';
import AnimatedSection from '../Common/AnimatedSection';
import './TestimonialsPreview.css';

const TestimonialsPreview = () => {
  const testimonialItems = testimonials.slice(0, 3).map((testimonial) => (
    <Card key={testimonial.id} className="testimonial-card">
      <div className="testimonial-content">
        <div className="testimonial-rating">
          {'⭐'.repeat(testimonial.rating)}
        </div>
        <p className="testimonial-text">"{testimonial.text}"</p>
        <div className="testimonial-author">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="testimonial-avatar"
          />
          <div className="testimonial-info">
            <div className="testimonial-name">{testimonial.name}</div>
            <div className="testimonial-role">
              {testimonial.role} at {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </Card>
  ));

  return (
    <section className="testimonials-preview section">
      <div className="container">
        <AnimatedSection direction="up">
          <div className="section-header">
            <h2 className="section-title">
              What Our <span className="text-gradient">Students</span> Say
            </h2>
            <p className="section-description">
              Hear from our successful graduates
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.2}>
          <Carousel items={testimonialItems} />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsPreview;

