import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions/index';

const useForm = (callback, validate, isSignup) => {

  const [mountValue, setmountValue] = useState(false)
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [mountSubmit, setmountSubmit] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  useEffect(() => { setmountValue(true) }, [])

  useEffect(() => {
    if(mountValue){
      setErrors(validate(values));
    }
  },[values])

  useEffect(() => {
    if(isSubmitting){
    }
  },[isSubmitting])

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    
    if (event) event.preventDefault();
    // console.log(values.username,values.email,values.password,isSignup)
    // setErrors(validate(values));
    setIsSubmitting(true);

    dispatch(actions.auth(values.username,values.email,values.password,isSignup))
    
    // setValues('')
  };

  
  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }))
    
    
    
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;