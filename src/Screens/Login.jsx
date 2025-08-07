import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // <- import Swal

function App() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();

    const validEmail = "dnyaneshwarargade@gmail.com";
    const validPass = "pass123";

    if (email !== validEmail) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please Enter a Valid Email Address....!!',
      });
      return;
    }

    if (pass !== validPass) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Password',
        text: 'Please Enter the Correct Password....!!',
      });
      return;
    }

    // Success popup
    Swal.fire({
      icon: 'success',
      title: 'Login Successful....!!',
      text: `Welcome, ${email}!`,
      showConfirmButton: false,
      timer: 1500,
    });

    // Navigate to home after delay
    setTimeout(() => {
      navigate('/Home');
    }, 1600);
  };

  const handlesign = () => {
    Swal.fire({
      title: 'Redirecting...',
      text: 'Taking you to the Sign-Up page!',
      icon: 'info',
      showConfirmButton: false,
      timer: 1200,
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="text-center mb-4">Login Form</h3>

              <form>
                <div className="mb-3">
                  <label className="form-label">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password..."
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>

                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    onClick={handlesign}
                    className="btn btn-primary mt-2"
                  >
                    Sign Up
                  </button>
                     <button
                    type="submit"
                    onClick={handlelogin}
                    className="btn btn-warning mt-2"
                  >
                    Login
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
