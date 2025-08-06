// // import React, { useEffect, useState } from 'react'

// // function DataDelete() {
// //     const [posts, setPosts] = useState([]);

// //     useEffect(() => {
// //         fetch('https://jsonplaceholder.typicode.com/posts')
// //             .then(response => response.json())
// //             .then(posts => setPosts(posts))
// //             .catch(error => console.error("fetch error", error))
// //     }, [])

// //     const handledelete = async (id) => {
// //         try {
// //             await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
// //                 method: 'DELETE',
// //             });
// //             alert(`post id ${id} deleted`);

// //             setPosts(posts.filter(post => post.id !== id));
// //         } catch (error) {
// //             console.error("Delete", error);
// //         }
// //     };
// //     return (
// //         <div>
// //             <table>
// //                 <thead>
// //                     <tr>
// //                         <th>Id</th>
// //                         <th>Tittle</th>
// //                         <th>Action</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {posts.slice(0, 10).map(post => (
// //                         <tr key={post.id}>
// //                             <td>{post.id}</td>
// //                             <td>{post.title}</td>
// //                             <td>
// //                                 <button onClick={() => handledelete(post.id)}>
// //                                     delete
// //                                 </button>
// //                             </td>
// //                         </tr>
// //                     ))}

// //                 </tbody>
// //             </table>
// //         </div>
// //     )
// // }

// // export default DataDelete

// import React, {useEffect, useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'

// function DataDelete(){
//     const [posts, setPosts] = useState([]);

//     useEffect(()=> {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(posts => setPosts(posts))
//         .catch(error => console.log("Error Fetch...!!", error))
//     },[])

//     const handledelete = async(id) => {
//         try {
//             const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
//                 method : 'DELETE',
//             });
//             alert(`post id ${id} was deleted`);
//             setPosts(posts.filter(post => post.id !== id));
//         } catch (error) {
//             console.error("delted error", error);
//         }
//     }
//     return(
//         <div>
//             <table className='table table-striped table-bordered table-hover table-dark'>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>body</th>
//                         <th>Title</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {posts.slice(0, 10).map(user => (
//                         <tr key={user.id}>
//                             <td>{user.id}</td>
//                             <td>{user.title}</td>
//                             <td>{user.body}</td>
//                             <td>
//                                 <button className='btn btn-warning' onClick={() => handledelete(user.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }
// export default DataDelete;

import React, {useState, useEffect} from 'react';

function DataDelete(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => setPosts(posts))
        .catch(error => console.log("error fetch", error))
    },[])

    const handledelete = async(id) => {
          try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
                method : 'DELETE'
            });
            alert(`Post id ${id} Delete...!!!`);
            setPosts(posts.filter(post=> post.id !== id));
            // setPosts(posts.filter(post => post.id !== id));
          } catch (error) {
            console.error("delete error", error);
          }
    }
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.slice(0, 4).map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                            <td>
                                <button onClick={() => handledelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default DataDelete;