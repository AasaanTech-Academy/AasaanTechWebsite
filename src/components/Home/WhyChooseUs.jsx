// import AnimatedSection from '../Common/AnimatedSection';
// import Card from '../Common/Card';
// import './WhyChooseUs.css';

// const WhyChooseUs = () => {
//   const features = [
//     {
//       icon: '🎓',
//       title: 'Expert Instructors',
//       description: 'Learn from industry professionals with years of real-world experience'
//     },
//     {
//       icon: '💼',
//       title: 'Career Support',
//       description: 'Get job placement assistance and career guidance from our team'
//     },
//     {
//       icon: '📚',
//       title: 'Comprehensive Curriculum',
//       description: 'Up-to-date courses covering the latest technologies and best practices'
//     },
//     {
//       icon: '🏆',
//       title: 'Certification',
//       description: 'Earn industry-recognized certificates upon course completion'
//     },
//     {
//       icon: '👥',
//       title: 'Community',
//       description: 'Join a vibrant community of learners and professionals'
//     },
//     {
//       icon: '🔄',
//       title: 'Lifetime Access',
//       description: 'Access course materials and updates for a lifetime'
//     }
//   ];

//   return (
//     <section className="why-choose-us section">
//       <div className="container">
//         <AnimatedSection direction="up">
//           <div className="section-header">
//             <h2 className="section-title">
//               Why Choose <span className="text-gradient">AasaanTech</span>?
//             </h2>
//             <p className="section-description">
//               We provide the best learning experience to help you succeed
//             </p>
//           </div>
//         </AnimatedSection>
//         <div className="features-grid">
//           {features.map((feature, index) => (
//             <AnimatedSection key={feature.title} direction="up" delay={index * 0.1}>
//               <Card className="feature-card">
//                 <div className="feature-icon">{feature.icon}</div>
//                 <h3 className="feature-title">{feature.title}</h3>
//                 <p className="feature-description">{feature.description}</p>
//               </Card>
//             </AnimatedSection>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import AnimatedSection from '../Common/AnimatedSection';
import Card from '../Common/Card';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '🎓',
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of real-world experience',
    },
    {
      icon: '💼',
      title: 'Career Support',
      description: 'Get job placement assistance and career guidance from our team',
    },
    {
      icon: '📚',
      title: 'Comprehensive Curriculum',
      description: 'Up-to-date courses covering the latest technologies and best practices',
    },
    {
      icon: '🏆',
      title: 'Certification',
      description: 'Earn industry-recognized certificates upon course completion',
    },
    {
      icon: '👥',
      title: 'Community',
      description: 'Join a vibrant community of learners and professionals',
    },
    {
      icon: '🔄',
      title: 'Lifetime Access',
      description: 'Access course materials and updates for a lifetime',
    },
  ];

  return (
    <section className="why-choose-us section">
      <div className="container">
        {/* Section header */}
        <AnimatedSection direction="up">
          <div className="section-header">
            <h2 className="section-title">
              Why Choose <span className="text-gradient">AasaanTech</span>?
            </h2>
            <p className="section-description">
              We provide the best learning experience to help you succeed
            </p>
          </div>
        </AnimatedSection>

        {/* Features grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.title}
              direction="up"
              delay={index * 0.1}
            >
              <Card className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
