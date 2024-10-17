import React, { useState, useEffect } from 'react';

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
    <div style={{ position: 'fixed', bottom: 0, backgroundColor: 'lightgray', padding: '20px', width: '100%' }}>
      <p>Vi använder cookies för att förbättra din upplevelse. Godkänn våra cookies?</p>
      <button onClick={handleAccept}>Acceptera</button>
      <button onClick={handleDecline}>Neka</button>
    </div>
  );
};

export default CookieConsent;
