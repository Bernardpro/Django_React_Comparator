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
    const [range, setRange] = useState("all");
    const [filteredData, setFilteredData] = useState(data);
    const handleSelectChange = event => {
        setRange(event.target.value);
        switch (event.target.value) {
          case "low":
            setFilteredData(data.filter(data => data.price >= 0 && data.price <= 20));
            break;
          case "medium":
            setFilteredData(data.filter(item => item.value > 20 && item.value <= 40));
            break;
          case "high":
            setFilteredData(data.filter(item => item.value > 40));
            break;
          default:
            setFilteredData(data);
        }
      };

    return (
        <div className='jeans'>
            <label>
                Filtrer par:
                <select value={range} onChange={handleSelectChange}>
                    <option value="all">Tout</option>
                    <option value="low">0-20€</option>
                    <option value="medium">Moyen</option>
                    <option value="high">Elevé</option>
                </select>
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