import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 bg-danger p-3'>
                    <ul className='navbar list-unstyled d-flex gap-4 m-0'>
                        <li>
                            <Link to="/" className='text-white text-decoration-none'>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className='text-white text-decoration-none'>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className='text-white text-decoration-none'>Contact</Link>
                        </li>
                        <li>
                            <Link to="/gallery" className='text-white text-decoration-none'>Gallery</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
