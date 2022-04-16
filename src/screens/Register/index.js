import React, {useState, useContext} from 'react';
import RegisterComponent from '../../components/SignUp';
import register from '../../context/actions/auth/register';
import axiosInstance from '../../helpers/axiosInterceptors';
import {GlobalContext} from '../../context/Provider';
const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  // React.useEffect(() => {
  //   axiosInstance.get('/contacts').catch(err => console.log(err));
  // }, []);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {
              ...prev,
              [name]: 'This fields needs min 6 characters',
            };
          });
        } else {
          setErrors(prev => {
            return {
              ...prev,
              [name]: null,
            };
          });
        }
      } else {
        setErrors(prev => {
          return {
            ...prev,
            [name]: null,
          };
        });
      }
    } else {
      setErrors(prev => {
        return {
          ...prev,
          [name]: 'This field is required',
        };
      });
    }
  };

  const onSubmit = () => {
    //validation
    if (!form.userName) {
      setErrors(prev => {
        return {
          ...prev,
          userName: 'Please fill UserName.',
        };
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {
          ...prev,
          firstName: 'Please fill firstName.',
        };
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {
          ...prev,
          lastName: 'Please fill lastName.',
        };
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {
          ...prev,
          email: 'Please fill email.',
        };
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {
          ...prev,
          password: 'Please fill password.',
        };
      });
    }
    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch);
    }
  };

  return (
    <RegisterComponent
      form={form}
      errors={errors}
      onSubmit={onSubmit}
      onChange={onChange}
      error={error}
      loading={loading}
    />
  );
};

export default Register;
