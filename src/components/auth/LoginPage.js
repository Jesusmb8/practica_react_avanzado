import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authLogin } from '../../store/actions';
import Layout from '../layout/Layout';
import './LoginPage.css';
import { login } from './service';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    remind: false,
  });

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  const onLogin = () => dispatch(authLogin());

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(credentials);
    onLogin();
    navigate('/adverts');
  };

  const buttonDisabled = !credentials.email || !credentials.password;

  return (
    <Layout>
      <div className=''>
        <h1>Login in to Nodepop</h1>
        <form onSubmit={handleSubmit} className='login'>
          <div className='element-form'>
            <label for='email'>Email</label>
            <input id='email' name='email' type='text' required onChange={handleChange} value={credentials.username} />
          </div>
          <div className='element-form'>
            <label for='password'>Password</label>
            <input
              id='password'
              name='password'
              type='password'
              require
              onChange={handleChange}
              value={credentials.password}
            />
          </div>
          <div className='margin10 '>
            <label for='remind'>Recordarme</label>
            <input id='remind' name='remind' type='checkbox' onChange={handleChange} value={credentials.remind} />
          </div>
          <div className='element-form'>
            <button type='submit' disabled={buttonDisabled}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default LoginPage;
