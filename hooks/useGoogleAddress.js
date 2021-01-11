import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = address => {
  const [location, setLocation] = useState({});
  const api_key = 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw';
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${api_key}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(API);
        setLocation(data.results[0].geometry.location);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [API, address]);
  return location;
};

export default useGoogleAddress;
