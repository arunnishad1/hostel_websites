import React from 'react'
import Logo from '../assets/logo.png'
import { useState } from 'react'
import { toast, Bounce } from 'react-toastify';
import ButtonComponents from './ButtonComponents';

const Signup = () => {
    const[error, setError] = useState("")
    const [data, setData] = useState({
        "email":"",
        "password":"",
        "cpassword":"",
    })
    
    const eventHandler = (e)=>{
        const{name, value} = e.target;
        setData({
            ...data,
            [name]:value
        })
    }
    
    const submit = async(e)=>{
        e.preventDefault()
        try {
            const val = await fetch("http://localhost:5500/user/signup",{
                method:"POST",
                body:JSON.stringify(data),
                headers:{
                    'Content-Type':'application/json'
                },
                credentials: 'include',
            })
        
            const res = await val.json()
            console.log(res)
            if(res.matchError){
                toast.error(`password do not matched`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    });
            }
            else if(res.passwordConditionError){
                setError("Enter the password which contain one uppercase, one lowercase, one number(0-9) and one special character")
            }else{
                toast.success(`Registration successful`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    });
                setData({
                "email":"",
                "password":"",
                "cpassword":"",
                })
                setError("")
            }
            
        } catch (error) {
            toast.error(`Something went wrong`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
        }
    }

  return (
    <>
        <section class="bg-gradient-to-br from-emerald-50 to-pink-50">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
      <div className="flex items-center space-x-4">
                        <img className="w-20 h-20 rounded-full" src={Logo} alt="logo" />
                        <span className="text-2xl font-semibold">HostelDays</span>
              </div>
      </a>
      <div class="w-full bg-transparent shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition duration-300 rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={submit}>
              <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" onChange={eventHandler} value={data.email} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" onChange={eventHandler} value={data.password} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>

                  <div>
                      <label for="cpassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="password" onChange={eventHandler} value={data.cpassword} name="cpassword" id="cpassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>

                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                    <ButtonComponents text = "Sign up"/>    
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default Signup