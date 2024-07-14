import '../CSS/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pasonglogos from '../assets/pasonglogos.png';

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
                            <h2 style={{ fontSize: '2rem' }}>INFORMATION SYSTEM</h2>
                        </div>
                        <div className='p-5 d-flex justify-content-start'>
                            <img src={pasonglogos} className='img-fluid' alt='Pasong Image' style={{ width: '100px', height: '100px' }} />
                        </div>
                    </div>



                    <div className='col-12 col-md-6 p-5 d-flex align-items-center'>
                        <form className='w-100' style={{ maxWidth: '400px', margin: 'auto' }}>
                            <input className='form-control mb-2' placeholder='Username' style={{ fontSize: '1.2rem' }} />
                            <input className='form-control mb-3' type='password' placeholder='Password' style={{ fontSize: '1.2rem' }} />
                            <div className='text-end' style={{marginTop:'-15px', marginBottom:'15px'}}>
                                <button type="button" className="btn btn-link" onClick={() => window.location.href = '/#'}>Forgot password?</button>
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary" type="button">Log in</button>
                                <div className="mt-3 text-center">
                                    <h5>or</h5>
                                </div>
                                <button className="btn btn-light" type="button">Sign up</button>
                                <button className="btn btn-primary mt-5" type="button" onClick={() => window.location.href = '/#'} style={{ height:'5rem', fontWeight:'bold', fontSize:'20px' }}>Log in as resident</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
