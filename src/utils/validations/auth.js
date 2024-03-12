import * as Yup from 'yup';

const phoneRegExp = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export const registerSchema = Yup.object().shape({
  ID: Yup.string().required('Please enter your id'),
  firstName: Yup.string()
    .min(2, 'First name must be at least 2 characters')
    .max(25, 'First Name must be at most 25 characters')
    .required('Please enter your first name'),
  lastName: Yup.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(25, 'Last Name must be at most 25 characters')
    .required('Please enter your last name'),
  email: Yup.string().email().required('Please enter your email'),
  phone: Yup.string()
    .min(7, 'Phone number must be at least 7 characters')
    .required('Please enter your Phone')
    .matches(phoneRegExp, 'Phone number is not valid'),
  password: Yup.string().min(6).required('Please enter your password'),
  confirmPassword: Yup.string()
    .required('Please Re-enter your password')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});

export const loginSchema = Yup.object().shape({
  username: Yup.string().email('Invalid email').required('Email is required.'),
  password: Yup.string().min(6).max(64).required('Password is required.'),
});
export const changePasswordSchema = Yup.object().shape({
  // oldPassword: Yup.string().min(6).required('Please enter your old password'),
  oldPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Please enter your old password'),
  // newPassword: Yup.string().min(6).required('Please enter your new password'),
  newPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Please enter your new password'),
  confirmPassword: Yup.string()
    .required('Please Re-enter your password')
    .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
});
