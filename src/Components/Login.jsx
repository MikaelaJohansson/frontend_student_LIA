import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../CSS/Login.module.css';

const Login = () => {
  
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const Login = async ()=>{
    try{
      const response = await axios.post(
        "",
        {
          email,
          password
        }
      )
    }catch(error){
      console.error("")
    }
  }

  return (

    <div className={styles.loginContainer}>
      <h1 className={styles.loginContainerh1}>Login</h1>
      <label htmlFor="Email">Email:</label>
      <br />
      <input 
      type="text" 
      placeholder='Email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="Password">Lösenord:</label>
      <br />
      <input 
      type="password" 
      placeholder='Lösenord'
      value={password}
      onChange={(e) => setPassword (e.target.value)}
      />
      <br />
      <br />
      <button className={styles.loginContainerButton} onClick={Login}>Logga in</button>
    </div>
  )
}

export default Login
