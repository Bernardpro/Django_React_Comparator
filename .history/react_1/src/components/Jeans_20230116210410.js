import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
const Jeans = (props) => {
    const [data, setData] = useState([])
    useEffect(()=> {
        axios
            .get("http://localhost:8000/api/data/")
            .then((res) => setData( res.data ));
    }, []);
    return (
        <div className='jeans'>
            <h2>Jean</h2>
            <ul>
                {
                    data.map((jean) => (
                        <Card/>
                    )
                    )
                }
            </ul>
            
        </div>
    );
};

export default Jeans;