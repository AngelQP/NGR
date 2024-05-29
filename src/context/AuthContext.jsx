import Cookies from 'js-cookie';
import {createContext, useState, useContext, useEffect} from 'react';
import { LoginAccess } from '../api/auth';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if(!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context;
}

export const AuthProvider = ( {children} ) => {

  const [user,setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Para logearse consulta con el API
  const signin = async(user) => {
    try {
      console.log(user);
      const res = await LoginAccess();
      console.log(res);
      let flagAuth = false;
      res.data.map(data => {
        if(data.NombreUsuario === user.email && data.Password === user.password ){
          flagAuth = true;
          setUser(data);
        }
      })
      console.log(flagAuth);
      setIsAuthenticated(flagAuth);
    } catch (error) {
      // console.log(error.response.data)
      setErrors(error.response.data)
    }
  }

  const logout = () => {
    Cookies.remove('token');
    console.log("Hola");
    setIsAuthenticated(false);
    setUser(null);
    /* Por se acaso se dejara comentado */
    // <Navigate to="/login" replace />

  }

  useEffect(() => {

    if(errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }

  }, [errors]);

  useEffect(() => {

    async function checkLogin() {
      const cookies = Cookies.get();
  
      if(!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      } else {
        setIsAuthenticated(true);
        setLoading(false);
      }

      // try {
      //   const res = await verifyTokenRequest(cookies.token);
      //   console.log(res)
      //   if(!res.data) {
      //     setIsAuthenticated(false);
      //     setLoading(false)
      //     return; 
      //   }
      //   setIsAuthenticated(true);
      //   setUser(res.data);
      //   setLoading(false);
      // } catch (error) {
      //   setIsAuthenticated(false);
      //   setUser(null);
      //   setLoading(false);
      // }
  
    }

    checkLogin();
  }, [])

  return (
    <AuthContext.Provider 
      value={{
        signin,
        logout,
        user,
        isAuthenticated,
        errors
      }}
    >
      {children}
      
    </AuthContext.Provider>
  )
}