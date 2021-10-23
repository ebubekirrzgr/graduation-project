import { useEffect, useState } from 'react';

const useProductAdd = (submitForm, validate, values) => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = () => {
    setIsSubmitting(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm(values);
    }
  }, [submitForm, errors, isSubmitting, values]);

  return { handleChange, handleSubmit, errors };
};

export default useProductAdd;
