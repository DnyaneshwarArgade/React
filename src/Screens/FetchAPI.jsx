import React, { useEffect, useState } from 'react';

function FetchAPI() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    const xyz = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await resp.json();
            console.log(data);
            setData(data);
        } catch (error) {
            console.log("Error...", error);
        }
    };

    useEffect(() => {
        xyz();
    }, []);

    // Filter logic (corrected spelling of 'includes')
    const filteredData = data.filter(item =>
        item.id.toString().includes(search)
    );

    return (
        <div style={{ padding: '20px' }}>
            <input
                type='number'
                placeholder='Enter search ID...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ padding: '10px', width: '250px', marginBottom: '20px' }}
            />

            <ul>
                {filteredData.map(user => (
                    <li key={user.id}>{user.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default FetchAPI;
