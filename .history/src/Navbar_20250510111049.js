import { MenuMenu, MenuItem, Menu, Segment } from 'semantic-ui-react'



state = { activeItem: 'home' }

handleItemClick = (e, { name }) => this.setState({ activeItem: name })
const Navbar = () => {


  const { activeItem } = this.state

  return (
    <nav className="navbar">
      <img src="photo-portfolio.jpg" alt="logo" className="logo" />
      <h1>The OSJ Portfolio</h1>
      <div className="links">
        <Menu pointing secondary>
          <MenuItem
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <MenuItem
            name='messages'
            active={activeItem === 'messages'}
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
        </Menu></div></nav>
    );
  }
   
  export default Navbar;