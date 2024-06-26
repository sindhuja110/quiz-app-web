import * as Yup from "yup";

export const ContactUsSchema = Yup.object().shape({
  name: Yup.string()
    .max(25, 'Name must be 25 characters or less')
    .required('Name is required...!'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required...!'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required...!'),
  message: Yup.string()
    .max(500, 'Message must be 500 characters or less')
    .required('Message is required...!'),
});
