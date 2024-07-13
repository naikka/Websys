import '../CSS/main.css';
import pasonglogos from '../assets/pasonglogos.png';

export default function Home() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-12 p-5 text-center'>
                        <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>BARANGAY PASONG</h1>
                        <h2 style={{ fontSize: '3rem' }}>INFORMATION SYSTEM</h2>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-sm-12 col-md-6 col-lg-6 p-5'>
                        <img src={pasonglogos} className='img-fluid' alt='Pasong Image' />
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6 p-5 d-flex align-items-center'>
                        <form style={{ maxWidth: '400px', margin: 'auto' }}>
                            <input className='form-control mb-2' placeholder='Username' style={{ fontSize: '1.2rem' }} />
                            <input className='form-control mb-3' type='password' placeholder='Password' style={{ fontSize: '1.2rem' }} />

                            <div className='text-end' style={{marginTop:'-15px', marginBottom:'15px'}}>
                                <button type="button" className="btn btn-link" onClick={() => window.location.href = '/#'}>Forgot password?</button>
                            </div>

                            <div className="d-grid" style={{width:'20rem'}}>
                                <button className="btn btn-primary" type="button">Log in</button>
                                <div className="mt-3">
                                    <center><h5>or</h5></center>
                                </div>
                                <button className="btn btn-light" type="button">Sign up</button>

                                <button className="btn btn-primary mt-5" type="button" onClick={() => window.location.href = '/#'} style={{marginTop:'2rem', height:'5rem', fontWeight:'bold', fontSize:'20px'}}>Log in as resident</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
