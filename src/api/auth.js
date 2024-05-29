import axios from './axios'

export const LoginRequest = user => axios.post('/login', user);

export const LoginAccess = () => axios.get('/usuario');
 
