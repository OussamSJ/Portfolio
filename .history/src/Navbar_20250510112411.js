import React, { Component } from 'react';
import { Menu, MenuItem, MenuMenu } from 'semantic-ui-react';

class Navbar extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <nav className="navbar">
        <img src="photo-portfolio.jpg" alt="logo" className="logo" />
        <h1>The OSJ Portfolio</h1>
        <div className="links">
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
              href="/projets"
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
                  backgroundColor: '#f1356d',
                  borderRadius: '8px',
                  padding: '6px'
                }}
              />
            </MenuMenu>
          </Menu>
        </div>
      </nav>
    );
  }
}

export default Navbar;
