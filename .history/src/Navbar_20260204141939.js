import React, { Component } from 'react';
import { Menu, MenuItem, MenuMenu, Icon, Sidebar } from 'semantic-ui-react';

class Navbar extends Component {

  state = {
    activeItem: 'home',
    sidebarVisible: false,
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  toggleSidebar = () => {
    this.setState(prev => ({ sidebarVisible: !prev.sidebarVisible }));
  };

  render() {
    const { activeItem, sidebarVisible } = this.state;

    return (
      <>
        {/* Navbar Desktop */}
        <nav className="navbar">
          <img src="/photo-portfolio.png" alt="logo" className="logo" />
          <h1>The OSJ Portfolio</h1>
          
          {/* Bouton hamburger pour mobile */}
          <div className="mobile-toggle" onClick={this.toggleSidebar}>
            <Icon name="bars" size="large" />
          </div>
          
          {/* Menu Desktop */}
          <div className="links desktop-only">
            <Menu secondary>
              <MenuItem 
                name='accueil' 
                active={activeItem === 'accueil'} 
                onClick={this.handleItemClick} 
                as="a" 
                href="/" 
              />
              <MenuItem 
                name='projets' 
                active={activeItem === 'projets'} 
                onClick={this.handleItemClick} 
                as="a" 
                href="/projet" 
              />
              <MenuItem 
                name='formation' 
                active={activeItem === 'formation'} 
                onClick={this.handleItemClick} 
                as="a" 
                href="/formation" 
              />
              <MenuItem 
                name='expériences' 
                active={activeItem === 'expériences'} 
                onClick={this.handleItemClick} 
                as="a" 
                href="/experiences-professionnelle" 
              />
              <MenuItem 
                name='cv' 
                active={activeItem === 'cv'} 
                onClick={this.handleItemClick} 
                as="a" 
                href="/cv" 
              />
              <MenuMenu position='right'>
                <MenuItem
                  name='portfolio'
                  active={activeItem === 'portfolio'}
                  onClick={this.handleItemClick}
                  as="a"
                  href="/"
                  style={{
                    color: 'white',
                    fontSize: '1.4em',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                    padding: '6px',
                  }}
                />
              </MenuMenu>
            </Menu>
          </div>
        </nav>

        {/* Overlay - Fond sombre cliquable pour fermer le sidebar */}
        {sidebarVisible && (
          <div
            onClick={this.toggleSidebar}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 100,
              cursor: 'pointer'
            }}
            aria-label="Fermer le menu"
          />
        )}

        {/* Sidebar Mobile */}
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          vertical
          visible={sidebarVisible}
          width='thin'
          direction='right'
          style={{ 
            backgroundColor: '#3b3737', 
            zIndex: 101,
            paddingTop: '20px'
          }}
          onHide={this.toggleSidebar}
        >
          {/* Bouton fermer en haut du sidebar */}
          <MenuItem 
            onClick={this.toggleSidebar}
            style={{ 
              textAlign: 'right', 
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              marginBottom: '10px'
            }}
          >
            <Icon name="close" size="large" />
          </MenuItem>

          {/* Items du menu mobile */}
          <MenuItem as="a" href="/" onClick={this.toggleSidebar}>
            <Icon name="home" />
            Accueil
          </MenuItem>
          
          <MenuItem as="a" href="/projet" onClick={this.toggleSidebar}>
            <Icon name="folder open" />
            Projets
          </MenuItem>
          
          <MenuItem as="a" href="/formation" onClick={this.toggleSidebar}>
            <Icon name="graduation cap" />
            Formation
          </MenuItem>
          
          <MenuItem as="a" href="/experiences-professionnelle" onClick={this.toggleSidebar}>
            <Icon name="briefcase" />
            Expériences
          </MenuItem>
          
          <MenuItem as="a" href="/cv" onClick={this.toggleSidebar}>
            <Icon name="file pdf outline" />
            CV
          </MenuItem>
          
          {/* Bouton Portfolio mis en avant */}
          <MenuItem 
            as="a" 
            href="/" 
            onClick={this.toggleSidebar} 
            style={{ 
              backgroundColor: '#f1356d', 
              color: 'white', 
              borderRadius: '8px',
              margin: '20px 10px',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            <Icon name="star" />
            Portfolio
          </MenuItem>
        </Sidebar>

      </>
    );
  }
}

export default Navbar;