import React, { useEffect, useState } from 'react'
import {Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../CSS/Login.module.css';

const Login = () => {
  
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [csrfToken,setCsrfToken]=useState("");

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.patch("api");
        console.log("csrf token hämtat");
        setCsrfToken(response.data.csrfToken);
      } catch (error) {
        console.error("kunde ej hämta csrf-token", error);
      }
    };
    
    fetchCsrfToken();
  }, []); 
  

  const Login = async ()=>{
    try{
      const response = await axios.post(
        "",
        {
          email,
          password,
          csrfToken,
        }
      )
    }catch(error){
      console.error("Fel vid inloggning")
    }
  }

  return (

    <div className={styles.loginContainer}>
      <h1 className={styles.loginContainerh1}>Logga in</h1>
      <label htmlFor="Email">Email:</label>
      <input 
      type="text" 
      placeholder='Email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="Password">Lösenord:</label>
      <input 
      type="password" 
      placeholder='Lösenord'
      value={password}
      onChange={(e) => setPassword (e.target.value)}
      />
      <br />
      <button className={styles.loginContainerButton} onClick={Login}>Logga in</button>
      <br />
      <Link className={styles.loginlink} to="/">Tillbaka till startsidan</Link> 
      <Link className={styles.loginlink} to="/Register">Ny användare? Skapa konto</Link>
    </div>
  )
}

export default Login
