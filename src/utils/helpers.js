// export const formatPrice = (price) => {
//   return new Intl.NumberFormat('en-IN', {
//     style: 'currency',
//     currency: 'INR',
//     maximumFractionDigits: 0
//   }).format(price);
// };

// export const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   return new Intl.DateTimeFormat('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   }).format(date);
// };

// export const truncateText = (text, maxLength) => {
//   if (text.length <= maxLength) return text;
//   return text.slice(0, maxLength) + '...';
// };

// export const scrollToTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// };

// export const debounce = (func, wait) => {
//   let timeout;
//   return function executedFunction(...args) {
//     const later = () => {
//       clearTimeout(timeout);
//       func(...args);
//     };
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   };
// };

// export const validateEmail = (email) => {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// };

// export const validatePhone = (phone) => {
//   const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
//   return re.test(phone);
// };

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return re.test(phone);
};
