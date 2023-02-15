import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

//change directory once those files are made ^ 
import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
      username: '',
      email: '',
      password: '',
    });
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      // submit form
      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };
    
      return (
       
        //palce html code in here


      );
    };


    export default Signup;