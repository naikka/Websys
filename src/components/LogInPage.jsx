import '../CSS/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pasonglogos from '../assets/pasonglogos.png';
import sibalomlog from '../assets/sibalomlog.png';
import { useNavigate } from 'react-router-dom';

export default function LogInPage() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/Home'); // Redirect to Home for both personnel and admin
    };

    return (
        <>
            <div className='container' style={{ height: '100vh' }}>
                <div className='row h-100'>
                    <div className='col-sm-12 col-md-12 col-lg-12 p-5 d-flex align-items-center'>
                        <div className='p-5 d-flex justify-content-start'>
                            <img src={pasonglogos} className='img-fluid' alt='Pasong Image' style={{ width: '100px', height: '100px' }} />
                        </div>
                        <div className='text-center flex-grow-1'>
                            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color:'black' }}>BARANGAY PASONG</h1>
                            <h2 style={{ fontSize: '2rem',fontWeight: 'bold', color:'#1a237e'}}>INFORMATION SYSTEM</h2>
                        </div>
                        <div className='p-5 d-flex justify-content-start'>
                            <img src={sibalomlog} className='img-fluid' alt='Pasong Image' style={{ width: '100px', height: '100px' }} />
                        </div>
                    </div>

                    <div className='col-12 d-flex justify-content-center'>
                        <div className='col-12 col-md-6 p-5 d-flex align-items-center justify-content-center'>
                            <form className='w-100' style={{ maxWidth: '400px', margin: 'auto', border: '1px solid #ccc', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                                <h3 className='text-center mb-4' style={{fontSize:'2rem', fontStyle:'normal'}}>Welcome Back!</h3>
                                <input className='form-control mb-2' value={username} placeholder='Username' style={{ fontSize: '1.2rem'}} />
                                <input className='form-control mb-4' value={password} type='password' placeholder='Password' style={{ fontSize: '1.2rem'}} />
                                <div className='d-grid gap-2'>
                                    <button className="btn btn-secondary mb-3" type="button" onClick={handleLoginClick} style={{ backgroundColor:'#1565c0' }}>Log In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
