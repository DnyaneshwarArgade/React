import React, { useState } from 'react'

function Create() {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handlesubmit = async (e) =>{
    e.preventDefault();

    const data = {
      title,
      body,
    }

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', 
      {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
      }
    )
     const result = await response.json();
     console.log(result);
     alert("Post Created.....!!");

     setTitle('');
     setBody('');
    } catch (error) {
      console.error(error);
      alert("error post crested");
    }
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder='title' value={body} onChange={(e) => setBody(e.target.value)} />
       <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Create
