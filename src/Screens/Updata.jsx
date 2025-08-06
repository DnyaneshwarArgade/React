import React, { useEffect, useState } from 'react';

function UpdateExample() {
  const [posts, setPosts] = useState([]);
  const [edit, setEdit] = useState(null);
  const [form, setForm] = useState({ title: '', body: '' });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(setPosts);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = (post) => {
    setEdit(post);
    setForm({ title: post.title, body: post.body });
  };

  const handleUpdate = async () => {
    if (!edit) return;

    const updatedPost = { ...edit, ...form };

    await fetch(`https://jsonplaceholder.typicode.com/posts/${edit.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPost),
    });

    setPosts(posts.map(p => (p.id === edit.id ? updatedPost : p)));
    setEdit(null);
    setForm({ title: '', body: '' });
    alert('Post updated!');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Update Posts</h2>
      <table border="1" cellPadding="6">
        <thead>
          <tr><th>ID</th><th>Title</th><th>Body</th><th>Edit</th></tr>
        </thead>
        <tbody>
          {posts.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.body}</td>
              <td><button onClick={() => handleEdit(p)}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {edit && (
        <div style={{ marginTop: 20 }}>
          <h3>Edit Post ID: {edit.id}</h3>
          <input name="title" value={form.title} onChange={handleChange} placeholder="Title" /><br /><br />
          <input name="body" value={form.body} onChange={handleChange} placeholder="Body" /><br /><br />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
    </div>
  );
}

export default UpdateExample;
