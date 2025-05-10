import React, { Component } from 'react';
import { Menu, MenuItem, MenuMenu, Icon, Sidebar, Segment } from 'semantic-ui-react';

class Navbar extends Component {
  state = {
    activeItem: 'home',
    sidebarVisible: false,
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  toggleSidebar = () => {
    this.setState(prev => ({ sidebarVisible: !prev.sidebarVisible }));
  };
  handleSidebarItemClick = (e, { name }) => {
    this.setState({ activeItem: name, sidebarVisible: false });
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
  onHide={() => this.setState({ sidebarVisible: false })} // ferme si clic hors sidebar
>
  <MenuItem as="a" href="/" name="accueil" onMouseDown={this.handleSidebarItemClick}>Accueil</MenuItem>
  <MenuItem as="a" href="/projets" name="projets" onMouseDown={this.handleSidebarItemClick}>Projets</MenuItem>
  <MenuItem as="a" href="/formation" name="formation" onMouseDown={this.handleSidebarItemClick}>Formation</MenuItem>
  <MenuItem as="a" href="/experiences-professionnelle" name="expériences" onMouseDown={this.handleSidebarItemClick}>Expériences</MenuItem>
  <MenuItem as="a" href="/cv" name="cv" onMouseDown={this.handleSidebarItemClick}>CV</MenuItem>
  <MenuItem as="a" href="/" name="portfolio" onMouseDown={this.handleSidebarItemClick}
    style={{ backgroundColor: '#f1356d', color: 'white', borderRadius: '8px' }}>
    Portfolio
  </MenuItem>
</Sidebar>
      </>
    );
  }
}

export default Navbar;
