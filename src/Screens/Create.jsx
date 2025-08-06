import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Create(){

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async(e) => {
       e.preventDefault();

       const data = {
        title,
        body,
       }
       try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(data)
        });
   
        const result = await response.json();
        console.log(result);
        alert("Post Created....!!....!!");
        setTitle('');
        setBody('');

       } catch (error) {
        console.error("Post error Created....!!", error);
       }
  }

  return(
    <div>
         <form onSubmit={handleSubmit}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
          <button type="Submit">Submit</button>
         </form>
    </div>
  )
}
export default Create;