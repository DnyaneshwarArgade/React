import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function FetchAPI() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filterdata, setFilterdata] = useState([]);

    const fetchdata = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const result = await response.json();
            console.log(result);
            setData(result);
            setFilterdata(result);
        } catch (error) {
            console.error("Fetch error", error);
        }
    };

    const handlereset = () => {
        setSearch('');
        setFilterdata(data);
    };

    const handlefilter = () => {
        const filtered = search === ''
            ? data
            : data.filter(filterall => filterall.id === Number(search));
        setFilterdata(filtered);
    }

    useEffect(() => {
        fetchdata();
    }, [])

    return (
        <div className='container'>

            <input type="number" placeholder='Search by Id...' value={search} onChange={(e) => setSearch(e.target.value)} className='form-control mt-4 mb-4 w-25' />
            <button type='reset' className='btn btn-danger mb-5' onClick={handlereset}>Reset</button>
            <button type='search' className='btn btn-primary mb-5' onClick={handlefilter}>Search</button>

            <table className='table table-bordered table-striped table-hover table-dark'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {filterdata.slice(0, 33).map(user => (
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
export default FetchAPI;  