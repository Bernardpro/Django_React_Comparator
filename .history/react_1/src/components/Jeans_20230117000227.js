import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import '../styles/components/_jean.scss'
const Jeans = (props) => {
    const [data, setData] = useState([])
    useEffect(()=> {
        axios
            .get("http://localhost:8000/api/data/")
            .then((res) => setData( res.data ));
    }, []);
    return (
        <div className='jeans'>
            <ul className="filter"></ul>
                <input type="range" id="" min="1" max="300" />
            <ul>
                {
                    data
                        .filter((data) => {
                        return data.style.includes(props.style)
                    })
                        
                    .map((jean) => (
                        <Card key={jean.id} 
                        url_image={jean.url_image} 
                        price={jean.price} 
                        name={jean.name} 
                        url={jean.url}/>
                    ))}
            </ul>
            
        </div>
    );
};

export default Jeans;