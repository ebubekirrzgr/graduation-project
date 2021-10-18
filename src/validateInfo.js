export default function validateInfo(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length > 20 || values.password.length < 8) {
    errors.password = 'Your password must be between 8-20 characters';
  }

  return errors;
}
