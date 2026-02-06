import { color } from 'framer-motion';
import React, { Component } from 'react';
import { Menu, MenuItem, MenuMenu, Icon, Sidebar } from 'semantic-ui-react';

class Navbar extends Component {

  state = {
    activeItem: 'accueil',
    sidebarVisible: false,
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  toggleSidebar = () => {
    this.setState(prev => ({ sidebarVisible: !prev.sidebarVisible }));
  };

  componentDidMount() {
    this.updateActiveItem();
    
  }

  updateActiveItem = () => {
    const pathname = this.props.location?.pathname || window.location.pathname;

    if (pathname === '/') {
      this.setState({ activeItem: 'accueil' });
    } else if (pathname.startsWith('/projet')) {
      this.setState({ activeItem: 'projets' });
    } else if (pathname === '/formation') {
      this.setState({ activeItem: 'formation' });
    } else if (pathname === '/experiences-professionnelle') {
      this.setState({ activeItem: 'expériences' });
    } else if (pathname === '/cv') {
      this.setState({ activeItem: 'cv' });
    }
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
              <MenuMenu position='right'className="hover:text-white">
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
            onClick={this.sidebarVisible}
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


          {/* Items du menu mobile */}
          <MenuItem as="a" href="/" onClick={this.toggleSidebar} active={activeItem === 'accueil'}>

            Accueil
          </MenuItem>

          <MenuItem as="a" href="/projet" onClick={this.toggleSidebar} active={activeItem === 'projets'}>

            Projets
          </MenuItem>

          <MenuItem as="a" href="/formation" onClick={this.toggleSidebar} active={activeItem === 'formation'}>

            Formation
          </MenuItem>

          <MenuItem as="a" href="/experiences-professionnelle" onClick={this.toggleSidebar} active={activeItem === 'expériences'}>

            Expériences
          </MenuItem>

          <MenuItem as="a" href="/cv" onClick={this.toggleSidebar} active={activeItem === 'cv'}>

            CV
          </MenuItem>


         </Sidebar> 

      </>
    );
  }
}

export default Navbar;