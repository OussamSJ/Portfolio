import { MenuMenu, MenuItem, Menu, Segment } from 'semantic-ui-react'

const Navbar = () => {
    return (
      <nav className="navbar">
        <img src="photo-portfolio.jpg" alt="logo" className="logo" />
        <h1>The OSJ Portfolio</h1>
        <div className="links">
          <a href="/">Accueil</a>
          <a href="/projets">Projets</a>
          <a href="/formation">Formation</a>
          <a href="/experiences-professionnelle">Exp. professionnelle</a>
          <a href="/cv">CV</a>
          <a href="/" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>Portfolio</a></div></nav>
    );
  }
   
  export default Navbar;