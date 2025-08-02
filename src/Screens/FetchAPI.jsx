import React, { useEffect, useState } from 'react';

function FetchAPI() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filterdata, setFilterdata] = useState([]);

    const xyz = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await resp.json();
            console.log(data);
            setData(data);
            setFilterdata(data);
        } catch (error) {
            console.log("Error...", error);
        }
    };

    useEffect(() => {
        xyz();
    }, []);

    const handlesubmit = () => {
        const filteredData = data.filter(item =>
            item.id.toString().includes(search)
        );
        setFilterdata(filteredData);
        setSearch('');
    };
    const reset = () => {
        setSearch('');
        xyz();
    }

    return (
        <div style={{ padding: '20px' }}>
            <input
                type='number'
                placeholder='Enter search ID...'
                className='form-control'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ padding: '10px', width: '250px', marginRight: '10px' }}
            />
            
            <button className="btn btn-warning" onClick={handlesubmit}>Submit</button>
        
            <button className='btn btn-warning' onClick={reset}>reset</button>
          
            <ul>
                {filterdata.map(user => (
                    <li key={user.id}>{user.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default FetchAPI;
