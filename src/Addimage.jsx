import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Addimage = () => {
  const [data, setData] = useState({});
  const [picture, setPicture] = useState([]);

  let handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  let handleFile = (event) => {
    console.log(event.target.files);
    setData({ ...data, [event.target.name]: event.target.files[0] });
    console.log(data);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append('image', data.image);
    console.log(data);
    try {
      let response = await axios.post('http://localhost:4000/addimage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response);
    } catch (error) {
      console.error("There was an error uploading the image!", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/vimage');
        console.log("Fetched images:", response.data,'dfgdfg'); // Debug log
        setPicture(response.data); // Ensure we set the data part of the response
      } catch (e) {
        console.error("Error fetching images", e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleFile} name='image' type='file' />
        <button className='bg-black text-white' type='submit'>Submit</button>
      </form>
      {picture.map((item) => {
        console.log(`http://localhost:4000/uploads/${item.image}`);
        
        <div key={item._id}>
          <img
            className='h-96 w-96'
            src={`http://localhost:4000/uploads/${item.image}`}
            alt=''
    
            onError={(e) => console.error('Image not found:', e.target.src)} // Debug log
          />
          <div>{item._id}</div>
        </div>
        
})}
    </div>
  );
};
