import React, { useEffect, useState } from 'react';

function UpdateExample() {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);
  const [form, setForm] = useState({ title: '', body: '' });

  // Fetch all posts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10') // Only 10 posts
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Error:', err));
  }, []);

  // Set form for editing
  const onEdit = (post) => {
    setEditPost(post);
    setForm({ title: post.title, body: post.body });
  };

  // Handle input change
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Update post (mock only)
  const onUpdate = async () => {
    if (!editPost) return;

    const updated = {
      ...editPost,
      ...form
    };

    await fetch(`https://jsonplaceholder.typicode.com/posts/${editPost.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });

    // Update in UI (mock)
    setPosts(posts.map(p => p.id === editPost.id ? updated : p));
    setEditPost(null);
    setForm({ title: '', body: '' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Update Posts</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th><th>Title</th><th>Body</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td><button onClick={() => onEdit(post)}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {editPost && (
        <div style={{ marginTop: 20 }}>
          <h3>Editing Post ID: {editPost.id}</h3>
          <input
            name="title"
            value={form.title}
            onChange={onChange}
            placeholder="Title"
          /><br /><br />
          <input
            name="body"
            value={form.body}
            onChange={onChange}
            placeholder="Body"
          /><br /><br />
          <button onClick={onUpdate}>Update</button>
        </div>
      )}
    </div>
  );
}

export default UpdateExample;
