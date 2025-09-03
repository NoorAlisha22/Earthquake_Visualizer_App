// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer">
      <p>📡Real-Time Earthquake Tracker</p>
      <p>
        Developed by Noor Alisha | 
        <a href="https://nooralisha.netlify.app/" target="_blank" rel="noopener noreferrer">
          Portfolio
        </a>
      </p>
      <p>
        Data powered by{" "}
        <a href="https://earthquake.usgs.gov/" target="_blank" rel="noopener noreferrer">
          USGS
        </a>
      </p>
    </footer>
  );
}
