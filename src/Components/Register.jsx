import React, { useEffect, useState } from 'react';
import styles from "../CSS/Register.module.css";  
import { Link } from 'react-router-dom';
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pitch, setPitch] = useState("");
  const [link, setLink] = useState("");
  const [csrfToken,setCsrfToken]=useState("");

  useEffect(()=>{
    axios.patch("api")
    .then(Response =>{
      setCsrfToken(Response.data.csrfToken);
    })
    .catch(error =>{
      console.error("fel vid hämtning av csrf-token")
    })
  },[]);

  const handleRegister = async () => {
    try {
      const response = await axios.post("api", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        pitch: pitch,
        link: link,
        csrfToken: csrfToken
      });
  
      console.log(response.data); 
  
    } catch (error) {
      console.error("Fel vid registrering", error);
    }
  };

  return (

    <div className={styles.registerContainer}>
      <h1 className={styles.registerContainerh1}>Registrera dig</h1>
      <form>
        <label htmlFor="first name">Förnamn:</label>
        <br />
        <input 
          type="text" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          placeholder="Förnamn"
        />
        <br />
        <label htmlFor="last name">Efternamn:</label>
        <br />
        <input 
          type="text"  
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          placeholder="Efternamn"
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Ange din email"
        />
        <br />
        <label htmlFor="password">Lösenord:</label>
        <br />
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Ange ditt lösenord"
        />
        <br />
        <label htmlFor="Your sales pitch">Sales pitch:</label>
        <br />
        <input 
          type="text" 
          value={pitch} 
          onChange={(e) => setPitch(e.target.value)} 
          placeholder="Sales pitch"
        />
        <br />
        <label htmlFor="link">Linkedin:</label>
        <br />
        <input 
          type="text" 
          value={link} 
          onChange={(e) => setLink(e.target.value)} 
          placeholder="Link"
        />
        <br />
        <br />
        <button className={styles.registerContainerButton} type="button" onClick={handleRegister}>Registrera dig</button>
        <br />
        <Link className={styles.regLink} to="/Login">Logga in</Link> 
        <Link className={styles.regLink} to="/">Tillbaka till startsidan</Link>
      </form>
     
    </div>
  );
};

export default Register;

