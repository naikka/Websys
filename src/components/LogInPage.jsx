import '../CSS/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pasonglogos from '../assets/pasonglogos.png';
import sibalomlog from '../assets/sibalomlog.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';

export default function LogInPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3002/login", {
      username: username,
      password: password
    })
    .then((response) => {
      if (response.data.message === "Login successful") {
        navigate('/Home');
      } else {
        setLoginError(response.data.message);
      }
    })
    .catch((error) => {
      setLoginError("Error logging in. Please try again.");
    });
  };

  return (
    <>
      <div className='container' style={{ height: '100vh', width:'100%' }}>
        <div className='row h-100'>
          <div className='col-sm-12 col-md-12 col-lg-12 p-5 d-flex align-items-center'>
            <div className='p-5 d-flex justify-content-start'>
              <img src={pasonglogos} className='img-fluid' alt='Pasong Image' style={{ width: '100px', height: '100px' }} />
            </div>
            <div className='text-center flex-grow-1'>
              <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color:'black' }}>BARANGAY PASONG</h1>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color:'#1a237e'}}>INFORMATION SYSTEM</h2>
            </div>
            <div className='p-5 d-flex justify-content-start'>
              <img src={sibalomlog} className='img-fluid' alt='Pasong Image' style={{ width: '100px', height: '100px' }} />
            </div>
          </div>

          <div className='col-12 d-flex justify-content-center'>
            <div className='col-12 col-md-6 p-5 d-flex align-items-center justify-content-center'>
              <form className='w-100' style={{ maxWidth: '400px', margin: 'auto', border: '1px solid #ccc', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <h3 className='text-center mb-4' style={{ fontSize: '1.5rem', fontStyle: 'normal', marginTop: '1em' }}>Welcome Back!</h3>

                <input onChange={(e) => setUsername(e.target.value)} className='form-control mb-2' placeholder='Username' style={{ fontSize: '1.2rem' }} />
                <input onChange={(e) => setPassword(e.target.value)} className='form-control mb-4' type='password' placeholder='Password' style={{ fontSize: '1.2rem' }} />

                {loginError && (
                  <div className='alert alert-danger' role='alert'>
                    {loginError}
                  </div>
                )}

                <div className='d-grid gap-2'>
                  <button onClick={login} className="btn btn-secondary mb-3" type="button" style={{ backgroundColor:'#4db6ac' }}>Log In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}