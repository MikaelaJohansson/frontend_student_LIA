import React from 'react'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import styles from '../CSS/Home.module.css';


const Home = () => {
  return (
    <div className={styles.HomeContainer}>
        
      <p>

        <h1 className={styles.Homeh1}>Välkommen till LIA - Där drömmar möter möjligheter!</h1> <br />
        LIA är den ultimata plattformen för att snabbt och enkelt hitta din perfekta LIA-praktikplats (Lärande i Arbete). Vi samlar alla praktikannonser på ett ställe, så att du kan fokusera på det som är viktigast – att göra drömmen om praktiken till verklighet!
        <br />
        <br />
        <strong>Enkel sökfunktion:</strong> Med bara några klick kan du söka bland företag som erbjuder LIA-praktikplatser. Filtrera efter företagsnamn, plats eller inriktning för att hitta den perfekta matchningen för dina intressen och din utbildning. <br /> <br />

        <strong>Centraliserad plattform:</strong> Slipp leta på flera olika sajter! LIA Student Applikation samlar alla LIA-praktikannonser på en och samma plattform, så att du sparar tid och energi. <br /> <br />

        <strong>Ökad effektivitet:</strong> På LIA kan du snabbt hitta och ansöka till de praktikplatser som matchar din kompetens och utbildning, vilket gör ansökningsprocessen enkel och tidseffektiv. <br /> <br />

        <strong>För Företag:</strong> Företag kan enkelt nå ut till en stor grupp motiverade studenter som söker LIA-praktikplatser. Publicera annonser och få snabb kontakt med kvalificerade talanger som passar perfekt i ert team. <br /> <br />

        <h3 className={styles.Homeh3}>Välj LIA – Din genväg till praktikplatsen!</h3>

        <Link className={styles.Homelink} to="/Login">Logga in</Link> 
        <Link className={styles.Homelink} to="/Register">Skapa konto</Link>
          
      </p>

    </div>

  )
}

export default Home