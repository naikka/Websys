import '../CSS/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pasonglogos from '../assets/pasonglogos.png';
import sibalomlog from '../assets/sibalomlog.png';

export default function Home() {

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-12 p-5 d-flex align-items-center'>
                        <div className='p-5 d-flex justify-content-start'>
                            <img src={pasonglogos} className='img-fluid' alt='Pasong Image' style={{ width: '100px', height: '100px' }} />
                        </div>
                        <div className='text-center flex-grow-1'>
                            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>BARANGAY PASONG</h1>
                            <h2 style={{ fontSize: '2rem' }}>PROFILING SYSTEM</h2>
                        </div>
                        <div className='p-5 d-flex justify-content-start'>
                            <img src={sibalomlog} className='img-fluid' alt='Pasong Image' style={{ width: '100px', height: '100px' }} />
                        </div>
                    </div>

                    <div className='col-12 d-flex justify-content-center'>
                        <div className='col-12 col-md-6 p-5 d-flex align-items-center justify-content-center'>
                            <form className='w-100' style={{ maxWidth: '400px', margin: 'auto' }}>
                                <input className='form-control mb-2' placeholder='Username' style={{ fontSize: '1.2rem' }} />
                                <input className='form-control mb-4' type='password' placeholder='Password' style={{ fontSize: '1.2rem' }} /> {/* Adjusted margin-bottom */}
                                <div className='d-grid gap-2'>
                                    <button className="btn btn-primary mb-3" type="button">Log in</button>
                                    <div className="text-center">
                                        <h5>or</h5>
                                    </div>
                                    <button className="btn btn-light" type="button">Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
