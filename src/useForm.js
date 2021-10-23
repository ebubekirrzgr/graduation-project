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
    setIsSubmitting(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setIsSubmitting(false);
      submitForm(values);
    }
  }, [submitForm, errors, isSubmitting, values]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
