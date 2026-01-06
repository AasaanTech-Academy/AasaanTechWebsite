// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Button from '../Common/Button';
// import './Hero.css';

// const Hero = () => {
//   return (
//     <section className="hero">
//       {/* Background */}
//       <div className="hero-background">
//         <div className="hero-gradient"></div>

//         <div className="hero-particles">
//           {[...Array(40)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="particle"
//               style={{
//                 left: `${(i % 10) * 10}%`,
//                 top: `${Math.floor(i / 10) * 10}%`
//               }}
//               animate={{
//                 y: [0, -80, 0],
//                 opacity: [0.3, 0.6, 0.3]
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 delay: i * 0.2
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="hero-content">
//         {/* TEXT */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="hero-text"
//         >
//           <h1 className="hero-title">
//             <span className="hero-title-white">Empowering Tomorrow’s </span>
//             <span className="hero-title-green">Techies</span>
//           </h1>

//           <p className="hero-description">
//             Learn industry-ready skills from experts. Build real-world projects
//             and launch a successful tech career with confidence.
//           </p>

//           <div className="hero-buttons">
//             <Link to="/courses">
//               <Button size="md" variant="primary">
//                 Explore Courses
//               </Button>
//             </Link>
//             <Link to="/about">
//               <Button size="md" variant="outline">
//                 Learn More
//               </Button>
//             </Link>
//           </div>
//         </motion.div>

//         {/* IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="hero-image"
//         >
//           <div className="hero-image-wrapper">
//             <img src="/images/herosection.jpg" alt="AasaanTech Academy" />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../Common/Button';
import { useMemo } from 'react';
import './Hero.css';

// Component to display heading with white + random color
const HeroTitle = ({ whiteText, colorText }) => {
  const colors = ['#48e180', '#18438e']; // green & blue

  const randomColor = useMemo(() => {
    return colors[Math.floor(Math.random() * colors.length)];
  }, [colorText]);

  return (
    <h1 className="hero-title">
      <span style={{ color: '#ffffff', marginRight: '4px' }}>{whiteText}</span>
      <span style={{ color: randomColor }}>{colorText}</span>
    </h1>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      {/* Background */}
      <div className="hero-background">
        <div className="hero-gradient"></div>

        <div className="hero-particles">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${(i % 10) * 10}%`,
                top: `${Math.floor(i / 10) * 10}%`,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="hero-content">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-text"
        >
          <HeroTitle whiteText="Empowering Tomorrow’s" colorText="Techies" />

          <p className="hero-description">
            Learn industry-ready skills from experts. Build real-world projects
            and launch a successful tech career with confidence.
          </p>

          <div className="hero-buttons">
            <Link to="/courses">
              <Button size="md" variant="primary">
                Explore Courses
              </Button>
            </Link>
            <Link to="/about">
              <Button size="md" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-image"
        >
          <div className="hero-image-wrapper">
            <img src="/images/herosection.jpg" alt="AasaanTech Academy" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
