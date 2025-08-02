import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FetchAPI() {
  const [get, setget] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(get => setget(get))
      .catch(errorrr => console.log("API error", errorrr));
  }, []);

  return (
    <div className="container mt-4">
      <h3>This API Page</h3>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {get.map(data => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.userId}</td>
              <td>{data.title}</td>
              <td>{data.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchAPI;
