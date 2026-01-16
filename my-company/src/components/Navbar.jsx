import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#f0f0f0'
  };

  const linksStyle = {
    display: 'flex',
    gap: '10px'
  };

  return (
    <nav style={navStyle}>
      <div style={{ fontWeight: 'bold' }}>Our Company</div>
      <div style={linksStyle}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
