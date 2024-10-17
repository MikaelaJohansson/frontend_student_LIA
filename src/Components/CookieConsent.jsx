import React, { useState, useEffect } from 'react';
import styles from "../CSS/CookieConsent.module.css"; 

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = async () => {
   localStorage.setItem('cookieConsent', 'granted');
    setShowBanner(false);

    try {
      await fetch('/api/accept-cookies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ consent: 'granted' })
      });
    } catch (error) {
      console.error('Misslyckades att skicka cookie-samtycke', error);
    }
  };

  const handleDecline = () => {
   localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.cookieOverlay}> 
      <div className={styles.cookieBanner}> 
        <p>Vi använder cookies för att förbättra din upplevelse. Godkänn våra cookies?</p>
        <button onClick={handleAccept}>Acceptera</button>
        <button onClick={handleDecline}>Neka</button>
      </div>
    </div>
  );
};

export default CookieConsent;
