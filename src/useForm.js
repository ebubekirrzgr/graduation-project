import { useEffect, useState } from 'react';

const useForm = (submitForm, validate) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && !isSubmitting) {
      submitForm();
    }
  }, [submitForm, errors, isSubmitting]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
