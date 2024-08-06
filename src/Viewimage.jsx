import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Viewimage = () => {
    const [picture, setPicture] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:4000/vimage');
            console.log("Fetched images:", response.data);
            setPicture(response.data); 
          } catch (e) {
            console.error("Error fetching images", e);
          }
        };
        fetchData();
      }, []);

  return (
    <div>
        {picture.map((item) => (
        <div key={item._id}>
          <img
            className='h-96 w-96'
            src={`http://localhost:4000/uploads/${item.image}`}
            alt=''
            onError={(e) => console.error('Image not found:', e.target.src)} 
          />
        </div>
      ))}
    </div>
  )
}
