import React from 'react';

const phoneLinkStyle = {
  color: '#fff',
  textDecoration: 'underline',
  display: 'inline-block',
  animation: 'zoomInOut 1.5s infinite',
};

function Footer() {
  return (
    <footer style={{
      width: '100%',
      textAlign: 'center',
      padding: '1rem',
      position: 'fixed',
      left: -14,
      bottom: 0,
      color: '#fff',
      zIndex: 1000
    }}>
      {/* Clickable phone link with animation */}
      <style>{`
        @keyframes zoomInOut {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>
      <div style={{marginBottom: '0.5rem'}}>
        <a href="tel:+1(564)-232-5748" style={phoneLinkStyle}>Call: +1 (564)-232-5748</a>
      </div>
      RSB Halal Kitchen © {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
