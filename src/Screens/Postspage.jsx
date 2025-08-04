import React, { useState } from 'react';

function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // form reload होऊ देत नाही

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1,
        }),
      });

      const result = await response.json();
      console.log('Server Response:', result);
      setResponseData(result);

      // फॉर्म क्लिअर करतो
      setTitle('');
      setBody('');  
    } catch (error) {
      console.error('POST Error:', error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>React POST Method Example</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
        />

        <textarea
          placeholder="Enter body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={4}
          style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
        />

        <button
          type="submit"
          style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none' }}
        >
          Submit
        </button>
      </form>

      {responseData && (
        <div style={{ marginTop: '20px', backgroundColor: '#f1f1f1', padding: '15px' }}>
          <h4>Server Response:</h4>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default PostForm;
