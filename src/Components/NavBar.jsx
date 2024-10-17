import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons'; 
import styles from '../CSS/NavBar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    const handleLogout = () => {
        const confirmed = window.confirm("Vill du logga ut?");
        if (confirmed) {
            navigate('/login');
        }
    };

    return (
        <div className={styles.navbar}>
            <div className={styles['icon-container']}>
                <FontAwesomeIcon 
                    icon={faUserCircle} 
                    style={{ fontSize: '50px', cursor: 'pointer', marginLeft: "2rem" }} 
                    onClick={handleLogout}
                />
            </div>

            <h1>LIA</h1>

            <button onClick={toggleMenu} style={{ fontSize: '20px', cursor: 'pointer', marginRight:"3rem" }}>
                ☰
            </button>

            {isOpen && (
                <div style={{ marginRight: "3rem" }}>
                    <a href="/UserPage">Hem</a>
                    <br />
                    <a href="/Offers">Erbjudanden från företag</a>
                    <br />
                    <a href="/AppliedComp">Se dina sökta platser</a>
                    <br />
                    <a href="/EditProfile">Redigera profil</a>
                </div>
            )}
        </div>
    );
};

export default Navbar;



