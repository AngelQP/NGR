import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"


import background from '../images/background-1.jpg'
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";


export  function Login() {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const {signin, errors: SigninErrors, isAuthenticated} = useAuth();
  const navigate = useNavigate();


  const onSubmit = handleSubmit((data) => {
    signin(data)
  })

  useEffect(() => {
    if(isAuthenticated){
      navigate('/home');
    }
  }, [isAuthenticated])

  return (
    <>
     <section className="bg-gray-50 min-h-screen flex items-center justify-center">

        {/* Login container */}
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 min-h-96">
    
          {/* form */}
          <div className="sm:w-1/2 px-16 sm:mt-5 my-5 flex flex-col justify-center">

            {/* Errores */}

              {
                SigninErrors.map((error,i) => (
                  <div key={i} className="bg-red-500 p-2 text-white my-2">
                    {error}
                  </div>
                ))
              }

            <h2 className='font-bold text-2xl text-primary-magenta'>Login</h2>
            <p className='text-sm mt-4 text-primary-magenta'>Accede a la aplicación con tu cuenta</p>
            
            <form onSubmit={onSubmit} className='flex flex-col gap-4'>

              <input
                {...register('email', {required: true})}
                className='p-2 mt-8 rounded-xl border' type="text" name='email' placeholder='User'
              />
              {
                errors.email && <p className="text-red-500">User is required</p>
              }   

              <div className='relative '>

                <input 
                  {...register('password', {required: true})}
                  className='p-2 rounded-xl border w-full' type="password" name='password' placeholder='Password' 
                />

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer" viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                </svg>
              </div>
              {
                errors.password && <p className="text-red-500">Password is required</p>
              }

              <button className='mt-5 bg-primary-magenta rounded-xl text-white py-2 hover:scale-110 duration-300'>Login</button>
            </form>

          </div>
    
          {/* image */}
          <div className="sm:block hidden w-1/2">

            {/* <div className="text-center font-bold text-primary-magenta">
              <p className="text-xl">Infraestructura y mantenimiento</p>
              <p className="text-xl">Ventilación Mecánica</p>
            </div> */}

            {/* <div className="self-end"> */}
              <img className='rounded-2xl' src={background} alt="" />
            {/* </div> */}

          </div>

        </div>
      </section>
    </>
  )
}