import React, { useEffect, useState } from 'react'

function DataDelete() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))
            .catch(error => console.error("fetch error", error))
    }, [])

    const handledelete = async (id) => {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
            });
            alert(`post id ${id} deleted`);

            setPosts(posts.filter(post => post.id !== id));
        } catch (error) {
            console.error("Delete", error);
        }
    };
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tittle</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.slice(0, 10).map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>
                                <button onClick={() => handledelete(post.id)}>
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default DataDelete
