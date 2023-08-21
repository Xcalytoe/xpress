import * as yup from 'yup';

export const registerSchema1 = yup
  .object()
  .shape({
    bizName: yup.string().required('Field required'),
    bizCategory: yup.string().required('Field required'),
    bizEmail: yup
      .string()
      .email('Must be a valid email')
      .required('Please enter your email'),
    bizPhone: yup
      .string()
      .required('Phone is required')
      .test('phone', 'Invalid phone number', (value) => {
        const phoneLength = String(value)?.length;
        if (phoneLength === 11) {
          return true;
        } else {
          return false;
        }
      }),
    account: yup
      .string()
      .required('Account is required')
      .test('phone', 'Invalid account number', (value) => {
        const acctLength = value?.length;
        if (acctLength === 10) {
          return true;
        } else {
          return false;
        }
      }),
    logo: yup
      .mixed()
      .test('structure', 'Please upload your logo', (file) => !!file),
    // .test(
    //   'fileSize',
    //   'File size is too large, max file size is 2 Mb',
    //   (file) => file?.size <= 2000000
    // ),
  })
  .required();

export const registerSchema2 = yup
  .object()
  .shape({
    password: yup
      .string()
      .matches(/^(?=.*[a-z])/, 'Must contain one lowercase')
      .matches(/^(?=.*[A-Z])/, 'Must contain one uppercase')
      .matches(/^(?=.*[0-9])/, 'Must contain one number')
      .matches(/[\W_]/, 'Must contain at least one special character')
      .min(8, 'Password must be at least 8 characters')
      .required('Field required'),
    confirmPassword: yup
      .string()
      .required('Field is required')
      .oneOf([yup.ref('password')], 'Passwords must match'),
    houseNo: yup.string().required('Required'),
    street: yup.string().required('Field required'),
    city: yup.string().required('Field required'),
    state: yup.string().required('Field required'),
    name: yup.string().required('Field required'),
    email: yup
      .string()
      .email('Must be a valid email')
      .required('Please enter your email'),
    phone: yup
      .string()
      .required('Phone is required')
      .test('phone', 'Invalid phone number', (value) => {
        const phoneLength = value?.length;
        if (phoneLength === 11) {
          return true;
        } else {
          return false;
        }
      }),
  })
  .required();

export const loginSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Must be a valid email')
      .required('Please enter your email'),
    password: yup.string().required('Field required'),
  })
  .required();
