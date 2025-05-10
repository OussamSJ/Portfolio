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
       
          <Menu pointing secondary>
            <MenuItem
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name='formation'
              active={activeItem === 'formation'}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name='friends'
              active={activeItem === 'friends'}
              onClick={this.handleItemClick}
            />
            <MenuMenu position='right'>
              <MenuItem
                name='logout'
                active={activeItem === 'logout'}
                onClick={this.handleItemClick}
              />
            </MenuMenu>
          </Menu>
   
      </nav>
    );
  }
}

export default Navbar;
