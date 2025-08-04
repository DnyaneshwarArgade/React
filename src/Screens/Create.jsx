import { error } from 'jquery';
import React, { useEffect, useState } from 'react'

function Create() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("api error"), error)
  }, [])

  return (
    <div>

      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Create
