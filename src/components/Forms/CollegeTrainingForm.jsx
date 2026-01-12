// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import Button from '../Common/Button';
// import { validateEmail } from '../../utils/helpers';
// import { getWhatsAppUrl } from '../../utils/config';
// import './CollegeTrainingForm.css';

// const CollegeTrainingForm = ({ onSuccess }) => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset
//   } = useForm();

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);
//     setSubmitStatus(null);
    
//     try {
//       // Mailchimp integration - Replace with your Mailchimp API endpoint
//       const mailchimpData = {
//         email_address: data.email,
//         status: 'subscribed',
//         merge_fields: {
//           FNAME: data.name,
//           LNAME: data.lastName || '',
//           PHONE: data.phone || '',
//           COLLEGE: data.collegeName || '',
//           DEPT: data.department || '',
//           PROG: data.programInterest || '',
//           MSG: data.message || ''
//         }
//       };

//       // For now, simulate API call
//       // In production, replace with actual Mailchimp API call
//       await new Promise((resolve) => setTimeout(resolve, 1500));
      
//       // Also send email notification (you can integrate with email service)
//       const emailBody = `
//         New College Training Inquiry:
        
//         Name: ${data.name} ${data.lastName || ''}
//         Email: ${data.email}
//         Phone: ${data.phone || 'N/A'}
//         College: ${data.collegeName || 'N/A'}
//         Department: ${data.department || 'N/A'}
//         Program Interest: ${data.programInterest || 'N/A'}
//         Expected Participants: ${data.participants || 'N/A'}
//         Preferred Duration: ${data.duration || 'N/A'}
//         Message: ${data.message || 'N/A'}
//       `;

//       // You can integrate with email service here
//       console.log('Email notification:', emailBody);

//       setSubmitStatus({ 
//         type: 'success', 
//         message: 'Thank you! We will contact you soon to discuss your training requirements.' 
//       });
//       reset();
      
//       if (onSuccess) {
//         onSuccess();
//       }
//     } catch (error) {
//       setSubmitStatus({ 
//         type: 'error', 
//         message: 'Something went wrong. Please try again or contact us directly.' 
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form className="college-training-form" onSubmit={handleSubmit(onSubmit)}>
//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="name">First Name *</label>
//           <input
//             id="name"
//             type="text"
//             {...register('name', { required: 'First name is required' })}
//             className={errors.name ? 'error' : ''}
//           />
//           {errors.name && <span className="error-message">{errors.name.message}</span>}
//         </div>

//         <div className="form-group">
//           <label htmlFor="lastName">Last Name</label>
//           <input
//             id="lastName"
//             type="text"
//             {...register('lastName')}
//           />
//         </div>
//       </div>

//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="email">Email *</label>
//           <input
//             id="email"
//             type="email"
//             {...register('email', {
//               required: 'Email is required',
//               validate: (value) => validateEmail(value) || 'Invalid email address'
//             })}
//             className={errors.email ? 'error' : ''}
//           />
//           {errors.email && <span className="error-message">{errors.email.message}</span>}
//         </div>

//         <div className="form-group">
//           <label htmlFor="phone">Phone *</label>
//           <input
//             id="phone"
//             type="tel"
//             {...register('phone', { required: 'Phone number is required' })}
//             className={errors.phone ? 'error' : ''}
//           />
//           {errors.phone && <span className="error-message">{errors.phone.message}</span>}
//         </div>
//       </div>

//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="collegeName">College/Institution Name *</label>
//           <input
//             id="collegeName"
//             type="text"
//             {...register('collegeName', { required: 'College name is required' })}
//             className={errors.collegeName ? 'error' : ''}
//           />
//           {errors.collegeName && <span className="error-message">{errors.collegeName.message}</span>}
//         </div>

//         <div className="form-group">
//           <label htmlFor="department">Department *</label>
//           <input
//             id="department"
//             type="text"
//             {...register('department', { required: 'Department is required' })}
//             placeholder="e.g., Computer Science, IT"
//             className={errors.department ? 'error' : ''}
//           />
//           {errors.department && <span className="error-message">{errors.department.message}</span>}
//         </div>
//       </div>

//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="programInterest">Program of Interest *</label>
//           <select
//             id="programInterest"
//             {...register('programInterest', { required: 'Please select a program' })}
//             className={errors.programInterest ? 'error' : ''}
//           >
//             <option value="">Select a program</option>
//             <option value="Web Development Bootcamp">Web Development Bootcamp</option>
//             <option value="Data Science Workshop">Data Science Workshop</option>
//             <option value="Soft Skills & Communication">Soft Skills & Communication</option>
//             <option value="Java Full Stack Training">Java Full Stack Training</option>
//             <option value="Aptitude & Reasoning">Aptitude & Reasoning</option>
//             <option value="Cloud Computing Fundamentals">Cloud Computing Fundamentals</option>
//             <option value="Custom Program">Custom Program</option>
//           </select>
//           {errors.programInterest && <span className="error-message">{errors.programInterest.message}</span>}
//         </div>

//         <div className="form-group">
//           <label htmlFor="duration">Preferred Duration</label>
//           <select
//             id="duration"
//             {...register('duration')}
//           >
//             <option value="">Select duration</option>
//             <option value="1-day Bootcamp">1-day Bootcamp</option>
//             <option value="2-week Intensive">2-week Intensive</option>
//             <option value="3-day Workshop">3-day Workshop</option>
//             <option value="1-week Workshop">1-week Workshop</option>
//             <option value="Custom Duration">Custom Duration</option>
//           </select>
//         </div>
//       </div>

//       <div className="form-group">
//         <label htmlFor="participants">Expected Number of Participants</label>
//         <input
//           id="participants"
//           type="number"
//           min="1"
//           {...register('participants')}
//           placeholder="e.g., 50"
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="message">Additional Requirements or Questions</label>
//         <textarea
//           id="message"
//           rows="5"
//           {...register('message')}
//           placeholder="Tell us about your specific training needs, preferred dates, or any questions..."
//         />
//       </div>

//       {submitStatus && (
//         <div className={`submit-status ${submitStatus.type}`}>
//           {submitStatus.message}
//         </div>
//       )}

//       <div className="form-actions">
//         <Button
//           type="submit"
//           variant="primary"
//           size="lg"
//           loading={isSubmitting}
//           className="submit-button"
//         >
//           Request Training
//         </Button>
//         <a
//           href={getWhatsAppUrl('Hello! I am interested in requesting a training program for my college.')}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="whatsapp-button"
//         >
//           <span>💬</span> Contact via WhatsApp
//         </a>
//       </div>
//     </form>
//   );
// };

// export default CollegeTrainingForm;

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Common/Button';
import { validateEmail, validatePhone } from '../../utils/helpers'; // 🔹 ADDED validatePhone
import { getWhatsAppUrl } from '../../utils/config';
import './CollegeTrainingForm.css';

const CollegeTrainingForm = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Mailchimp integration - Replace with your Mailchimp API endpoint
      const mailchimpData = {
        email_address: data.email,
        status: 'subscribed',
        merge_fields: {
          FNAME: data.name,
          LNAME: data.lastName || '',
          PHONE: data.phone || '',
          COLLEGE: data.collegeName || '',
          DEPT: data.department || '',
          PROG: data.programInterest || '',
          MSG: data.message || ''
        }
      };

      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Email notification (console only)
      const emailBody = `
        New College Training Inquiry:

        Name: ${data.name} ${data.lastName || ''}
        Email: ${data.email}
        Phone: ${data.phone || 'N/A'}
        College: ${data.collegeName || 'N/A'}
        Department: ${data.department || 'N/A'}
        Program Interest: ${data.programInterest || 'N/A'}
        Expected Participants: ${data.participants || 'N/A'}
        Preferred Duration: ${data.duration || 'N/A'}
        Message: ${data.message || 'N/A'}
      `;

      console.log('Email notification:', emailBody);

      setSubmitStatus({
        type: 'success',
        message:
          'Thank you! We will contact you soon to discuss your training requirements.'
      });

      reset();

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="college-training-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">First Name *</label>
          <input
            id="name"
            type="text"
            {...register('name', {
              required: 'First name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters'
              },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: 'Name should contain only letters'
              }
            })}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && (
            <span className="error-message">{errors.name.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            {...register('lastName')}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              validate: (value) =>
                validateEmail(value) || 'Invalid email address'
            })}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone *</label>
          <input
            id="phone"
            type="tel"
            {...register('phone', {
              required: 'Phone number is required',
              validate: (value) =>
                validatePhone(value) || 'Enter a valid phone number'
            })}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && (
            <span className="error-message">{errors.phone.message}</span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="collegeName">College/Institution Name *</label>
          <input
            id="collegeName"
            type="text"
            {...register('collegeName', {
              required: 'College name is required'
            })}
            className={errors.collegeName ? 'error' : ''}
          />
          {errors.collegeName && (
            <span className="error-message">
              {errors.collegeName.message}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="department">Department *</label>
          <input
            id="department"
            type="text"
            {...register('department', {
              required: 'Department is required'
            })}
            placeholder="e.g., Computer Science, IT"
            className={errors.department ? 'error' : ''}
          />
          {errors.department && (
            <span className="error-message">
              {errors.department.message}
            </span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="programInterest">Program of Interest *</label>
          <select
            id="programInterest"
            {...register('programInterest', {
              required: 'Please select a program'
            })}
            className={errors.programInterest ? 'error' : ''}
          >
            <option value="">Select a program</option>
            <option value="Web Development Bootcamp">Web Development Bootcamp</option>
            <option value="Data Science Workshop">Data Science Workshop</option>
            <option value="Soft Skills & Communication">Soft Skills & Communication</option>
            <option value="Java Full Stack Training">Java Full Stack Training</option>
            <option value="Aptitude & Reasoning">Aptitude & Reasoning</option>
            <option value="Cloud Computing Fundamentals">Cloud Computing Fundamentals</option>
            <option value="Custom Program">Custom Program</option>
          </select>
          {errors.programInterest && (
            <span className="error-message">
              {errors.programInterest.message}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="duration">Preferred Duration</label>
          <select
            id="duration"
            {...register('duration')}
          >
            <option value="">Select duration</option>
            <option value="1-day Bootcamp">1-day Bootcamp</option>
            <option value="2-week Intensive">2-week Intensive</option>
            <option value="3-day Workshop">3-day Workshop</option>
            <option value="1-week Workshop">1-week Workshop</option>
            <option value="Custom Duration">Custom Duration</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="participants">Expected Number of Participants</label>
        <input
          id="participants"
          type="number"
          min="1"
          {...register('participants', {
            min: {
              value: 1,
              message: 'Participants must be at least 1'
            }
          })}
          placeholder="e.g., 50"
        />
        {errors.participants && (
          <span className="error-message">
            {errors.participants.message}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message">Additional Requirements or Questions</label>
        <textarea
          id="message"
          rows="5"
          {...register('message', {
            minLength: {
              value: 10,
              message: 'Message should be at least 10 characters'
            }
          })}
          placeholder="Tell us about your specific training needs, preferred dates, or any questions..."
        />
        {errors.message && (
          <span className="error-message">
            {errors.message.message}
          </span>
        )}
      </div>

      {submitStatus && (
        <div className={`submit-status ${submitStatus.type}`}>
          {submitStatus.message}
        </div>
      )}

      <div className="form-actions">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting}
          className="submit-button"
        >
          Request Training
        </Button>

        <a
          href={getWhatsAppUrl(
            'Hello! I am interested in requesting a training program for my college.'
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <span>💬</span> Contact via WhatsApp
        </a>
      </div>
    </form>
  );
};

export default CollegeTrainingForm;
