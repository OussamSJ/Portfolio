import React, { Component } from 'react';
import { Menu, MenuItem, MenuMenu, Icon, Sidebar } from 'semantic-ui-react';
import { projets } from './projets/Projet';

class Navbar extends Component {

  state = {
    activeItem: 'accueil',
    sidebarVisible: false,
    projetDropdownOpen: false,
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  toggleSidebar = () => {
    this.setState(prev => ({ sidebarVisible: !prev.sidebarVisible }));
  };

  closeSidebar = () => {
    this.setState({ sidebarVisible: false });
  };

  toggleProjetDropdown = (e) => {
    e.preventDefault();
    this.setState(prev => ({ projetDropdownOpen: !prev.projetDropdownOpen }));
  };

  closeProjetDropdown = () => {
    this.setState({ projetDropdownOpen: false });
  };

  componentDidMount() {
    this.updateActiveItem();
    // Fermer le dropdown en cliquant en dehors
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  handleOutsideClick = (e) => {
    if (this.dropdownRef && !this.dropdownRef.contains(e.target)) {
      this.closeProjetDropdown();
    }
  };

  updateActiveItem = () => {
    const pathname = window.location.pathname;

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
    const { activeItem, sidebarVisible, projetDropdownOpen } = this.state;

    return (
      <>
        <style>{`
          .dropdown-container {
            position: relative;
            display: inline-block;
          }

          .dropdown-trigger {
            display: flex;
            align-items: center;
            gap: 4px;
            padding: 8px 12px;
            cursor: pointer;
            font-weight: 500;
            color: #3b3737;
            border-radius: 6px;
            transition: color 0.2s ease, background 0.2s ease;
            text-decoration: none;
            font-size: 0.95em;
            border: none;
            background: none;
          }

          .dropdown-trigger:hover,
          .dropdown-trigger.active {
            color: #f1356d;
          }

          .dropdown-trigger.active {
            font-weight: 700;
          }

          .dropdown-trigger .caret {
            transition: transform 0.25s ease;
            font-size: 0.75em;
            margin-left: 2px;
          }

          .dropdown-trigger .caret.open {
            transform: rotate(180deg);
          }

          .dropdown-menu {
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            min-width: 240px;
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.07);
            z-index: 200;
            overflow: hidden;
            animation: dropdownFade 0.18s ease;
            border: 1px solid #f0f0f0;
          }

          @keyframes dropdownFade {
            from { opacity: 0; transform: translateY(-6px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          .dropdown-header {
            padding: 10px 16px 6px;
            font-size: 0.7em;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: #aaa;
          }

          .dropdown-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 16px;
            text-decoration: none;
            color: #3b3737;
            font-size: 0.92em;
            transition: background 0.15s ease, color 0.15s ease;
          }

          .dropdown-item:hover {
            background: #fff0f4;
            color: #f1356d;
          }

          .dropdown-item .item-img {
            width: 36px;
            height: 36px;
            border-radius: 6px;
            object-fit: cover;
            flex-shrink: 0;
            border: 1px solid #eee;
          }

          .dropdown-item .item-info .item-title {
            font-weight: 600;
            display: block;
          }

          .dropdown-item .item-info .item-desc {
            font-size: 0.82em;
            color: #888;
            display: block;
            margin-top: 1px;
          }

          .dropdown-divider {
            height: 1px;
            background: #f3f3f3;
            margin: 4px 0;
          }

          .dropdown-all-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 16px;
            font-size: 0.9em;
            font-weight: 700;
            color: #f1356d;
            text-decoration: none;
            transition: background 0.15s;
          }

          .dropdown-all-link:hover {
            background: #fff0f4;
          }

          /* Sidebar projet accordion */
          .sidebar-sub {
            background: rgba(255,255,255,0.07);
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.3s ease;
          }
          .sidebar-sub.open {
            max-height: 400px;
          }
          .sidebar-sub-item {
            display: block;
            padding: 9px 16px 9px 32px;
            color: rgba(255,255,255,0.75) !important;
            font-size: 0.88em;
            text-decoration: none;
            transition: color 0.15s, background 0.15s;
          }
          .sidebar-sub-item:hover {
            color: #f1356d !important;
            background: rgba(255,255,255,0.06);
          }
          .sidebar-projet-toggle {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 16px;
            background: none;
            border: none;
            color: rgba(255,255,255,0.9);
            font-size: 1em;
            cursor: pointer;
            font-family: inherit;
            transition: background 0.15s;
          }
          .sidebar-projet-toggle:hover {
            background: rgba(255,255,255,0.08);
          }
          .sidebar-projet-toggle .caret {
            transition: transform 0.25s;
          }
          .sidebar-projet-toggle .caret.open {
            transform: rotate(180deg);
          }
        `}</style>

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

              {/* ---- Projets avec dropdown ---- */}
              <div
                className="dropdown-container"
                ref={el => this.dropdownRef = el}
              >
                <button
                  className={`dropdown-trigger${activeItem === 'projets' ? ' active' : ''}`}
                  onClick={this.toggleProjetDropdown}
                  aria-haspopup="true"
                  aria-expanded={projetDropdownOpen}
                >
                  Projets
                  <span className={`caret${projetDropdownOpen ? ' open' : ''}`}>▼</span>
                </button>

                {projetDropdownOpen && (
                  <div className="dropdown-menu border" role="menu">
                    <div className="dropdown-header">Projets récents</div>

                    {projets.map((projet) => (
                      <a
                        key={projet.id}
                        href={`/projet/${projet.id}`}
                        className="dropdown-item"
                        role="menuitem"
                        onClick={() => {
                          this.closeProjetDropdown();
                          this.setState({ activeItem: 'projets' });
                          window.scrollTo(0, 0);
                        }}
                      >
                        <img
                          src={projet.image}
                          alt={projet.titre}
                          className="item-img"
                        />
                        <span className="item-info">
                          <span className="item-title">{projet.titre}</span>
                          <span className="item-desc">{projet.description.slice(0, 50)}…</span>
                        </span>
                      </a>
                    ))}

                    <div className="dropdown-divider" />

                    <a
                      href="/projet"
                      className="dropdown-all-link"
                      onClick={() => {
                        this.closeProjetDropdown();
                        this.setState({ activeItem: 'projets' });
                      }}
                    >
                      Voir tous les projets
                      <Icon name="arrow right" style={{ margin: 0 }} />
                    </a>
                  </div>
                )}
              </div>
              {/* ---- fin dropdown ---- */}

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
                  name='contact'
                  active={activeItem === 'contact'}
                  onClick={this.handleItemClick}
                  as="a"
                  href="/#contact"
                  style={{
                    color: 'white',
                    fontSize: '1em',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                    padding: '8px 14px',
                  }}
                >
                  Me contacter
                </MenuItem>
              </MenuMenu>
            </Menu>
          </div>
        </nav>

        {/* Overlay */}
        {sidebarVisible && (
          <div
            onClick={this.closeSidebar}
            className="sidebar-overlay"
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
          onHide={this.closeSidebar}
        >
          <MenuItem as="a" href="/" onClick={this.closeSidebar} active={activeItem === 'accueil'}>
            Accueil
          </MenuItem>

          {/* Projets accordion mobile */}
          <button
            className="sidebar-projet-toggle"
            onClick={() => this.setState(prev => ({ projetDropdownOpen: !prev.projetDropdownOpen }))}
            aria-expanded={projetDropdownOpen}
          >
            <span>Projets</span>
            <span className={`caret${projetDropdownOpen ? ' open' : ''}`}>▼</span>
          </button>

          <div className={`sidebar-sub${projetDropdownOpen ? ' open' : ''}`}>
            <a href="/projet" className="sidebar-sub-item" onClick={this.closeSidebar}>
              — Tous les projets
            </a>
            {projets.map((projet) => (
              <a
                key={projet.id}
                href={`/projet/${projet.id}`}
                className="sidebar-sub-item"
                onClick={this.closeSidebar}
              >
                — {projet.titre}
              </a>
            ))}
          </div>

          <MenuItem as="a" href="/formation" onClick={this.closeSidebar} active={activeItem === 'formation'}>
            Formation
          </MenuItem>

          <MenuItem as="a" href="/experiences-professionnelle" onClick={this.closeSidebar} active={activeItem === 'expériences'}>
            Expériences
          </MenuItem>

          <MenuItem as="a" href="/cv" onClick={this.closeSidebar} active={activeItem === 'cv'}>
            CV
          </MenuItem>

          <MenuItem as="a" href="/#contact" onClick={this.closeSidebar}
            style={{ color: '#f1356d', fontWeight: 700 }}
          >
            Me contacter
          </MenuItem>
        </Sidebar>
      </>
    );
  }
}

export default Navbar;