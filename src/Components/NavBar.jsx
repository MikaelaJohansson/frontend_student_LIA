import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faUserCircle  } from '@fortawesome/free-solid-svg-icons'; 
import styles from '../CSS/NavBar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => {
      setIsOpen(!isOpen); 
    };
  
    return (
      <div className={styles.navbar}>

        <Link to="/login">
          <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: '50px', cursor: 'pointer', marginLeft:"2rem" }} />
        </Link>
        <h1>LIA</h1>
        
        <button onClick={toggleMenu} style={{ fontSize: '20px', cursor: 'pointer', marginRight:"3rem" }}>
          ☰
        </button>
  
        {isOpen && (
          <div style={{ marginRight:"3rem" }}>
            <a href="/">Hem</a>
            <br />
            <a href="/Login">Login</a>
            <br />
            <a href="/Register">Registrera</a>
          </div>
        )}
      </div>
    );
};

export default Navbar;

