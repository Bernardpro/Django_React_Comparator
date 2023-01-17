import React, { useEffect } from 'react';
import axios from 'axios';

const Jeans = () => {
    useEffect(()=> {
        axios
        .get("http://127.0.0.1:8000/api/data/")
        .then((res) => console.log( res.data ));
    }, []);
    return (
        <div className='jeans'>

            
        </div>
    );
};

export default Jeans;