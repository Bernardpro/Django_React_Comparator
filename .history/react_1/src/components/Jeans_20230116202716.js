import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Jeans = () => {
    const [data, setData] = useState([])
    useEffect(()=> {
        axios
        .get("http://localhost:8000/api/data/")
        .then((res) => console.log( res.data ));
    }, []);
    return (
        <div className='jeans'>

            
        </div>
    );
};

export default Jeans;