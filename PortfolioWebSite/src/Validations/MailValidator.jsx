export const validateEmail = (rule, value, callback) => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      callback('Invalid email address');
    } else {
      callback();
    }
  };

export  const validateName = (rule, value, callback) => {
    if (value && value.length < 3) {
      callback('Name must be at least 3 characters long');
    } else {
      callback();
    }
  };

export   const validateMessage = (rule, value, callback) => {
    if (value && value.length < 10) {
      callback('Message must be at least 10 characters long');
    } else {
      callback();
    }
  };