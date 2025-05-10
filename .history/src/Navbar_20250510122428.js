import React, { Component } from 'react';
import { Menu, MenuItem, MenuMenu, Icon, Sidebar, Segment } from 'semantic-ui-react';

class Navbar extends Component {
  state = {
    activeItem: 'home',
    sidebarVisible: false,
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleSidebarItemClick = (e, { name }) => {
    this.setState({ activeItem: name, sidebarVisible: false });
  };
  
  toggleSidebar = () => {
    this.setState(prev => ({ sidebarVisible: !prev.sidebarVisible }));
  };

  render() {
    const { activeItem, sidebarVisible } = this.state;

    return (
      <>
        {/* Top Nav */}
        <nav className="navbar">
          <img src="photo-portfolio.jpg" alt="logo" className="logo" />
          <h1>The OSJ Portfolio</h1>
          <div className="mobile-toggle" onClick={this.toggleSidebar}>
            <Icon name="bars" size="large" />
          </div>
          <div className="links desktop-only">
            <Menu secondary>
              <MenuItem name='accueil' active={activeItem === 'accueil'} onClick={this.handleItemClick} as="a" href="/" />
              <MenuItem name='projets' active={activeItem === 'projets'} onClick={this.handleItemClick} as="a" href="/projets" />
              <MenuItem name='formation' active={activeItem === 'formation'} onClick={this.handleItemClick} as="a" href="/formation" />
              <MenuItem name='expériences' active={activeItem === 'expériences'} onClick={this.handleItemClick} as="a" href="/experiences-professionnelle" />
              <MenuItem name='cv' active={activeItem === 'cv'} onClick={this.handleItemClick} as="a" href="/cv" />
              <MenuMenu position='right'>
                <MenuItem
                  name='portfolio'
                  active={activeItem === 'portfolio'}
                  onClick={this.handleItemClick}
                  as="a"
                  href="/"
                  style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                    padding: '6px',
                  }}
                />
              </MenuMenu>
            </Menu>
          </div>
        </nav>

        {/* Sidebar for mobile */}
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          vertical
          visible={sidebarVisible}
          width='thin'
          direction='right'
        >
          <MenuItem as="a" href="/" onClick={this.toggleSidebar}>Accueil</MenuItem>
          <MenuItem as="a" href="/projets" onClick={this.toggleSidebar}>Projets</MenuItem>
          <MenuItem as="a" href="/formation" onClick={this.toggleSidebar}>Formation</MenuItem>
          <MenuItem as="a" href="/experiences-professionnelle" onClick={this.toggleSidebar}>Expériences</MenuItem>
          <MenuItem as="a" href="/cv" onClick={this.toggleSidebar}>CV</MenuItem>
          <MenuItem as="a" href="/" onClick={this.toggleSidebar} style={{ backgroundColor: '#f1356d', color: 'white', borderRadius: '8px' }}>Portfolio</MenuItem>
        </Sidebar>
      </>
    );
  }
}

export default Navbar;
