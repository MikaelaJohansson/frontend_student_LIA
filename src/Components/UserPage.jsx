import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";
import axios from "axios";

const UserPage = () => {
  const [ads, setAds] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get("api"); 
        if (Array.isArray(response.data)) {
          setAds(response.data);
        } else {
          setAds([]); 
        }
        setLoading(false);
      } catch (error) {
        setError("Kunde ej hämta annonser");
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  if (loading) {
    return (
      <div>
        <NavBar />
        <h1>UserPage</h1>
        <p>Laddar annonser...</p> 
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <NavBar />
        <h1>UserPage</h1>
        <p>{error}</p> 
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <h1>UserPage</h1>
      <h2>Lediga LIA-platser:</h2>

      {ads.length === 0 ? (
        <p>Inga annonser ute just nu. Kolla senare!</p>
      ) : (
        <ul>
          {ads.map((ad, index) => (
            <li key={index}>
              <h3>{ad.title}</h3>
              <p>{ad.description}</p>
              <Link to={`/ads/${ad.id}`}>Läs mer</Link> 
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserPage;


