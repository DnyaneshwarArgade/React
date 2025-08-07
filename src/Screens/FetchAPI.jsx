import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FetchAPI() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [search, setSearch] = useState('');

    const fetchdata = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result = await response.json();
        console.log(result);
        setData(result);
        setFilter(result);
    };

    useEffect(() => {
        fetchdata();
    }, []);

    const handleSearch = () => {
        const filtered = search == ''
            ? data
            : data.filter(item => item.id == search);
        setFilter(filtered);
    };

    const handleReset = () => {
        setSearch('');
        setFilter(data);
    };

    return (
        <div>
            <h4>fetch apit</h4>
            <input
                type='number'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Enter Id.....!!!'
                className='form-control w-50'
            />

            <button type='search' className='btn btn-info mb-5 mt-4' onClick={handleSearch}>Search</button>
            <button type='reset' className='btn btn-danger mb-5 mt-4' onClick={handleReset}>Reset</button>

            <table className='table table-bordered table-striped table-hover table-dark'>
                <thead>
                    <tr className='text-center'>
                        <th>Id</th>
                        <th>User Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {filter.length > 0 ? (
                        filter.map(user => (
                        <tr key={user.id}>
                            <td className='text-center'>{user.id}</td>
                            <td className='text-center'>{user.userId}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4" className='text-center'>No data found</td> 
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default FetchAPI;