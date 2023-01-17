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
    }, [] );
    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const handleMinChange = event => {
        setMinValue(event.target.value);
        setFilteredData(
          data.filter(item => item.value >= minValue)
        );
    };
    const handleMaxChange = event => {
        setMaxValue(event.target.value);
        setFilteredData(
          data.filter(item => item.value <= maxValue)
        );
    };


    return (
        <div className='jeans'>
            <label>
                Min:
                <input
                    type="number"
                    value={minValue}
                    onChange={handleMinChange}/>
            </label>
            <label>
                Max:
                    <input
                        type="number"
                        value={maxValue}
                        onChange={handleMaxChange}/>
            </label>
            <ul>
                {
                    filteredData
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