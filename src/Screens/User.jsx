import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function User() {
  const [data, setData] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const num = parseInt(data);

    if (isNaN(num)) {
      setMessage('Please enter a valid number');
      return;
    }

    if (num % 2 === 0) {
      setMessage("The number is Even");
    } else {
      setMessage("The number is Odd");
    }
    setData('');                   
  };

  return (
    <div style={{ padding: 20,}}>
      <input
        type="number"
        placeholder="Enter a number"
        className="form-control mb-3"
        style={{ width: "20%" }}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <button className="btn btn-warning mb-3" onClick={handleSubmit}>
        Submit
      </button>

      {message && <h4>{message}</h4>}
    </div>
  );
}

export default User;
