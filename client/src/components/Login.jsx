import React,{useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit =(e)=>{
        e.preventDefault()
        if (email.trim() === '' || password.trim() === '' ) {
            toast.warn('please fill all the fields', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
            return;
          }
          else{
        axios.post('http://localhost:8000/login',{email,password})
        .then((result)=>{
            console.log(result)
            if(result.data === 'Success'){
            navigate('/home')
            }
            else{
                toast.warn('check the email or password', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                  return;
            }
        })
        .catch((er)=>console.log(er));
    }
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 '>
        <div className='bg-white p-5 rounded w-10'>
            <h2>Login</h2>
            <form id="Loginform" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Email</strong>
                    </label><br />
                    <input type='email' autoComplete='off' name='email' placeholder='Enter your email ' className='form-controlled rounded-0' onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Password</strong>
                    </label><br />
                    <input type='password' autoComplete='off' name='password' placeholder='Enter your password' className='form-controlled rounded-0' onChange={(e)=> setPassword(e.target.value)} />
                </div>
                <div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>
                    Login
                </button>
                <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
                </div>
                </form>
                <p>Didn't registered yet!</p>
                <Link to="/register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none '>Register</Link>
        </div>
    </div>
  )
}

export default Login